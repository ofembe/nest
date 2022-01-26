import React, {useEffect, useState} from "react";
import useEthereumAccounts from "../hooks/useEthereumAccounts";

export const BalanceItem = ({token}) => {
    const [balance, setBalance] = useState(0);
    const {web3, accounts, contract} = useEthereumAccounts();
    const getBalance = async () => {
        try {
            setBalance(await contract
            .methods
            .getBalance(token.ercAddress)
            .send({from: accounts[0]}));
            }catch(err) {
              console.log(err);
        }
      }

      useEffect(() => {
        getBalance();
      }, [])

    return <div className="nk-sidebar-widget d-xl-block">
    <div className="user-account-info between-center">
        <div className="user-account-main">
            <h6 className="overline-title-alt">Available Balance</h6>
            <div className="user-balance">{balance} <small className="currency currency-btc">{token?.name}</small></div>
        </div>
        <a href="#" className="btn btn-white btn-icon btn-light"><em className="icon ni ni-line-chart"></em></a>
    </div>
    <ul className="user-account-data gy-1">
        <li>
            <div className="user-account-label">
                <span className="sub-text">Profits (7d)</span>
            </div>
            <div className="user-account-value">
                <span className="lead-text">+ 0.00 <span className="currency currency-btc">{token?.name}</span></span>
                <span className="text-success ml-2">0.00% <em className="icon ni ni-arrow-long-up"></em></span>
            </div>
        </li>
        <li>
            <div className="user-account-label">
                <span className="sub-text">Deposit in orders</span>
            </div>
            <div className="user-account-value">
                <span className="sub-text">0.00 <span className="currency currency-btc">{token?.name}</span></span>
            </div>
        </li>
    </ul>
</div>
}

