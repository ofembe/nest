import React, {Component} from "react";
import Web3 from "web3";
import NestDeposit from "../../contracts/NestDeposit.json";
import getWeb3 from "../../getWeb3";

import "../../App.css";
import { MarketItem } from "../../components/MarketItem";
import { RinkebyAddresses } from "../../constants/addresses";
import { TransferItem } from "../../components/TransferItem";

class Deposit extends Component {
  state = { deposits: [], storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = NestDeposit.networks[networkId];
      const instance = new web3.eth.Contract(
        NestDeposit.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  sendEther = async(address, amount) => {
    const { accounts, contract } = this.state;
    await contract.methods.transferEther(address).send({from: accounts[0],  value: amount});
  }

  execute = async () => {
    const { accounts, contract } = this.state;
    this.state.deposits.filter((d) => d.value > 0).forEach(async(dep) => {
        await contract.methods.depositErc20(
          dep.address.ercAddress,
          dep.address.address,
          dep.value)
          .send({from: accounts[0]});
          console.log(dep.address.name);
    });

  };


  withdraw = async () => {
    const { accounts, contract } = this.state;
    this.state.deposits.filter((d) => d.value > 0).forEach(async(dep) => {
        await contract.methods.withdrawErc20Tokens(
          dep.address.ercAddress,
          dep.value)
          .send({from: accounts[0]});
          console.log(dep.address.name);
    });

  };

  update = (address, value) => {
    const deposit = this.state.deposits.find((dep) => dep.address.address === address.address);
    if(deposit) {
      const newDeps = this.state.deposits.map((d) => {
        if(d.address.address === address.address) {
          return {address: address, value: value || 0};
        }

        return d;
      });
      this.setState({deposits: [...newDeps]});
    } else {
      this.setState({deposits: [...this.state.deposits, {address: address, value: value}]});
    }
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <>
      
      <header className="sans-serif">
      <div className="cover bg-left bg-center-l">
        <div className="pb5 pb6-m pb7-l">
          <nav className="dt w-100 mw8 center"> 
            <div className="dtc w2 v-mid pa3">
              <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                <svg className="link white-90 hover-green" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
              </a>
            </div>
            <div className="dtc v-mid tr pa3">
              <a className="f6 fw4 hover-green no-underline  dn dib-ns pv2 ph3" href="/" >How it Works</a> 
              <a className="f6 fw4 hover-green no-underline  dn dib-ns pv2 ph3" href="/" >Pricing</a> 
              <a className="f6 fw4 hover-green no-underline  dn dib-l pv2 ph3" href="/" >About</a> 
              <a className="f6 fw4 hover-green no-underline  dn dib-l pv2 ph3" href="/" >Careers</a> 
              <a className="f6 fw4 hover-green no-underline  dib ml2 pv2 ph3 ba" href="/" >Sign Up</a> 
            </div>
          </nav> 
          <div className="tc-l mt4 mt5-m mt6-l ph3">
          <div className="mw6 center">
            <TransferItem submit={this.sendEther} />
        { RinkebyAddresses.map((a) => {
            return <MarketItem key={a.name} update={this.update} address={a}/>
        })
        }
        <br/>
        <div onClick={this.execute} className="f6 link dim br1 ph3 pv2 mb2 dib white bg-near-black" href="#0">Deposit</div>
        <div onClick={this.withdraw} className="f6 link dim br1 ph3 pv2 mb2 dib white bg-near-black" href="#0">Withdraw</div>

      </div>

          </div>
        </div>
      </div> 
    </header>
    </>

      



      
    )


  }
}

export default Deposit;
