export const options = {
  retryCount: 100,
  retryDelay: 3000,
  timeout: 100_000,
};

export const ChainToMessengerAddress = {
  // Method: Deposit For Burn 0x6fd3504e

  // Mainnets:
  arbitrum: "0x19330d10D9Cc8751218eaf51E8885D058642E08A",
  avalanche: "0x6B25532e1060CE10cc3B0A99e5683b91BFDe6982",
  base: "0x1682Ae6375C4E4A97e4B583BC394c861A46D8962",
  ethereum: "0xBd3fa81B58Ba92a82136038B25aDec7066af3155",
  optimism: "0x2B4069517957735bE00ceE0fadAE88a26365528f",
  polygon: "0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE",
  // Testnets:
  arbitrumSepolia: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
  avalancheFuji: "0xeb08f243E5d3FCFF26A9E38Ae5520A669f4019d0",
  baseSepolia: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
  optimismSepolia: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
  sepolia: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
  polygonAmoy: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
};

export const ChainToTransmitterContract = {
  // Method: Receive message 0x57ecfd28

  // Mainnets:
  arbitrum: "0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca",
  avalanche: "0x8186359aF5F57FbB40c6b14A588d2A59C0C29880",
  base: "0xAD09780d193884d503182aD4588450C416D6F9D4",
  ethereum: "0x0a992d191DEeC32aFe36203Ad87D7d289a738F81",
  optimism: "0x4D41f22c5a0e5c74090899E5a8Fb597a8842b3e8",
  polygon: "0xF3be9355363857F3e001be68856A2f96b4C39Ba9",
  // Testnets:
  arbitrumSepolia: "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872",
  avalancheFuji: "0xa9fB1b3009DCb79E2fe346c16a604B8Fa8aE0a79",
  baseSepolia: "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
  optimismSepolia: "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
  sepolia: "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
  polygonAmoy: "0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73",
};

export const STABLECOINS = ["DAI", "EURC", "USDC", "USDT"];
