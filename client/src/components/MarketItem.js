import React, {useState} from "react";

export const MarketItem = ({address, update}) => {
    const [value, setValue] = useState(0.000);
    const updateValue = (e) => {
        const val = e.target.value;
        setValue(val);
        update(val);
    }



    if(address.token === false) {
        return null;
    }

    return (
      <div className="mt-2">
      <form>
        <div class="form-group">
          <label for="amount">
          <div className="d-inline-block">
            <img height="20" src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4"/>
          </div>
            <span>Amount({address.name})</span>
            </label>
          <input style={{maxWidth: 300}} id="amount" class="form-control" onChange={(e) => {update(address, e.target.value)}} placeholder="0.000" type="number"/>
        </div>
        <div class="form-group">
            <button type="button" className="btn btn-primary" onClick={()=>{}}>Confirm</button>
        </div>
  </form>
  </div>)
}

