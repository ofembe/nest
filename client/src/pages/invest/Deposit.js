import React, { useState } from "react";
import { MarketItem } from "../../components/MarketItem";
import { RinkebyAddresses } from "../../constants/addresses";
import Layout from "../../parts/Layout";
import {CurrencySelect} from "../../components/CurrencySelect";

const Deposit  = () => {
    const [market, setMarket] = useState();
    return (
      <Layout>
        <h4>Deposit</h4>
        <MarketItem />
      </Layout>  
    )
}

export default Deposit;
