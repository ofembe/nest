import React from "react";
import Layout from "../../parts/Layout";
import "../../App.scss";
import { WithdrawForm } from "../../components/WithdrawForm";
import { RinkebyAddresses } from "../../constants/addresses";

const Withdraw = () => {
    return (
      <Layout>
        <h4>Withdraw</h4>
          <WithdrawForm/>
      </Layout>  
    )
}

export default Withdraw;
