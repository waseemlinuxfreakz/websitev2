import {optimismGoerli as ViemChain} from 'viem/chains';
import {EmmetChain} from './chainTypes';

const workingRPC: string = 'https://optimism-goerli.publicnode.com';

const optimismGoerli: EmmetChain = {
    // Emmet.Finance fields:
    icon:'', // TODO: add icon
    // Common from viem:
    ...ViemChain,
    // Local variation:
    name:"Optimism",
    rpcUrls:{
        default:{http:[workingRPC]},
        public:{http:[workingRPC]},
    }
}

export default optimismGoerli;