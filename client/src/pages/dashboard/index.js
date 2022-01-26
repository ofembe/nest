import React, { useEffect } from "react";
import { BalanceItem } from "../../components/BalanceItem";
import Layout from "../../parts/Layout";
import { RinkebyAddresses } from "../../constants/addresses";
import useEthereumAccounts from "../../hooks/useEthereumAccounts";

const Dashboard = () => {
    return (
        <Layout>
            <div className="row">
            { RinkebyAddresses.map((a) => {
            return <div className="col-xs-12 col-md-6">
                <BalanceItem token={a} key={a.name}/>
                </div>
            })
            }
            </div>
        </Layout>
    )
};

export default Dashboard;
