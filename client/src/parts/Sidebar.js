import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <>
    <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
    <div className="nk-sidebar-element nk-sidebar-head">
        <div className="bg-dark" className="nk-sidebar-brand">
            <a href="html/crypto/index.html" className="logo-link nk-sidebar-logo">
                <img className="logo-light logo-img" src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"/>
                <img className="logo-dark logo-img" src={process.env.PUBLIC_URL + "/images/logo-dark.png"} alt="logo-dark"/>
            </a>
        </div>
        <div className="nk-menu-trigger mr-n2">
            <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em className="icon ni ni-arrow-left"></em></a>
        </div>
    </div>
    <div className="nk-sidebar-element">
        <div className="nk-sidebar-body" data-simplebar>
            <div className="nk-sidebar-content">
                <div className="nk-sidebar-widget d-none d-xl-block">
                    <div className="user-account-actions">
                        <ul className="g-3">
                            <li>
                            <Link to="/deposits" className="btn btn-lg btn-primary">
                                <span><em className="icon ni ni-plus"></em></span>
                                    <span className="nk-menu-text">Deposit</span>
                                </Link>
                                </li>
                                
                            <li>
                            <Link to="/withdrawals" className="btn btn-lg btn-warning">
                                <span><em className="icon ni ni-minus"></em></span>
                                    <span className="nk-menu-text">Withdraw</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0">
                    <a className="nk-profile-toggle toggle-expand" data-target="sidebarProfile" href="#">
                    </a>
                    <div className="nk-profile-content toggle-expand-content" data-content="sidebarProfile">
                        <div className="user-account-info between-center">
                            <div className="user-account-main">
                                <h6 className="overline-title-alt">Available Balance</h6>
                                <div className="user-balance">2.014095 <small className="currency currency-btc">BTC</small></div>
                                <div className="user-balance-alt">18,934.84 <span className="currency currency-btc">BTC</span></div>
                            </div>
                            <a href="#" className="btn btn-icon btn-light"><em className="icon ni ni-line-chart"></em></a>
                        </div>
                        <ul className="user-account-data">
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
                                    <span className="sub-text text-base">0.005400 <span className="currency currency-btc">BTC</span></span>
                                </div>
                            </li>
                        </ul>
                        <ul className="user-account-links">
                            <li><a href="#" className="link"><span>Withdraw Funds</span> <em className="icon ni ni-wallet-out"></em></a></li>
                            <li><a href="#" className="link"><span>Deposit Funds</span> <em className="icon ni ni-wallet-in"></em></a></li>
                        </ul>
                        <ul className="link-list">
                            <li><a href="html/crypto/profile.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                            <li><a href="html/crypto/profile-security.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                            <li><a href="html/crypto/profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                        </ul>
                        <ul className="link-list">
                            <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="nk-sidebar-menu">
                    <ul className="nk-menu">
                        <li className="nk-menu-heading">
                            <h6 className="overline-title">Menu</h6>
                        </li>
                        <li className={`nk-menu-item ${location.pathname === '/'?"active": ""}`}>
                                <Link to="/" className="nk-menu-link">
                                <span className="nk-menu-icon"><em className="icon ni ni-dashboard"></em></span>
                                    <span className="nk-menu-text">Dashboard</span>
                                </Link>
                        </li>
                        <li className={`nk-menu-item ${location.pathname === '/deposits'?"active": ""}`}>
                                <Link to="/deposits" className="nk-menu-link">
                                <span className="nk-menu-icon"><em className="icon ni ni-plus"></em></span>
                                    <span className="nk-menu-text">Save</span>
                                </Link>
                        </li>
                        {/*<li className={`nk-menu-item ${location.pathname === '/investments'?"active": ""}`}>
                                <Link to="/investments" className="nk-menu-link">
                                <span className="nk-menu-icon"><em className="icon ni ni-swap-alt"></em></span>
                                    <span className="nk-menu-text">Invest</span>
                                </Link>
                        </li>*/}
                        <li className={`nk-menu-item ${location.pathname === '/withdrawals'?"active": ""}`}>
                                <Link to="/withdrawals" className="nk-menu-link">
                                <span className="nk-menu-icon"><em className="icon ni ni-minus"></em></span>
                                    <span className="nk-menu-text">Withdraw</span>
                                </Link>
                        </li>
                        <li className={`nk-menu-item ${location.pathname === '/transfers'?"active": ""}`}>
                                <Link to="/transfers" className="nk-menu-link">
                                <span className="nk-menu-icon"><em className="icon ni ni-arrow-from-right"></em></span>
                                    <span className="nk-menu-text">Transfer</span>
                                </Link>
                        </li>
                    </ul>
                </div>
                <div className="nk-sidebar-footer">
                    <ul className="nk-menu nk-menu-footer">
                        <li className="nk-menu-item">
                            <a href="#" className="nk-menu-link">
                                <span className="nk-menu-icon"><em className="icon ni ni-help-alt"></em></span>
                                <span className="nk-menu-text">Support</span>
                            </a>
                        </li>
                        <li className="nk-menu-item ml-auto">
                            <div className="dropup">
                                <a href="#" className="nk-menu-link dropdown-indicator has-indicator" data-toggle="dropdown" data-offset="0,10">
                                    <span className="nk-menu-icon"><em className="icon ni ni-globe"></em></span>
                                    <span className="nk-menu-text">English</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    <ul className="language-list">
                                        <li>
                                            <a href="#" className="language-item">
                                                <img src="./images/flags/english.png" alt="" className="language-flag"/>
                                                <span className="language-name">English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="language-item">
                                                <img src="./images/flags/spanish.png" alt="" className="language-flag"/>
                                                <span className="language-name">Español</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="language-item">
                                                <img src="./images/flags/french.png" alt="" className="language-flag"/>
                                                <span className="language-name">Français</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="language-item">
                                                <img src="./images/flags/turkey.png" alt="" className="language-flag"/>
                                                <span className="language-name">Türkçe</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</>);
}

export default Sidebar;