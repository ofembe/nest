pragma solidity >=0.4.22 <0.9.0;
interface Erc20 {
    function approve(address, uint256) external returns (bool);

    function transfer(address, uint256) external returns (bool);

    function transferFrom(address, address, uint256) external returns (bool);
}
interface CErc20 {
    function mint(uint256) external returns (uint256);

    function exchangeRateCurrent() external returns (uint256);

    function supplyRatePerBlock() external returns (uint256);

    function redeem(uint) external returns (uint);

    function redeemUnderlying(uint) external returns (uint);

    function transfer(address, uint256) external returns (bool);
}
interface CEth {
    function mint() external payable;

    function exchangeRateCurrent() external returns (uint256);

    function supplyRatePerBlock() external returns (uint256);

    function redeem(uint) external returns (uint);

    function redeemUnderlying(uint) external returns (uint);
}

interface IRecursive {
    function updateReserve(
        address _erc20Contract,
        address _cErc20Contract) external returns (bool);

    function fillReserve(
            address _erc20Contract,
            uint256 amount) external returns (bool);
}

contract NestDeposit is IRecursive {

    struct Pool {
        uint256 balance;
        uint256 reserve;
        uint256 performanceFee;
        uint256 managementFee;
    }

    struct Token {
        uint256 balance;
    }

    struct Account {
        mapping(address => Token) tokens;
    }

    mapping(address => Account) internal accounts;

    mapping(address => Pool) internal pools;

    mapping(address => address) internal marketPairs;

    event MyLog(string, uint256);

    event DepositMade(address pool, address cerc20, address from, uint256 amount);

    event WithdrawalMade(address pool, address cerc20, address to, uint256 amount);

    function setPoolReserveMin(address _erc20Contract, uint256 amount) external returns(bool){
        Pool storage pool = pools[_erc20Contract];
        pool.reserve = amount;
        return true;
    }

    function getPoolReserveMin(address _erc20Contract) external view returns(uint256){
        return pools[_erc20Contract].reserve;
    }

    function updateReserve(
        address _erc20Contract,
        address _cErc20Contract) external override returns (bool) {

        // Create a reference to the underlying asset contract, like DAI.
        Erc20 underlying = Erc20(_erc20Contract);

        // Create a reference to the corresponding cToken contract, like cDAI
        CErc20 cToken = CErc20(_cErc20Contract);

        // Update pool balance
        Pool storage pool = pools[_erc20Contract];
        if(pool.balance > pool.reserve ) {
            uint256 amount = pool.balance - pool.reserve;
            underlying.approve(_cErc20Contract, amount);
            cToken.mint((amount));

            // Save valid Erc20 to cErc20 pair
            marketPairs[_erc20Contract] = _cErc20Contract;
        }

        return true;
    }

       function fillReserve(
            address _erc20Contract,
            uint256 amount) external override returns (bool) {

        // Get valid cERC20 address from previous succesful deposit
        address _cErc20Contract = marketPairs[_erc20Contract];

        // Create a reference to the corresponding cToken contract, like cDAI
        CErc20 cToken = CErc20(_cErc20Contract);

        // Redeem underlying
        uint256 redeemed = cToken.redeemUnderlying(amount);

        // Update pool balance
        pools[_erc20Contract].balance += redeemed;

        return true;
    }

    function depositErc20(
        address _erc20Contract,
        address _cErc20Contract,
        uint256 _numTokensToSupply
    ) public returns (uint256) {        
        // Create a reference to the underlying asset contract, like DAI.
        Erc20 underlying = Erc20(_erc20Contract);

        // Create a reference to the corresponding cToken contract, like cDAI
        CErc20 cToken = CErc20(_cErc20Contract);

        // Approve transfer on the ERC20 contract
        underlying.approve(_cErc20Contract, _numTokensToSupply);

        //  Record tokens
        // Get user account
        Account storage account = accounts[msg.sender];

        // Save deposit
        Token storage token = account.tokens[_erc20Contract];

        // Get exchange rate
        uint256 exchangeRateMantissa = cToken.exchangeRateCurrent();

        // Calculate cToken value
        uint256 mintResult = _numTokensToSupply*exchangeRateMantissa;

        // Update pool balance
        pools[_erc20Contract].balance += _numTokensToSupply;

        // Give this contract the ERC20 Tokens
        underlying.transfer(address(this), _numTokensToSupply);

        // Calculate current balance  and add new balance to it
        token.balance += mintResult;

        // Check if we should mint
        IRecursive(address(this)).updateReserve(_erc20Contract, _cErc20Contract);

        return mintResult;
    }


    function withdrawErc20Tokens(
        uint256 amount,
        address _erc20Contract
    ) internal returns (bool) {
        // Get valid cERC20 address from previous succesful deposit
        address _cErc20Contract = marketPairs[_erc20Contract];

        // Create a reference to the underlying asset contract, like DAI.
        Erc20 underlying = Erc20(_erc20Contract);

        // Create a reference to the corresponding cToken contract, like cDAI
        CErc20 cToken = CErc20(_cErc20Contract);

        // Get user account
        Account storage account = accounts[msg.sender];

        // Check if user has enough funds
        Token storage token = account.tokens[_erc20Contract];

        uint256 exchangeRateMantissa = cToken.exchangeRateCurrent();

        uint256 underlyingAmount = token.balance / exchangeRateMantissa;

        assert((underlyingAmount) > amount);

        // Get pool
        Pool storage pool = pools[_erc20Contract];

        if(pool.reserve < amount) {
            // Redeem underlying
            IRecursive(address(this)).fillReserve(_erc20Contract, amount);
        }

        underlying.transferFrom(address(this), msg.sender, amount);

        // Subtract cTokens
        token.balance -= amount*exchangeRateMantissa;

        return true;
    }

     receive() external payable {
            // React to receiving ether
     }
}