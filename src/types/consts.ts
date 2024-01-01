import { TChainName } from "./chains";
import { TTokenName } from "./tokens";

export const options = {
    retryCount: 100,
    retryDelay: 3000,
    timeout: 100_000
};

export const ChainToMessengerAddress = {
    arbitrum: "0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352",
    avalanche: "0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0",
    base: "0x877b8e8c9e2383077809787ed6f279ce01cb4cc8",
    goerli: "0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8",
    linea: "",
    optimism: "0x23a04d5935ed8bc8e3eb78db3541f0abfb001c6e",
    polygon: "0x9f3b8679c73c2fef8b59b4f3444d4e156fb70aa5",
    scroll: ""
}

export const ChainToTransmitterContract = {
    arbitrum: "0x109bc137cb64eab7c0b1dddd1edf341467dc2d35",
    avalanche: "0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79",
    base: "0x9ff9a4da6f2157A9c82CE756f8fD7E0d75be8895",
    goerli: "0x26413e8157cd32011e726065a5462e97dd4d03d9",
    linea: "",
    optimism: "0x9ff9a4da6f2157A9c82CE756f8fD7E0d75be8895",
    polygon: "0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73",
    scroll: ""
}


export const ChainToDestinationDomain = {
    arbitrum: 3,
    avalanche: 1,
    base: 6,
    goerli: 0,
    optimism: 2,
    polygon: 7,
    // Not supported:
    linea: -1,
    scroll: -2
}

export const ChainToBridge = {
    arbitrum: "",
    avalanche: "0xbbbC5D74407Eb87D929b1eBA18ACbb95E11B219F",
    base: "",
    goerli: "0x750B52c82596C7b6489C207b87adcf56Fe4a3ABe",
    linea: "",
    optimism: "",
    polygon: "",
    scroll: ""
}

export const TOKEN_CHAIN_CONTRACT = {
    USDC: {
        goerli: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', // 0
        avalanche: '0x5425890298aed601595a70AB815c96711a31Bc65', // 1
        optimism: '0xe05606174bac4A6364B31bd0eCA4bf4dD368f8C6', // 2
        arbitrum: '0xfd064a18f3bf249cf1f87fc203e90d8f650f2d63', // 3
        // 4.
        // 5.
        base: '0xF175520C52418dfE19C8098071a252da48Cd1C19', // 6
        polygon: '0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97', // 7
        // No USDC:
        linea: "",
        scroll: ""
    }
}

export const txBackend: string = "https://testnet-tx.emmet.finance/";