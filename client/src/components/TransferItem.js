import React, {useState} from "react";

export const TransferItem = ({submit}) => {
    const [value, setValue] = useState(0.000);
    const [address, setAddress] = useState("");

    
    const send = (e) => {
        submit(address, value);
        setValue(0);
    }


    return <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
    <div className="dtc w2 w3-ns v-mid">
      <img src="https://avatars.githubusercontent.com/u/32911405?s=200&v=4" className="ba b--black-10 db br2 w1 w2-ns h1 h2-ns"/>
    </div>
    <div className="dtc v-mid pl3">
      <h1 className="f6 f5-ns fw6 lh-title black mv0">Send Ether</h1>
    </div>
    <div className="dtc v-mid">
      <form className="w-100 tr">
        <input onChange={(e) => {setAddress(e.target.value)}} placeholder="Address" className="input-reset f6 bg-white ba b--black-10 dim pointer pv1 black-60" type="string"/>
        <input onChange={(e) => {setValue(e.target.value)}} placeholder="0.000" className="input-reset f6 bg-white ba b--black-10 dim pointer pv1 black-60" type="number"/>
        <div onClick={send} className="f6 link dim br1 ph3 pv2 mb2 dib white bg-near-black" href="#0">Transfer</div>
      </form>
    </div>
  </article>
}

