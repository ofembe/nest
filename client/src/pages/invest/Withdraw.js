import React from "react";
import BigNumber from "bignumber.js";
import Layout from "../../parts/Layout";
import "../../App.scss";
import { WithdrawForm } from "../../components/WithdrawForm";
import useEthereumAccounts from "../../hooks/useEthereumAccounts";

const Withdraw = () => {
  const {web3, accounts, contract} = useEthereumAccounts();

  const withdraw = async (address, value) => {
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
    return (
      <Layout>
        <h4>Withdraw</h4>
          <WithdrawForm onSubmit={withdraw}/>
      </Layout>  
    )
}

export default Withdraw;
