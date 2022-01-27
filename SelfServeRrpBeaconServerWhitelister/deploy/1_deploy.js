const fs = require('fs');

module.exports = async ({ deployments, getChainId, getUnnamedAccounts }) => {
  const { deploy, log } = deployments;
  const accounts = await getUnnamedAccounts();

  const operationsChainData = JSON.parse(fs.readFileSync('node_modules/@api3/operations/data/chains.json'));
  const chainIdToNetworkName = {
    3: 'ropsten',
    4: 'rinkeby',
    5: 'goerli',
    80001: 'polygon-mumbai'
  };
  const rrpBeaconServerAddress = operationsChainData[chainIdToNetworkName[await getChainId()]].RrpBeaconServer;
  
  const selfServeRrpBeaconServerWhitelister = await deploy('SelfServeRrpBeaconServerWhitelister', {
    args: [rrpBeaconServerAddress],
    from: accounts[0],
    log: true,
  });
  log(`Deployed SelfServeRrpBeaconServerWhitelister at ${selfServeRrpBeaconServerWhitelister.address}`);
};
module.exports.tags = ['Deploy'];
