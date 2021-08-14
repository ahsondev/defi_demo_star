const ethers = require("ethers");


const provider = ethers.getDefaultProvider("ropsten", {
  // Replace the following with your own INFURA API key
  infura: "0123456789abcdef0123456789abcdef",
});

module.exports = provider;