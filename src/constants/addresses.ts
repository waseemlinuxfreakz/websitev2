import { SupportedChainId } from './chains';

/**
 * Map of supported chains to USDC contract addresses
 */
export const CHAIN_IDS_TO_USDC_ADDRESSES = {
  [SupportedChainId.ETH_GOERLI]: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', // 0
  [SupportedChainId.AVAX_FUJI]: '0x5425890298aed601595a70AB815c96711a31Bc65', // 1
  [SupportedChainId.OP_GOERLI]: '0xe05606174bac4A6364B31bd0eCA4bf4dD368f8C6', // 2
  [SupportedChainId.ARB_GOERLI]: '0xfd064a18f3bf249cf1f87fc203e90d8f650f2d63', // 3
  // 4.
  // 5.
  [SupportedChainId.BASE_GOERLI]: '0xF175520C52418dfE19C8098071a252da48Cd1C19', // 6
  [SupportedChainId.POL_MUMABI]: '0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97', // 7
}

/**
 * Map of supported chains to Token Messenger contract addresses
 */
export const CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES = {
  [SupportedChainId.ETH_GOERLI]: '0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8', // 0
  [SupportedChainId.AVAX_FUJI]: '0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0', // 1
  [SupportedChainId.OP_GOERLI]: '0x23a04d5935ed8bc8e3eb78db3541f0abfb001c6e', // 2
  [SupportedChainId.ARB_GOERLI]: '0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352', // 3
  // 4. 0x57d4eaf1091577a6b7d121202afbd2808134f117
  // 5. 0xa65fc943419a5ad590042fd67c9791fd015acf53a54cc823edb8ff81b9ed722e
  [SupportedChainId.BASE_GOERLI]: '0x877b8e8c9e2383077809787ed6f279ce01cb4cc8', // 6
  [SupportedChainId.POL_MUMABI]: '0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5', // 7
}

/**
 * Map of supported chains to Message Transmitter contract addresses
 */
export const CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES = {
  [SupportedChainId.ETH_GOERLI]: '0x26413e8157cd32011e726065a5462e97dd4d03d9', // 0
  [SupportedChainId.AVAX_FUJI]: '0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79', // 1
  [SupportedChainId.OP_GOERLI]: '0x9ff9a4da6f2157A9c82CE756f8fD7E0d75be8895', // 2
  [SupportedChainId.ARB_GOERLI]: '0x109bc137cb64eab7c0b1dddd1edf341467dc2d35', // 3
  // 4.
  // 5.
  [SupportedChainId.BASE_GOERLI]: '0x9ff9a4da6f2157A9c82CE756f8fD7E0d75be8895', // 6
  [SupportedChainId.POL_MUMABI]: '0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73', // 7
}