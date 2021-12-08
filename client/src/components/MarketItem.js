import React, {useState} from "react";
import BigNumber from "bignumber.js";
import Erc20 from "../contracts/Erc20.json";
import useEthereumAccounts from "../hooks/useEthereumAccounts";


export const MarketItem = ({address, deposit}) => {
  const {web3, accounts, contract} = useEthereumAccounts();
    const [value, setValue] = useState(0.000);
    const submit = () => {
      if(deposit) {
        depositFunds();
      } else {
        withdraw();
      }
    }

    const depositFunds = async () => {
        const amount = ((new BigNumber(10)).exponentiatedBy(address.decimals)).multipliedBy(value);
        // Approve ERC contract approval
        console.log(web3);

        const underlying = new web3.eth.Contract(Erc20.abi, address.ercAddress);
        await underlying.methods.approve(contract._address, amount.toFixed()).send({from: accounts[0]});
  
      //  Send
      try {
          await contract.methods.depositErc20(
            address.ercAddress,
            address.address, 
            amount.toFixed())
            .send({from: accounts[0]});
            console.log(address.name);
          }catch(err) {
            console.log(err);
          }
    };

    const withdraw = async () => {
        const amount = ((new BigNumber(10)).exponentiatedBy(address.decimals)).multipliedBy(value);
        try {
          await contract.methods.withdrawErc20Tokens(
            address.ercAddress,
            amount.toFixed())
            .send({from: accounts[0]});
            console.log(address.name);
          } catch(err) {
              console.log(err);
          }  
    };

    if(address.token === false) {
        return null;
    }

    return (
      <div className="mt-2">
      <form>
        <div class="form-group">
          <label for="amount">
          <div className="d-inline-block">
            <img height="20" src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4"/>
          </div>
            <span>Amount({address.name})</span>
            </label>
          <input style={{maxWidth: 300}} id="amount" class="form-control" onChange={(e) => {setValue(e.target.value)}} placeholder="0.000" type="number"/>
        </div>
        <div class="form-group">
            <button type="button" className="btn btn-primary" onClick={submit}>Confirm</button>
        </div>
  </form>
  </div>)
}

