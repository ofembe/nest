import React, {Component} from "react";
import {utils} from "web3";
import BigNumber from "bignumber.js";
import NestDeposit from "../../contracts/NestDeposit.json";
import Erc20 from "../../contracts/Erc20.json";

import getWeb3 from "../../getWeb3";
import Layout from "../../parts/Layout";

import "../../App.scss";
import { RinkebyAddresses } from "../../constants/addresses";
import { TransferItem } from "../../components/TransferItem";

class Transfer extends Component {
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
    const { accounts, web3 } = this.state;
    const amountToSend = utils.toWei(amount, "ether"); // Convert to wei value
    await web3.eth.sendTransaction({ from: accounts[0], to:address, value: amountToSend });
  }

  deposit = async () => {
    const { accounts, contract, web3 } = this.state;
    this.state.deposits.filter((d) => d.value > 0).forEach(async(dep) => {
      const amount = ((new BigNumber(10)).exponentiatedBy(dep.address.decimals)).multipliedBy(dep.value);

      // Approve ERC contract approval
      const underlying = new web3.eth.Contract(Erc20.abi, dep.address.ercAddress);
      await underlying.methods.approve(contract._address, amount.toFixed()).send({from: accounts[0]});

    //  Send
    try {
        await contract.methods.depositErc20(
          dep.address.ercAddress,
          dep.address.address, 
          amount.toFixed())
          .send({from: accounts[0]});
          console.log(dep.address.name);
        }catch(err) {
          console.log(err);
        }
    });

  };


  withdraw = async () => {
    const { accounts, contract } = this.state;
    this.state.deposits.filter((d) => d.value > 0).forEach(async(dep) => {
      const amount = ((new BigNumber(10)).exponentiatedBy(dep.address.decimals)).multipliedBy(dep.value);
      try {
        await contract.methods.withdrawErc20Tokens(
          dep.address.ercAddress,
          amount.toFixed())
          .send({from: accounts[0]});
          console.log(dep.address.name);
        } catch(err) {
            console.log(err);
        }
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
    return (
      <Layout>
        <h4>Transfer</h4>
          <TransferItem/>
    </Layout>  
    )


  }
}

export default Transfer;
