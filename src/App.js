import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import './App.css';
import './Responsive.css';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Web3Modal related
import { Web3Modal } from '@web3modal/react';
import {
  arbitrumGoerli,
  avalancheFuji,
  baseGoerli,
  goerli,
  optimismGoerli,
  polygonMumbai
} from 'viem/chains';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
const supportedChains = [
  arbitrumGoerli, 
  avalancheFuji, 
  baseGoerli, 
  goerli, 
  optimismGoerli, 
  polygonMumbai,
];
const projectId = "0792a282f1d5c406794a1cbec7d7f4b4";

const { publicClient } = configureChains(supportedChains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  isNewChainsStale: false,
  connectors: w3mConnectors({ projectId, chains: supportedChains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, supportedChains)

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
    </>
  );
}

export default App;
