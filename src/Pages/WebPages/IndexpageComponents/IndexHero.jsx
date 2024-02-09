import React from 'react';

import './IndexHero.css';

function IndexHero() {
    return ( 
        <div className="heroContainer">
            <div className="container">
                <div className="heroContainer">
                    <p>All-in-One Decentralized Cross-Chain DeFi Hub</p>
                    <h2>Unlock the Full Potential of DeFi</h2>
                    <div className="counter">
                        <div className="counterBox">
                            <h3>$10.5M+</h3>
                            <span>Total Volume</span>
                        </div>
                        <div className="counterBox">
                            <h3>150K+</h3>
                            <span>Total Transactions</span>
                        </div>
                        <div className="counterBox">
                            <h3>{'<1 min'}</h3>
                            <span>Average Fill Time</span>
                        </div>
                        <div className="counterBox">
                            <h3>25K+</h3>
                            <span>Monthly active users</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default IndexHero;