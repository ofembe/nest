import React, { useState } from "react";
import BigNumber from "bignumber.js";
import Erc20 from "../../contracts/Erc20.json";
import { SaveForm } from "../../components/SaveForm";
import Layout from "../../parts/Layout";
import useEthereumAccounts from "../../hooks/useEthereumAccounts";

const Save  = () => {
    const {web3, accounts, contract} = useEthereumAccounts();

    const save = async (address, value) => {
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

    return (
      <Layout>
        <h4>Save</h4>
        <SaveForm onSubmit={save} />
      </Layout>  
    )
}

export default Save;
