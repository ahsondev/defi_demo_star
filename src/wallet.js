const ethers = require("ethers");

// Replace the following with your own mnemonic
const mnemonic =
  "barrel bullet force rib merge act novel puzzle orchard album slush core";
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;