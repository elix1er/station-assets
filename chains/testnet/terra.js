module.exports = {
  chainID: 'pisco-1',
  lcd: 'https://pisco-lcd.terra.dev',
  gasAdjustment: 3.5,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra',
  icon: 'https://station-assets.terra.money/img/chains/Terra.svg',
  explorer: {
    address: "https://terrasco.pe/testnet/address/{}",
    tx: "https://terrasco.pe/testnet/tx/{}",
    validator: "https://terrasco.pe/testnet/validator/{}",
    block: "https://terrasco.pe/testnet/block/{}",
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: 'https://station-assets.terra.money/img/coins/Luna.svg',
      decimals: 6,
    },
  ],
}
