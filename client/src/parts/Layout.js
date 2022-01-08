import React from "react";
import Sidebar from "./Sidebar";
import useEthereumAccounts from "../hooks/useEthereumAccounts";

const Layout = (props) => {
    const {web3, accounts, contract} = useEthereumAccounts();
    return (
 <div className="nk-body npc-crypto bg-white has-sidebar ">
 <div className="nk-app-root">
     <div className="nk-main ">
         <Sidebar/>
         <div className="nk-wrap ">
             <div className="nk-header nk-header-fluid nk-header-fixed is-light">
                 <div className="container-fluid">
                     <div className="nk-header-wrap">
                         <div className="nk-menu-trigger d-xl-none ml-n1">
                             <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                         </div>
                         <div className="nk-header-brand d-xl-none">
                             <a href="html/crypto/index.html" className="logo-link">
                                 <img className="logo-light logo-img" src="/images/logo.png" srcSet="/images/logo.png" alt="logo"/>
                                 <img className="logo-dark logo-img" src="/images/logo-dark.png" srcSet="/images/logo-dark.png" alt="logo-dark"/>
                                 <span className="nio-version">Crypto</span>
                             </a>
                         </div>
                         <div className="nk-header-news d-none d-xl-block">
                             <div className="nk-news-list">
                                 <a className="nk-news-item" href="#">
                                     <div className="nk-news-icon">
                                         <em className="icon ni ni-card-view"></em>
                                     </div>
                                     <div className="nk-news-text">
                                         <p>Do you know the latest update of 2021? <span> A overview of our is now available on YouTube</span></p>
                                         <em className="icon ni ni-external"></em>
                                     </div>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="nk-content nk-content-fluid">
                 <div className="container-xl wide-lg">
                     <div className="nk-content-body">
                      {props.children}
                     </div>
                 </div>
             </div>
             <div className="nk-footer nk-footer-fluid">
                 <div className="container-fluid">
                     <div className="nk-footer-wrap">
                         <div className="nk-footer-copyright"> &copy; 2021 Nest.
                         </div>
                         <div className="nk-footer-links">
                             <ul className="nav nav-sm">
                                 <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                 <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
                                 <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>
);
}
export default Layout;