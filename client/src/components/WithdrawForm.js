import React, {useState} from "react";
import useEthereumAccounts from "../hooks/useEthereumAccounts";
import {CurrencySelect} from "./CurrencySelect";
import { AccountSelect } from "./AccountSelect";

export const WithdrawForm = ({onSubmit}) => {
  const [market, setMarket] = useState();
  // const [account, setAccount] = useState();
  const [value, setValue] = useState(0.000);

    const submit = () => {
      onSubmit(market?.value, value);
    }

    return (
      <div className="mt-2">
      <form>
      {/*<div style={{maxWidth: 300}} className="form-group">
        <label className="form-label">
          <span>Account</span>
        </label>
        <AccountSelect submit={setAccount}/>
    </div>*/}
      <div style={{maxWidth: 300}} className="form-group">
      <label className="form-label">
            <span>Currency</span>
          </label>
        <CurrencySelect submit={setMarket}/>
      </div>
        <div className="form-group">
          <label for="amount" className="form-label">
            <span>Amount</span>
            </label>
          <input style={{maxWidth: 300}} id="amount" className="form-control" onChange={(e) => {setValue(e.target.value)}} placeholder="0.000" type="number"/>
        </div>
        <div className="form-group">
            <button disabled={!market ||!value} type="button" className="btn btn-primary" onClick={submit}>Confirm</button>
        </div>
  </form>
  </div>)
}

