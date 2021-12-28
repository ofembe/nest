import React, {useState} from "react";
import {CurrencySelect} from "./CurrencySelect";
import { AccountSelect } from "./AccountSelect";

export const TransferForm = ({submit, token}) => {
    const [market, setMarket] = useState();
    const [value, setValue] = useState(0.000);
    const [address, setAddress] = useState("");
    const [account, setAccount] = useState("");
    
    const send = (e) => {
        submit(address, value, token?.address);
        setValue(0);
    }


return (
  <div className="mt-2">
  <form>
  <div class="form-group">
      <label for="address" className="form-label">
        <span>To</span>
        </label>
        <input id="address" class="form-control" style={{maxWidth: 300}} onChange={(e) => {setAddress(e.target.value)}} placeholder="Address" type="string"/>
    </div>
  <div style={{maxWidth: 300}} class="form-group">
        <label className="form-label">
          <span>From</span>
        </label>
        <AccountSelect submit={setAccount}/>
      </div>
  <div style={{maxWidth: 300}} class="form-group">
        <label className="form-label">
            <span>Market</span>
          </label>
        <CurrencySelect submit={setMarket}/>
      </div>
    <div class="form-group">
      <label for="amount" className="form-label">
        <span>Amount</span>
        </label>
        <input style={{maxWidth: 300}} id="amount" class="form-control" onChange={(e) => {setValue(e.target.value)}} placeholder="0.000" type="number"/>
    </div>
    <div class="form-group">
        <button
         disabled={!account || !market ||!value || !address} 
        type="button"
        className="btn btn-primary"
        onClick={()=>{}}
        >Confirm</button>
    </div>
  </form>
  </div>)
}

