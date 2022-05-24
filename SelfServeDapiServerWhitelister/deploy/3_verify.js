const hre = require('hardhat');
const operationsReferences = require('@api3/operations/chain/deployments/references.json');

module.exports = async ({ deployments }) => {
  const SelfServeDapiServerWhitelister = await deployments.get('SelfServeDapiServerWhitelister');
  await hre.run('verify:verify', {
    address: SelfServeDapiServerWhitelister.address,
    constructorArguments: [operationsReferences.contracts.DapiServer[hre.network.config.chainId.toString()]],
  });
};
module.exports.tags = ['verify'];
