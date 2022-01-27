require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');

const fs = require('fs');
let credentials = require('./credentials.example.json');
if (fs.existsSync('./credentials.json')) {
  credentials = require('./credentials.json');
}

module.exports = {
  etherscan: {
    apiKey: {
        ropsten: credentials.etherscanApiKey,
        rinkeby: credentials.etherscanApiKey,
        goerli: credentials.etherscanApiKey,
        kovan: credentials.etherscanApiKey,
        polygonMumbai: credentials.polygonscanApiKey,
    }
  },
  networks: {
    ropsten: {
      url: credentials.ropsten.providerUrl || '',
      accounts: { mnemonic: credentials.ropsten.mnemonic || '' },
    },
    rinkeby: {
      url: credentials.rinkeby.providerUrl || '',
      accounts: { mnemonic: credentials.rinkeby.mnemonic || '' },
    },
    goerli: {
      url: credentials.goerli.providerUrl || '',
      accounts: { mnemonic: credentials.goerli.mnemonic || '' },
    },
    kovan: {
      url: credentials.kovan.providerUrl || '',
      accounts: { mnemonic: credentials.kovan.mnemonic || '' },
    },
    polygonMumbai: {
      url: credentials.polygonMumbai.providerUrl || '',
      accounts: { mnemonic: credentials.polygonMumbai.mnemonic || '' },
    },
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
