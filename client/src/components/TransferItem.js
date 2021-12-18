import React, {useState} from "react";
import {CurrencySelect} from "./CurrencySelect";

export const TransferItem = ({submit, token}) => {
    const [market, setMarket] = useState();
    const [value, setValue] = useState(0.000);
    const [address, setAddress] = useState("");

    
    const send = (e) => {
        submit(address, value, token?.address);
        setValue(0);
    }


return (
  <div className="mt-2">
  <form>
  <div style={{maxWidth: 300}} class="form-group">
        <CurrencySelect submit={setMarket}/>
      </div>
  <div class="form-group">
      <label for="address">
      <div className="d-inline-block">
        <img height="20" src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4"/>
      </div>
        <span>Address</span>
        </label>
        <input id="address" class="form-control" style={{maxWidth: 300}} onChange={(e) => {setAddress(e.target.value)}} placeholder="Address" type="string"/>
    </div>
    <div class="form-group">
      <label for="amount">
      <div className="d-inline-block">
        <img height="20" src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4"/>
      </div>
        <span>Amount</span>
        </label>
        <input style={{maxWidth: 300}} id="amount" class="form-control" onChange={(e) => {setValue(e.target.value)}} placeholder="0.000" type="number"/>
    </div>
    <div class="form-group">
        <button type="button" className="btn btn-primary" onClick={()=>{}}>Confirm</button>
    </div>
  </form>
  </div>)
}

