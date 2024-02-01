import React from 'react';

import './IntroducingEMMET.css';
import EmmetIntro from '../../../assets/img/web/Tokenomics/card.png';
import EmmetIntroMob from '../../../assets/img/web/Tokenomics/card-mob.png';
import IntroArt from '../../../assets/img/web/Tokenomics/IntroArt.png';


function IntroducingEMMET() {
    return ( 
        <div className="introEmmetContainer">
            <div className="container introEmmetContent">
                <img src={IntroArt} alt="IntroArt" className="introArt" />
                <div className="row">
                    <div className="col-md-6">
                        <div className="introEmmetLeft">
                            <h1>Introducing  <br />
                                <span>$EMMET</span>
                            </h1>
                            <p>EMMET native token unlocks the power of decentralized finance, giving you access to a growing ecosystem of cutting-edge DeFi tools and innovative blockchain applicatios.</p>
                            <a href="#" className='whiteBtn'>Explore $EMMET Tokenomics</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="introEmmetRight">
                            <img src={EmmetIntro} className='tokDesImg' alt="EmmetIntro" />
                            <img src={EmmetIntroMob} className='tokMobImg' alt="EmmetIntro" />
                            <p>Min contribution: <span>500,000 EMMET</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default IntroducingEMMET;