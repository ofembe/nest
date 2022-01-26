import React, {useContext, useEffect, useState, useCallback} from "react";
import Web3Context from "../context/web3Context";
import NestDeposit from "../contracts/NestDeposit.json";

import getWeb3 from "../getWeb3";

const useEthereumAccounts = () =>  {
    const web3Store = useContext(Web3Context);
    const getResources = useCallback(async() => {
      if(!web3Store.web3) {
        const web3 = await getWeb3();
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
          // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        // setWeb3(web3);
        web3Store.web3 = web3;
        web3Store.accounts = accounts;      

      const deployedNetwork = NestDeposit.networks[networkId];
      const contract = new web3.eth.Contract(
        NestDeposit.abi,
        deployedNetwork && deployedNetwork.address,
      );

      web3Store.contract = contract;
      }
    }, []);

    useEffect(() => {
        getResources();
    }, []);
    
    return {
      web3: web3Store.web3,
      accounts: web3Store.accounts,
      contract: web3Store.contract
    }
  }

  export default useEthereumAccounts;