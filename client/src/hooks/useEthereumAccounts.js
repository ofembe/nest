import React, {useEffect, useState, useCallback} from "react";
import NestDeposit from "../contracts/NestDeposit.json";

import getWeb3 from "../getWeb3";

const useEthereumAccounts = () =>  {
    const [web3, setWeb3] = useState();
    const [accounts, setAccounts] = useState();
    const [contract, setContract] = useState();

    const getResources = useCallback(async() => {
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
         // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      setWeb3(web3);
      setAccounts(accounts);

      const deployedNetwork = NestDeposit.networks[networkId];
      const contract = new web3.eth.Contract(
        NestDeposit.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setContract(contract);
    }, []);

    useEffect(() => {
        getResources();
    }, []);
    
    return {web3, accounts, contract}
  }

  export default useEthereumAccounts;