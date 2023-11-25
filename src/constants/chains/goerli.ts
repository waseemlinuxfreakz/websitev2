import {goerli as ViemChain} from 'viem/chains';
import {EmmetChain} from './chainTypes';

const workingRPC: string = 'https://ethereum-goerli.publicnode.com';

const goerli: EmmetChain = {
    // Emmet.Finance fields:
    icon:'img/Ethereum.svg',
    // Common from viem:
    ...ViemChain,
    // Local variation:
    name:"Ethereum",
    rpcUrls:{
        default:{http:[workingRPC]},
        public:{http:[workingRPC]},
    }
}

export default goerli;