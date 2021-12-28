import React, {useState} from "react";
import {CurrencySelect} from "./CurrencySelect";

export const SaveForm = ({onSubmit}) => {
  const [market, setMarket] = useState();
  const [value, setValue] = useState(0.000);

    const submit = () => {
      onSubmit(market, value);
    }

    return (
      <div className="mt-2">
      <form>
      <div style={{maxWidth: 300}} class="form-group">
        <label className="form-label">
          <span>Currency</span>
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
            <button disabled={!market || !value} type="button" className="btn btn-primary" onClick={submit}>Confirm</button>
        </div>
  </form>
  </div>)
}

