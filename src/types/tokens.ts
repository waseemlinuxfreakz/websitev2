export const BridgeTokens = [
  // {
  //   "cmc_id": 20641,
  //   "name": "EURC",
  //   "icon": "img/coin/eurc.svg",
  //   "price": 2062.25
  // },
  {
    cmc_id: 3408,
    name: "USDC",
    icon: "img/coin/usdc.svg",
    price: 0.9998,
  },
  {
    cmc_id: 11419,
    name: "TON",
    icon: "img/chain/ton.svg",
    price: 7.09,
  },
  // {
  //   cmc_id: 1027,
  //   name: "ETH",
  //   icon: "img/coin/eth.svg",
  //   price: 2062.25,
  // },
  // {
  //   "cmc_id":0,
  //   "name": "EMMET",
  //   "icon": "img/coin/emmet.svg",
  //   "price": 1
  // },
  // {
  //   "cmc_id":15489,
  //   "name": "SCRL",
  //   "icon": "img/coin/scoll.svg",
  //   "price": 0.000145
  // },
  // {
  //   "cmc_id":11840,
  //   "name": "OP",
  //   "icon": "img/coin/op.svg",
  //   "price": 1.73
  // },
  // {
  //   "cmc_id":4943,
  //   "name": "DAI",
  //   "icon": "img/coin/dai.svg",
  //   "price": 1
  // },
  // {
  //   "cmc_id":825,
  //   "name": "USDT",
  //   "icon": "img/coin/usdt.svg",
  //   "price": 1
  // }
];

export const TOKEN_CHAIN_CONTRACT = {
  // EURC: {
  //     // Mainnets: https://developers.circle.com/stablecoins/docs/eurc-on-main-networks
  //     arbitrum: '',
  //     avalanche: '0xc891eb4cbdeff6e073e859e987815ed1505c2acd',
  //     ethereum: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c',
  //     optimism: '',
  //     base: '',
  //     polygon: '',
  //     // Testnets: https://developers.circle.com/stablecoins/docs/eurc-on-test-networks
  //     arbitrumSepolia: '',
  //     avalancheFuji: "0x5e44db7996c682e92a960b65ac713a54ad815c6b",
  //     baseSepolia: '',
  //     optimismSepolia: '',
  //     sepolia: '0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4',
  //     polygonMumbai: '',
  // },
  USDC: {
    // Mainnets:
    arbitrum: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    avalanche: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    ethereum: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    optimism: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    base: "",
    polygon: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    ton: "",
    // Testnets:
    arbitrumSepolia: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
    avalancheFuji: "0x5425890298aed601595a70AB815c96711a31Bc65",
    baseSepolia: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    optimismSepolia: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
    sepolia: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    polygonMumbai: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
    tonTestnet: "kQAxUmtcvJrOJYXW4z1ESci3R1I88IhjhurLVfE5AdFK7rMO",
  },
  TON: {
    tonTestnet: "",
    polygonMumbai: "0xf2851831674d1630f49a9c000a34d5a8e167577c",
  },
};

export type TTokenName = keyof typeof TOKEN_CHAIN_CONTRACT;

export const TOKEN_DECIMALS = {
  // DAI: 18,
  // EMMET:18,
  EURC: 6,
  // ETH: 18,
  USDC: 6,
  TON: 9,
  // USDT:18,
  // WBTC:18
};
