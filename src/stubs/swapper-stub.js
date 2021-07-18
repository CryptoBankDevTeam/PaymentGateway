exports.swapToStableCoin = (paymentContractAddress, payerWalletAddress, cryptoSymbol, cryptoQuantity) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 
                data: { paymentContractAddress, payerWalletAddress, cryptoSymbol, cryptoQuantity },
                stableCoinQuantity: 1000,
                message: "Swap successful!"
            })
        }, 5000)
    })
}