import React from 'react';

import './Distribution.css';
import DistributionImg from '../../../assets/img/web/Tokenomics/Distribution.svg';
import DistributionImgMob from '../../../assets/img/web/Tokenomics/Distribution-mob.png';

function Distribution() {
    return ( 
        <div className="distributionContainer">
            <div className="container">
                <div className="distributionContent">
                    <img src={DistributionImg} className='tokDesImg' alt="Distribution" />
                    <img src={DistributionImgMob} className='tokMobImg' alt="Distribution" />
                </div>
            </div>
        </div>
     );
}

export default Distribution;