import React from "react";
import { BalanceItem } from "../../components/BalanceItem";
import { TransferItem } from "../../components/TransferItem";
import Layout from "../../parts/Layout";
import Sidebar from "../../parts/Sidebar";
import Sample from "../sample";
import { RinkebyAddresses } from "../../constants/addresses";

const Dashboard = () => {

    return (
        <Layout>
            <div className="row">
            { RinkebyAddresses.map((a) => {
            return <div className="col-xs-12 col-md-6">
                <BalanceItem key={a.name}/>
                </div>
            })
            }
            </div>
        </Layout>
    )
};

export default Dashboard;
