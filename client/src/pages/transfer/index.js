import React from "react";
import BigNumber from "bignumber.js";
import Layout from "../../parts/Layout";
import { TransferForm } from "../../components/TransferForm";
import useEthereumAccounts from "../../hooks/useEthereumAccounts";

const Transfer  = () => {
  const {web3, accounts, contract} = useEthereumAccounts();

  const transfer = async (address, to, value) => {
    const amount = ((new BigNumber(10)).exponentiatedBy(address.decimals)).multipliedBy(value);
    try {
      await contract.methods.withdrawErc20Tokens(
        address.ercAddress,
        amount.toFixed())
        .send({from: accounts[0]});
      } catch(err) {
          console.log(err);
      }  
  };

    return (
      <Layout>
        <h4>Transfer</h4>
          <TransferForm onSubmit={transfer}/>
    </Layout>  
    )
}

export default Transfer;
