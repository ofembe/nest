import React, {useState} from "react";
import Select from "react-select";
import { Pools } from "../constants/pools";

export const PoolSelect = ({submit}) => {
  return (
      <Select
        placeholder="Select Account"
        onChange={submit} options={Pools.map(pool=> {
        return { value: pool.value, label: pool.name };
      })} />
  ) 
}

