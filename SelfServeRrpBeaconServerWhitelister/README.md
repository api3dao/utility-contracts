# SelfServeRrpBeaconServerWhitelister

## Testnet Deployments

The contract has been deployed by `0x5b1243308f56156553F067D354b162f71E581b28` on `ropsten`,`rinkeby`,`goerli` and `polygon-mumbai`. This address is also the manager of the [RequesterAuthorizerWithManager](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/authorizers/RequesterAuthorizerWithManager.sol) on these testnets(The actual manager is the [OwnableCallForwarder](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/utils/OwnableCallForwarder.sol) contract whose owner is this address).
This address is also the deployer and manager of the `RrpBeaconServer` on these testnets.

### Permissions Allotted

- The address `0x5b1243308f56156553F067D354b162f71E581b28` is the owner of this contract.
- The contract has been alloted the ` hasIndefiniteWhitelisterRole` on the `RrpBeaconServer` to be able to whitelist readers on beaconIds with an expiration.
- The contract has been alloted the ` hasWhitelistExpirationSetterRole` on the `RrpBeaconServer` to be able to whitelist readers on beaconIds indefinently.
