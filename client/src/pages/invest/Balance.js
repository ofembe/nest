import React from "react";
import Layout from "../../parts/Layout";

import "../../App.scss";
import { RinkebyAddresses } from "../../constants/addresses";
import { BalanceItem } from "../../components/BalanceItem";

const Balance = () => {
    return (
      <Layout>
        <h4>Balances</h4>
        <BalanceItem/>
        { RinkebyAddresses.map((a) => {
            return <BalanceItem  token={a}/>
        })
        }
      </Layout>  
    )
}

export default Balance;
