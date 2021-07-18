const swapper = require('../stubs/swapper-stub')

exports.swapToStableCoin = (paymentContractAddress, payerWalletAddress, cryptoSymbol, cryptoQuantity) => {
    return swapper.swapToStableCoin(paymentContractAddress, payerWalletAddress, cryptoSymbol, cryptoQuantity)
}