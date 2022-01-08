import React, {useState} from "react";

export const BalanceItem = ({token}) => {
    return <div className="nk-sidebar-widget d-xl-block">
    <div className="user-account-info between-center">
        <div className="user-account-main">
            <h6 className="overline-title-alt">Available Balance</h6>
            <div className="user-balance">2.014095 <small className="currency currency-btc">BTC</small></div>
            <div className="user-balance-alt">18,934.84 <span className="currency currency-btc">BTC</span></div>
        </div>
        <a href="#" className="btn btn-white btn-icon btn-light"><em className="icon ni ni-line-chart"></em></a>
    </div>
    <ul className="user-account-data gy-1">
        <li>
            <div className="user-account-label">
                <span className="sub-text">Profits (7d)</span>
            </div>
            <div className="user-account-value">
                <span className="lead-text">+ 0.0526 <span className="currency currency-btc">BTC</span></span>
                <span className="text-success ml-2">3.1% <em className="icon ni ni-arrow-long-up"></em></span>
            </div>
        </li>
        <li>
            <div className="user-account-label">
                <span className="sub-text">Deposit in orders</span>
            </div>
            <div className="user-account-value">
                <span className="sub-text">0.005400 <span className="currency currency-btc">BTC</span></span>
            </div>
        </li>
    </ul>
</div>
}

