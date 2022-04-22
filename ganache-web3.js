const Web3 = require("web3");

const providerUrl = "http://127.0.0.1:7545";

const from = "";

const to = "";

const amount = "5";

const web3 = new Web3(providerUrl);

// console.log(Web3.modules);
//
// console.log(web3.version);
//
// console.log(web3.utils);
//
// console.log(web3.currentProvider);
//
// web3.eth.getAccounts(console.log);

web3.eth.getAccounts(function (error, accounts) {
  if (error) {
    console.log("error", error);
  } else {
    console.log("result", accounts);

    web3.eth.getBalance(accounts[0]).then(function (result) {
      console.log("Balance : ", web3.utils.fromWei(result, "ether"));
    });

    txnCount = web3.eth
      .getTransactionCount(accounts[0])
      .then(function (result) {
        console.log("txn count : ", result);
      });
  }
});

var txnObject = {
  from: from,
  to: to,
  value: web3.utils.toWei(amount, "ether"),
  // "gas": 21000,         (optional)
  // "gasPrice": 4500000,  (optional)
  // "data": 'For testing' (optional)
  // "nonce": 10           (optional)
};

web3.eth.sendTransaction(txnObject, function (error, result) {
  if (error) {
    console.log("Transaction error", error);
  } else {
    var txn_hash = result; //Get transaction hash
  }
});

web3.eth.getNodeInfo(function (error, result) {
  if (error) {
    console.log("error", error);
  } else {
    console.log("result", result);
  }
});
