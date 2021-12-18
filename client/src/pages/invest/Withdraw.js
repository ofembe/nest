import React from "react";
import Layout from "../../parts/Layout";
import "../../App.scss";
import { MarketItem } from "../../components/MarketItem";
import { RinkebyAddresses } from "../../constants/addresses";

const Withdraw = () => {
    return (
      <Layout>
        <h4>Withdraw</h4>
          <MarketItem deposit="false"/>
      </Layout>  
    )
}

export default Withdraw;
