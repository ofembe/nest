import React, { useState } from "react";
import { AddressPairForm } from "../../components/typeInput/AddressPairForm.js";
import Layout from "../../parts/Layout";
import useEthereumAccounts from "../../hooks/useEthereumAccounts";

const Variables = () => {
  const {web3, accounts, contract} = useEthereumAccounts();

  const changeMarketPair = async (ercAddress, address) => {
    try {
        await contract
        .methods
        .setMarketPair(ercAddress,address)
        .send({from: accounts[0]});
        }catch(err) {
          console.log(err);
    }
  }
  
  return (<Layout>
    <h4>Variables</h4>
    <div className="row">
      <div className="col-12">
        <h5>Set Market Pair</h5>
        <AddressPairForm onSubmit={changeMarketPair}/>
      </div>
    </div>
  </Layout>)
}

export default Variables;
