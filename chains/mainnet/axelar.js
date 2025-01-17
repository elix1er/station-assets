module.exports = {
  chainID: 'axelar-dojo-1',
  lcd: 'https://lcd-axelar.imperator.co',
  gasAdjustment: 1.75,
  gasPrices: { uaxl: 0.007 },
  prefix: 'axelar',
  coinType: '118',
  baseAsset: 'uaxl',
  name: 'Axelar',
  icon: 'https://station-assets.terra.money/img/chains/Axelar.svg',
  ibc: {
    fromTerra: 'channel-6',
    toTerra: 'channel-11',
  },
  explorer: {
    address: 'https://www.mintscan.io/axelar/account/{}',
    tx: 'https://www.mintscan.io/axelar/txs/{}',
    validator: 'https://www.mintscan.io/axelar/validators/{}',
    block: 'https://www.mintscan.io/axelar/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uaxl',
      symbol: 'AXL',
      name: 'Axelar',
      icon: 'https://station-assets.terra.money/img/coins/Axelar.svg',
      decimals: 6,
    },
  ],
}
