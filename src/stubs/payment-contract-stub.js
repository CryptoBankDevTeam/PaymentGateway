exports.receiveCryptoFromPayer = (cryptoAmount, cryptoSymbol, payerWalletAddress) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cryptoAmount != "" && cryptoSymbol != "" && payerWalletAddress != "" )
            {
                resolve({
                    data: { cryptoAmount, cryptoSymbol, payerWalletAddress },
                    message: "Crypto received!"
                })
            } else {
                reject("Input parameters in valid, please check!")
            }
        }, 5000)
    })
}

exports.payWithStableCoin = (params) => {
    let {
        payerId, 
        merchantId,
        stableCoinQty, 
        stableCoinSymbol,
        fiatSymbol,
        originalFiatAmount
    } = params

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(stableCoinQty != "" && stableCoinSymbol != "" )
            {
                resolve({
                    data: params,
                    message: "Stable coin deposited for trade!"
                })
            } else {
                reject("Error, stable coin not deposited for trade!")
            }
        }, 5000)
    })
}