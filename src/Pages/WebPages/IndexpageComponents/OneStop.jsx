import React from 'react';

import './OneStop.css';

import OneStop1 from '../../../assets/img/web/card/card-1.png';
import OneStop2 from '../../../assets/img/web/card/card-2.png';
import OneStop3 from '../../../assets/img/web/card/card-3.png';
import OneStop4 from '../../../assets/img/web/card/card-4.png';
import OneStop5 from '../../../assets/img/web/card/card-5.png';


function OneStop() {
    return ( 
        <>
            <div className="oneStopContainer">
                <div className="container">
                    <div className="oneStopContent">
                        <h2>One Stop Decentralized DeFi Solution</h2>
                        <div className="oneStopImges">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={OneStop1} className='OneStopImg' alt="One Stop" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={OneStop2} className='OneStopImg' alt="One Stop" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={OneStop3} className='OneStopImg' alt="One Stop" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={OneStop4} className='OneStopImg' alt="One Stop" />
                                </div>
                                <div className="col-lg-8">
                                    <img src={OneStop5} className='OneStopImg' alt="One Stop" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default OneStop;