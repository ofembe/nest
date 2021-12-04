import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.scss";
import Balance from "./pages/invest/Balance";
import Deposit from "./pages/invest/Deposit";
import Withdraw from "./pages/invest/Withdraw";
import Sample from "./pages/sample";
import Transfer from "./pages/transfer";
import Layout from "./parts/Layout";


const App = () => {
    return (
      
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Deposit />}/>
          <Route index element={<Deposit />} />
          <Route path="transfers" element={<Transfer />} />
          <Route path="deposits" element={<Deposit />} />
          <Route path="withdrawals" element={<Withdraw />} />
          <Route path="balances" element={<Balance />} />
      </Routes>
    </BrowserRouter>
    
    );
}

export default App;
