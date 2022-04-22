const Web3 = require("web3");

const rpcURL = "https://mainnet.infura.io/v3/YOUR_URL";

const web3 = new Web3(rpcURL);

const address = "ADDRESS";

web3.eth.getBalance(address, (err, wei) => {
  balance = wei;
  console.log(balance);
});
