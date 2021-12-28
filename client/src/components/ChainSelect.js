import React, {useState} from "react";
import Select from "react-select";
import { Chains } from "../constants/chains";

export const ChainSelect = ({submit}) => {
  return (
      <Select
        placeholder="Select Chain"
        onChange={submit} options={Chains.map(chain=> {
        return { value: chain.value, label: chain.name };
      })} />
  ) 
}

