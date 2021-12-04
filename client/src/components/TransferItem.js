import React, {useState} from "react";

export const TransferItem = ({submit, token}) => {
    const [value, setValue] = useState(0.000);
    const [address, setAddress] = useState("");

    
    const send = (e) => {
        submit(address, value, token?.address);
        setValue(0);
    }


    return <div className="row">
    <div className="col-xs-12 col-2 m-1">
      <img width="20" src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4" />
      {token?.address &&
      <span>{token?.name}</span> ||
      <span>Ether</span> 
      }
    </div>
    <div className="col-xs-12 col-4 m-1">
        <input onChange={(e) => {setAddress(e.target.value)}} placeholder="Address" type="string"/>
    </div>
    <div className="col-xs-12 col m-1">
        <input onChange={(e) => {setValue(e.target.value)}} placeholder="0.000" type="number"/>
    </div>
    <div className="col-xs-12 col-2 m-1">
          <button onClick={send} className="btn btn-primary">Confirm</button>
    </div>
    </div>
}

