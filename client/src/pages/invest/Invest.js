import React, { useState } from "react";
import { InvestForm } from "../../components/InvestForm";
import { RinkebyAddresses } from "../../constants/addresses";
import Layout from "../../parts/Layout";
import {CurrencySelect} from "../../components/CurrencySelect";

const Invest = () => {
    const [market, setMarket] = useState();
    return (
      <Layout>
        <h4>Invest</h4>
        <InvestForm />
      </Layout>  
    )
}

export default Invest;
