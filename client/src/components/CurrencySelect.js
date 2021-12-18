import React, {useState} from "react";
import Select from "react-select";
import { RinkebyAddresses } from "../constants/addresses";

export const CurrencySelect = ({submit}) => {
  return (
      <Select
        placeholder="Select Market"
        onChange={submit} options={RinkebyAddresses.map(address=> {
        return { value: address.address, label: address.name };
      })} />
  ) 
}

