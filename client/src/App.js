import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.scss";
import Sample from "./pages/sample";
import Layout from "./parts/Layout";


const App = () => {
    return (
      <Layout>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample />}>
          <Route index element={<Sample />} />
          <Route path="transfers" element={<Sample />} />
          <Route path="deposits" element={<Sample />} />
          <Route path="withdrawals" element={<Sample />} />
          <Route path="balances" element={<Sample />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Layout>
    );
}

export default App;
