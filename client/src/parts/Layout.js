import React from "react";
import Sidebar from "./Sidebar";
import useEthereumAccounts from "../hooks/useEthereumAccounts";

const Layout = (props) => {
    const {web3, accounts, contract} = useEthereumAccounts();
    return (
 <div class="nk-body npc-crypto bg-white has-sidebar ">
 <div class="nk-app-root">
     <div class="nk-main ">
         <Sidebar/>
         <div class="nk-wrap ">
             <div class="nk-header nk-header-fluid nk-header-fixed is-light">
                 <div class="container-fluid">
                     <div class="nk-header-wrap">
                         <div class="nk-menu-trigger d-xl-none ml-n1">
                             <a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
                         </div>
                         <div class="nk-header-brand d-xl-none">
                             <a href="html/crypto/index.html" class="logo-link">
                                 <img class="logo-light logo-img" src="/images/logo.png" srcset="/images/logo.png" alt="logo"/>
                                 <img class="logo-dark logo-img" src="/images/logo-dark.png" srcset="/images/logo-dark.png" alt="logo-dark"/>
                                 <span class="nio-version">Crypto</span>
                             </a>
                         </div>
                         <div class="nk-header-news d-none d-xl-block">
                             <div class="nk-news-list">
                                 <a class="nk-news-item" href="#">
                                     <div class="nk-news-icon">
                                         <em class="icon ni ni-card-view"></em>
                                     </div>
                                     <div class="nk-news-text">
                                         <p>Do you know the latest update of 2021? <span> A overview of our is now available on YouTube</span></p>
                                         <em class="icon ni ni-external"></em>
                                     </div>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="nk-content nk-content-fluid">
                 <div class="container-xl wide-lg">
                     <div class="nk-content-body">
                      {props.children}
                     </div>
                 </div>
             </div>
             <div class="nk-footer nk-footer-fluid">
                 <div class="container-fluid">
                     <div class="nk-footer-wrap">
                         <div class="nk-footer-copyright"> &copy; 2021 Nest.
                         </div>
                         <div class="nk-footer-links">
                             <ul class="nav nav-sm">
                                 <li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
                                 <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
                                 <li class="nav-item"><a class="nav-link" href="#">Help</a></li>
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