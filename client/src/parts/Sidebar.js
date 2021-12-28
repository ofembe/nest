import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <>
    <div class="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
    <div class="nk-sidebar-element nk-sidebar-head">
        <div className="bg-dark" class="nk-sidebar-brand">
            <a href="html/crypto/index.html" class="logo-link nk-sidebar-logo">
                <img class="logo-light logo-img" src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"/>
                <img class="logo-dark logo-img" src={process.env.PUBLIC_URL + "/images/logo-dark.png"} alt="logo-dark"/>
            </a>
        </div>
        <div class="nk-menu-trigger mr-n2">
            <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
        </div>
    </div>
    <div class="nk-sidebar-element">
        <div class="nk-sidebar-body" data-simplebar>
            <div class="nk-sidebar-content">
                <div class="nk-sidebar-widget d-none d-xl-block">
                    <div class="user-account-actions">
                        <ul class="g-3">
                            <li>
                            <Link to="/deposits" class="btn btn-lg btn-primary">
                                <span><em class="icon ni ni-plus"></em></span>
                                    <span className="nk-menu-text">Deposit</span>
                                </Link>
                                </li>
                                
                            <li>
                            <Link to="/withdrawals" class="btn btn-lg btn-warning">
                                <span><em class="icon ni ni-minus"></em></span>
                                    <span className="nk-menu-text">Withdraw</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0">
                    <a class="nk-profile-toggle toggle-expand" data-target="sidebarProfile" href="#">
                    </a>
                    <div class="nk-profile-content toggle-expand-content" data-content="sidebarProfile">
                        <div class="user-account-info between-center">
                            <div class="user-account-main">
                                <h6 class="overline-title-alt">Available Balance</h6>
                                <div class="user-balance">2.014095 <small class="currency currency-btc">BTC</small></div>
                                <div class="user-balance-alt">18,934.84 <span class="currency currency-btc">BTC</span></div>
                            </div>
                            <a href="#" class="btn btn-icon btn-light"><em class="icon ni ni-line-chart"></em></a>
                        </div>
                        <ul class="user-account-data">
                            <li>
                                <div class="user-account-label">
                                    <span class="sub-text">Profits (7d)</span>
                                </div>
                                <div class="user-account-value">
                                    <span class="lead-text">+ 0.0526 <span class="currency currency-btc">BTC</span></span>
                                    <span class="text-success ml-2">3.1% <em class="icon ni ni-arrow-long-up"></em></span>
                                </div>
                            </li>
                            <li>
                                <div class="user-account-label">
                                    <span class="sub-text">Deposit in orders</span>
                                </div>
                                <div class="user-account-value">
                                    <span class="sub-text text-base">0.005400 <span class="currency currency-btc">BTC</span></span>
                                </div>
                            </li>
                        </ul>
                        <ul class="user-account-links">
                            <li><a href="#" class="link"><span>Withdraw Funds</span> <em class="icon ni ni-wallet-out"></em></a></li>
                            <li><a href="#" class="link"><span>Deposit Funds</span> <em class="icon ni ni-wallet-in"></em></a></li>
                        </ul>
                        <ul class="link-list">
                            <li><a href="html/crypto/profile.html"><em class="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                            <li><a href="html/crypto/profile-security.html"><em class="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                            <li><a href="html/crypto/profile-activity.html"><em class="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                        </ul>
                        <ul class="link-list">
                            <li><a href="#"><em class="icon ni ni-signout"></em><span>Sign out</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="nk-sidebar-menu">
                    <ul class="nk-menu">
                        <li class="nk-menu-heading">
                            <h6 class="overline-title">Menu</h6>
                        </li>
                        <li class={`nk-menu-item ${location.pathname === '/'?"active": ""}`}>
                                <Link to="/" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-dashboard"></em></span>
                                    <span className="nk-menu-text">Dashboard</span>
                                </Link>
                        </li>
                        <li class={`nk-menu-item ${location.pathname === '/deposits'?"active": ""}`}>
                                <Link to="/deposits" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-plus"></em></span>
                                    <span className="nk-menu-text">Save</span>
                                </Link>
                        </li>
                        <li class={`nk-menu-item ${location.pathname === '/investments'?"active": ""}`}>
                                <Link to="/investments" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-swap-alt"></em></span>
                                    <span className="nk-menu-text">Invest</span>
                                </Link>
                        </li>
                        <li class={`nk-menu-item ${location.pathname === '/withdrawals'?"active": ""}`}>
                                <Link to="/withdrawals" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-minus"></em></span>
                                    <span className="nk-menu-text">Withdraw</span>
                                </Link>
                        </li>
                        <li class={`nk-menu-item ${location.pathname === '/transfers'?"active": ""}`}>
                                <Link to="/transfers" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-arrow-from-right"></em></span>
                                    <span className="nk-menu-text">Transfer</span>
                                </Link>
                        </li>
                    </ul>
                </div>
                <div class="nk-sidebar-footer">
                    <ul class="nk-menu nk-menu-footer">
                        <li class="nk-menu-item">
                            <a href="#" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-help-alt"></em></span>
                                <span class="nk-menu-text">Support</span>
                            </a>
                        </li>
                        <li class="nk-menu-item ml-auto">
                            <div class="dropup">
                                <a href="#" class="nk-menu-link dropdown-indicator has-indicator" data-toggle="dropdown" data-offset="0,10">
                                    <span class="nk-menu-icon"><em class="icon ni ni-globe"></em></span>
                                    <span class="nk-menu-text">English</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    <ul class="language-list">
                                        <li>
                                            <a href="#" class="language-item">
                                                <img src="./images/flags/english.png" alt="" class="language-flag"/>
                                                <span class="language-name">English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="language-item">
                                                <img src="./images/flags/spanish.png" alt="" class="language-flag"/>
                                                <span class="language-name">Español</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="language-item">
                                                <img src="./images/flags/french.png" alt="" class="language-flag"/>
                                                <span class="language-name">Français</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="language-item">
                                                <img src="./images/flags/turkey.png" alt="" class="language-flag"/>
                                                <span class="language-name">Türkçe</span>
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