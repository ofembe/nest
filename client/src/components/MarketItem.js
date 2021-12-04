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

    return <div className="row">
    <div className="col-xs-12 col m-1">
      <div className="d-inline-block">
        <img height="20" src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4"/>
      </div>
      <span>{address.name}</span>
    </div>
    <div className="col-xs-12 col m-1">
        <input onChange={(e) => {update(address, e.target.value)}} placeholder="0.000" type="number"/>
    </div>
    <div className="col-xs-12 col m-1">
        <button className="btn btn-primary" onClick={()=>{}}>Confirm</button>
    </div>

  </div>
}

