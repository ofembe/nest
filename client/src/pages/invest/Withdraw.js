import React from "react";
import Layout from "../../parts/Layout";
import "../../App.scss";
import { MarketItem } from "../../components/MarketItem";
import { RinkebyAddresses } from "../../constants/addresses";

const Withdraw = () => {
    return (
      <Layout>
        <h4>Withdraw</h4>
        { RinkebyAddresses.map((a) => {
            return <MarketItem key={a.name} deposit="false" address={a}/>
        })
        }
      </Layout>  
    )
}

export default Withdraw;
