import React, {useState} from "react";

export const AddressPairForm = ({onSubmit}) => {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

    const submit = () => {
      onSubmit(first, second);
    }

    return (
      <div className="mt-2">
      <form>
        <div class="form-group">
          <input style={{maxWidth: 300}} id="amount" class="form-control" onChange={(e) => {setFirst(e.target.value)}} type="number"/>
        </div>
        <div class="form-group">
          <input style={{maxWidth: 300}} id="amount" class="form-control" onChange={(e) => {setSecond(e.target.value)}} type="number"/>
        </div>
        <div class="form-group">
            <button disabled={!first || !second} type="button" className="btn btn-primary" onClick={submit}>Confirm</button>
        </div>
  </form>
  </div>)
}

