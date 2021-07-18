const p2pBlock = require('../stubs/p2p-block-stub')

exports.getFiatStableCoinRate = function (fiatSymbol, stableCoinSymbol) {
    return p2pBlock.getFiatStableCoinRate (fiatSymbol, stableCoinSymbol)
}