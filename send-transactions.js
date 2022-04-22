var Tx = require("ethereumjs-tx").Transaction

const Web3 = require('web3')

const web3 = new Web3('https://rinkeby.infura.io/v3/YOUR_INFURA_KEY')

const account1 = "";

const account2 = "";

const privateKey1 = Buffer.from('', 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.01', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    // Sign the transaction
    const tx = new Tx(txObject, { chain: 'rinkeby' });
    tx.sign(privateKey1)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (err != null) {
            console.log(err);
        }
        console.log('txHash:', txHash)
        // Now go check etherscan to see the transaction!
    })
})
