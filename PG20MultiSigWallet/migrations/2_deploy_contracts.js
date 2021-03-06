const FUND_OWNERS = [
"0x821E28109872Cad442Da8D8335BE37d317D4F1e7", // MetaMask1 
"0x8Df70546681657D6FFE227aB51662e5b6e831B7A", // MetaMask2
"0xB5573DA4116BADEc8BAA8C5A4235CbD0006806C1", // MetaMask3
"0x461CD10705dED66EF31BF652B7050b4FC919D208", // MetaMask4
"0xa8EA83995D8e2a56AB2aa339DcF36C3847C87a96", // MetaMask5
"0x698c37D6d6f2FACB7Aa11C1106DDDBec7965EF10"  // MetaMask6
];
const MULTISIG_REQUIRED = 3;

var PG20MultiSigWallet = artifacts.require("./PG20MultiSigWallet.sol");

module.exports = function(deployer) {
  deployer.deploy(PG20MultiSigWallet, FUND_OWNERS, MULTISIG_REQUIRED);
};
