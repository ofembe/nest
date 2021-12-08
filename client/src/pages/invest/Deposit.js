import React from "react";
import { MarketItem } from "../../components/MarketItem";
import { RinkebyAddresses } from "../../constants/addresses";
import Layout from "../../parts/Layout";

const Deposit  = () => {
    return (
      <Layout>
        <h4>Deposit</h4>
        { RinkebyAddresses.map((a) => {
            return <MarketItem key={a.name} deposit address={a}/>
        })
        }
      </Layout>  
    )
}

export default Deposit;
