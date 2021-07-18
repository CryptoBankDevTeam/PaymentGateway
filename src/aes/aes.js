
const p2pBlock = require('./p2p-block')
const swapper = require('./swapper')
const paymentContract = require('./payment-contract')

const paymentContractAddress = "PAYMENTCONTRACTADDRESS"

function calculateCryptoNeeded (rate, amtInFiat, fiatSymbol, cryptoSymbol) {
    console.log("Crypto needed calculated!")
    return amtInFiat/rate
}

exports.payWithCrypto = async function (amtInFiat, fiatSymbol, cryptoSymbol, payerWalletAddress) {
    var stableCoinSymbol = 'USDT'
    var rate  = p2pBlock.getFiatStableCoinRate(fiatSymbol, stableCoinSymbol)
    console.log('Rate is ' + rate)
    var cryptoAmount = calculateCryptoNeeded(rate, amtInFiat, fiatSymbol, cryptoSymbol)
    console.log('Crypto amount is ' + cryptoAmount)
    var payerId = 'PAYERID'
    var merchantId = 'MERCHANTID'
    var originalFiatAmount = 100000
    
    try {
        const crypoReceivedStatus = await paymentContract.receiveCryptoFromPayer(cryptoAmount, cryptoSymbol, payerWalletAddress)
        console.log(crypoReceivedStatus.message)

        crypoReceivedStatus.data["paymentContractAddress"] = paymentContractAddress
        
        const swapToStableCoinStatus = await swapper.swapToStableCoin(crypoReceivedStatus.data)
        console.log(swapToStableCoinStatus.message)

        return await paymentContract.payWithStableCoin({
            payerId,
            merchantId,
            stableCoinQty: swapToStableCoinStatus.stableCoinQuantity,
            stableCoinSymbol,
            fiatSymbol,
            originalFiatAmount
        })
    } catch (error) {
        console.log(error)
    }
}