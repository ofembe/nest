const NestDeposit = artifacts.require("NestDeposit");

module.exports = function (deployer) {
  deployer.deploy(NestDeposit);
};
