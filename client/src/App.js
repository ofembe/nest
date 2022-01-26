import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import "./App.scss";
import Variables from "./pages/admin/Variables";
import Dashboard from "./pages/dashboard";
import Invest from "./pages/invest/Invest";
import Deposit from "./pages/invest/Save";
import Withdraw from "./pages/invest/Withdraw";
import Transfer from "./pages/transfer";


const App = () => {
    return (
      <HashRouter>
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route index element={<Dashboard />} />
          <Route path="transfers" element={<Transfer />} />
          <Route path="deposits" element={<Deposit />} />
          <Route path="withdrawals" element={<Withdraw />} />
          {/*<Route path="investments" element={<Invest />} />*/}
          <Route exact path="admin" element={<Variables />} />

      </Routes>
    </HashRouter>
    
    );
}

export default App;
