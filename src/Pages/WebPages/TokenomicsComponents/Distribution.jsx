import React from 'react';

import './Distribution.css';
import DistributionImg from '../../../assets/img/web/Tokenomics/Distribution.svg';

function Distribution() {
    return ( 
        <div className="distributionContainer">
            <div className="container">
                <div className="distributionContent">
                    <img src={DistributionImg} alt="Distribution" />
                </div>
            </div>
        </div>
     );
}

export default Distribution;