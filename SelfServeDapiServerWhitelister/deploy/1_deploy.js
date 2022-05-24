const hre = require('hardhat');
const operationsReferences = require('@api3/operations/chain/deployments/references.json');

module.exports = async ({ getUnnamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const accounts = await getUnnamedAccounts();

  const selfServeDapiServerWhitelister = await deploy('SelfServeDapiServerWhitelister', {
    from: accounts[0],
    log: true,
    args:[operationsReferences.contracts.DapiServer[hre.network.config.chainId.toString()]]
  });
  log(`Deployed SelfServeDapiServerWhitelister at ${selfServeDapiServerWhitelister.address}`);
};
module.exports.tags = ['deploy'];
