import React, {useState} from "react";
import {CurrencySelect} from "./CurrencySelect";
import { AccountSelect } from "./AccountSelect";

export const TransferForm = ({onSubmit}) => {
    const [market, setMarket] = useState();
    const [value, setValue] = useState(0.000);
    const [address, setAddress] = useState("");
    // const [account, setAccount] = useState("");
    
    const send = (e) => {
        onSubmit(market?.value, address, value);
        setValue(0);
    }


return (
  <div className="mt-2">
  <form>
  <div className="form-group">
      <label for="address" className="form-label">
        <span>To</span>
        </label>
        <input id="address" className="form-control" style={{maxWidth: 300}} onChange={(e) => {setAddress(e.target.value)}} placeholder="Address" type="string"/>
    </div>
  {/*<div style={{maxWidth: 300}} className="form-group">
        <label className="form-label">
          <span>From</span>
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
        <button
         disabled={!market ||!value || !address} 
        type="button"
        className="btn btn-primary"
        onClick={send}
        >Confirm</button>
    </div>
  </form>
  </div>)
}

