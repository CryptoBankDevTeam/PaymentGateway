const paymentContract = require('../stubs/payment-contract-stub')

exports.paymentContractAddress = 'ADDADDADDADDADD2902934234DSAASD'

exports.receiveCryptoFromPayer = (cryptoAmount, cryptoSymbol, payerWalletAddress) => {
    return paymentContract.receiveCryptoFromPayer (cryptoAmount, cryptoSymbol, payerWalletAddress) 
}

exports.payWithStableCoin = (params) => {
    return paymentContract.payWithStableCoin (params) 
}