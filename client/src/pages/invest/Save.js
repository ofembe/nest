import React, { useState } from "react";
import { SaveForm } from "../../components/SaveForm";
import { RinkebyAddresses } from "../../constants/addresses";
import Layout from "../../parts/Layout";
import {CurrencySelect} from "../../components/CurrencySelect";

const Save  = () => {
    const [market, setMarket] = useState();
    return (
      <Layout>
        <h4>Save</h4>
        <SaveForm />
      </Layout>  
    )
}

export default Save;
