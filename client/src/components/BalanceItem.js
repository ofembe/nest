import React, {useState} from "react";

export const BalanceItem = ({token}) => {
    return <div className="row">
    <div className="col-xs-12 col-2 mt-2 mb-2">
      <img width="20" src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4" />
      {token?.address &&
      <span>{token?.name}</span> ||
      <span>Ether</span> 
      }
    </div>
    <div className="col-xs-12 col-2 m-1 font-weight-bold">
        <button className="btn btn-secondary">Check</button>
    </div>
    <div className="col-xs-12 col m-1 font-weight-bold">
        {Math.random()* 10000} (Profit: {Math.random()* 10})
    </div>
    </div>
}

