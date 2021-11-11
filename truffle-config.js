const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "divert stool swallow erupt lawsuit student tuition deliver anchor candy knee dinner";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/a9c203297bf8462cbacba9afbfa3017d");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }
  },
  compilers: {
    solc: {
      version: ">=0.4.21 <0.8.6"
    }
  }
};
