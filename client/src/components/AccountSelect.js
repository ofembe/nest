import React, {useState} from "react";
import Select from "react-select";
import { Accounts } from "../constants/accounts";

export const AccountSelect = ({submit}) => {
  return (
      <Select
        placeholder="Select Account"
        onChange={submit} options={Accounts.map(account=> {
        return { value: account.value, label: account.name };
      })} />
  ) 
}

