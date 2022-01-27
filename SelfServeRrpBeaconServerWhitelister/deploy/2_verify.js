const fs = require('fs');
const hre = require('hardhat');

module.exports = async ({ deployments, getChainId }) => {
  const SelfServeRrpBeaconServerWhitelister = await deployments.get('SelfServeRrpBeaconServerWhitelister');
  
  const operationsChainData = JSON.parse(fs.readFileSync('node_modules/@api3/operations/data/chains.json'));
  const chainIdToNetworkName = {
    3: 'ropsten',
    4: 'rinkeby',
    5: 'goerli',
    80001: 'polygon-mumbai'
  };
  const rrpBeaconServerAddress = operationsChainData[chainIdToNetworkName[await getChainId()]].RrpBeaconServer;

  await hre.run('verify:verify', {
    address: SelfServeRrpBeaconServerWhitelister.address,
    constructorArguments: [rrpBeaconServerAddress],
  });
};
module.exports.tags = ['Verify'];
module.exports.dependencies = ['Deploy'];
