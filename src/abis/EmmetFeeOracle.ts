export const EmmetFeeOracleABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "selfCoin_",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "selfChainId_",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "txMinimumFee_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "coinName_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "calculateCoinFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "destChainName_",
        type: "string",
      },
    ],
    name: "calculateTransactionFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "chainName_",
        type: "string",
      },
    ],
    name: "getChainByname",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "chainId",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "domain",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "txFee",
            type: "uint64",
          },
          {
            internalType: "bytes14",
            name: "nativeCoin",
            type: "bytes14",
          },
        ],
        internalType: "struct IEmmetFeeOracle.Chain",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destDomain_",
        type: "uint64",
      },
    ],
    name: "getChainFee",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destDomain_",
        type: "uint64",
      },
    ],
    name: "getChainNameByDomain",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainId_",
        type: "uint64",
      },
    ],
    name: "getChainNameById",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "coinName_",
        type: "string",
      },
    ],
    name: "getCoinFee",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "minimum",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "percentage",
            type: "uint128",
          },
        ],
        internalType: "struct IEmmetFeeOracle.CoinFee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "coinName",
        type: "string",
      },
    ],
    name: "getCoinPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "coinName",
        type: "string",
      },
    ],
    name: "getMinimumTxFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceDecimals",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeeDivisor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "selfChainId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "selfCoin",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "updateAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "chainName",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "chainId_",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "domain_",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "txFee_",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "nativeCoin_",
        type: "string",
      },
    ],
    name: "updateChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "coinName_",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "minimum",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "percentage",
            type: "uint128",
          },
        ],
        internalType: "struct IEmmetFeeOracle.CoinFee",
        name: "coinFee_",
        type: "tuple",
      },
    ],
    name: "updateCoinFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "coinName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "updateCoinPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "coinNames",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "prices",
        type: "uint256[]",
      },
    ],
    name: "updatePrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "protocolFeeDivisor_",
        type: "uint256",
      },
    ],
    name: "updateProtocolFeeDivisor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "txMinimumFee_",
        type: "uint256",
      },
    ],
    name: "updateTxMinimalFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
