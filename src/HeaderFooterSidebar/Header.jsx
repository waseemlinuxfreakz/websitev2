import React from 'react';
import { Link } from 'react-router-dom';
import Wallet from '../assets/img/Wallet.svg';
import EthereumTop from '../assets/img/Ethereum-top.svg';

function Header() {
    return ( 
        <header id='header'>
            <div className="container">
                <div className="headerNave">
                    <h1 className="siteTitle">Swap</h1>
                    <div className="headerRightSide">
                        <div className="EthereumTop">
                            <a href="#"><img src={EthereumTop} alt="" /></a>
                        </div>
                        <div className="connectWallet">
                            <a href="#"><img src={Wallet} alt="Wallet" /> Connect</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;