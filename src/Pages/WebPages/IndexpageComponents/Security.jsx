import React from 'react';

import './Security.css';

import Security1 from '../../../assets/img/web/Security/Security-1.svg';
import Security2 from '../../../assets/img/web/Security/Security-2.svg';
import Security3 from '../../../assets/img/web/Security/Security-3.svg';
import Security4 from '../../../assets/img/web/Security/Security-4.svg';
import Security5 from '../../../assets/img/web/Security/Security-5.svg';
import Security6 from '../../../assets/img/web/Security/Security-6.svg';

function Security() {
    return ( 
        <div className="SecurityArea">
            <div className="container">
                <div className="SecurityInner">
                    <h2>Security above everything</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="securityBox">
                                <img src={Security1} className='securityIcon' alt="securityIcon" />
                                <h3>Security Audits</h3>
                                <p>All the bridge components undergo security code reviews and audits. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="securityBox">
                                <img src={Security2} className='securityIcon' alt="securityIcon" />
                                <h3>Red Team Pentesting</h3>
                                <p>WEB2 & WEB3 pentests are carries out by the leading whitehat hackers.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="securityBox">
                                <img src={Security3} className='securityIcon' alt="securityIcon" />
                                <h3>Blue Team Honeypots</h3>
                                <p>To spot and track our adversaries’ moves we arrange traps & honeypots.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="securityBox">
                                <img src={Security4} className='securityIcon' alt="securityIcon" />
                                <h3>Secure Infrastructure</h3>
                                <p>Role-based security settings on all involved endpoints. Minimal privileges required for the entity job.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="securityBox">
                                <img src={Security5} className='securityIcon' alt="securityIcon" />
                                <h3>Bug Bounty Program</h3>
                                <p>Responsible community members are rewarded for finding & reporting vulnerabilities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="securityBox">
                                <img src={Security6} className='securityIcon' alt="securityIcon" />
                                <h3>AI/ML Security Alerts</h3>
                                <p>NN activates security tools upon detection of fraudulent activities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Security;