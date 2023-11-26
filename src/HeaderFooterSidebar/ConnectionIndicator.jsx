import { useEffect, useState } from 'react'
import EthereumTop from '../assets/img/Ethereum.svg';
import { useAccount, useNetwork } from 'wagmi';
import chainData from '../Pages/HomeComponents/Chain.json';

export default function ConnectionIndicator() {

    const { isConnected } = useAccount();
    const { chain } = useNetwork();

    const [logo, setLogo] = useState(EthereumTop);
    const [chainName, setChainName] = useState('');

    useEffect(() => {
        if (chain) {
            const selChain = chainData.find(c => chain.id === c.id);
            if (selChain) {
                setLogo(selChain.icon);
                setChainName(selChain.name);
            }
        }
    }, [chain]);

    return (<div className="EthereumTop">
        {isConnected
            ? <img src={logo} alt={`Connected to ${chainName}`} width="30px" />
            : ''
        }
    </div>)
}