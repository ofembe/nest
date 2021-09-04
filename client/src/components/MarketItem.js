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

    return <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
    <div className="dtc w2 w3-ns v-mid">
      <img src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4" className="ba b--black-10 db br2 w1 w2-ns h1 h2-ns"/>
    </div>
    <div className="dtc v-mid pl3">
      <h1 className="f6 f5-ns fw6 lh-title black mv0">{address.name}</h1>
    </div>
    <div className="dtc v-mid">
      <form className="w-100 tr">
        <input onChange={(e) => {update(address, e.target.value)}} placeholder="0.000" className="input-reset f6 bg-white ba b--black-10 dim pointer pv1 black-60" type="number"/>
      </form>
    </div>
  </article>
}

