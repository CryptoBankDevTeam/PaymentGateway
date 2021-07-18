
exports.fiatSymbols = [
    {
        symbol: 'NGN',
        name: 'Naira',
        fullName: 'Nigerian Naira',
        country: 'Nigeria'
    },
    {
        symbol: 'RND',
        name: 'Rand',
        fullName: 'South African Rand',
        country: 'South Africa'
    },
    {
        symbol: 'GHS',
        name: 'Cedi',
        fullName: 'Ghanaian Cedi',
        country: 'Ghana'
    }
]

exports.stableCoinSymbols = [
    {
        symbol: 'USDT',
        peggedCurrency: 'USD'
    },
    {
        symbol: 'USDC',
        peggedCurrency: 'USD'
    }
]

exports.getFiatStableCoinRate = function (fiatSymbol, stableCoinSymbol) {

    const random = (min, max) => {
        return Math.ceil(Math.random() * (max - min) + min)
    } 

    if(fiatSymbol == 'NGN' && stableCoinSymbol == 'USDT' ) {
        return random(490, 550)
    } else {
        return random(150, 200)
    }
}
