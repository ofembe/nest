class Web3Store {
    setWeb3(web3) {
        this.web3 = web3;
    }

    getWeb3() {
        return this.web3;
    }

    setAccounts(accounts) {
        this.accounts = accounts;
    }

    getAccounts() {
        return this.accounts;
    }

    setComtract(contract) {
        this.contract = contract;
    }

    getContract() {
        return this.contract;
    }
}

export default new Web3Store();