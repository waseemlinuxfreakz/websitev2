import React from 'react';

import './FooterRight.css'

function FooterRight() {
    return ( 
        <div className="footerRight">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="footerLinks">
                        <h3>Products</h3>
                        <ul className="footerLink">
                            <li><a href="#">Bridge</a></li>
                            <li><a href="#">Swap</a></li>
                            <li><a href="#">Pool</a></li>
                            <li><a href="#">Stake</a></li>
                            <li><a href="#">Lend</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="footerLinks">
                        <h3>Developers</h3>
                        <ul className="footerLink">
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">API / SDK</a></li>
                            <li><a href="#">Widget</a></li>
                            <li><a href="#">White Paper</a></li>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Bug Bounty</a></li>
                            <li><a href="#">List a Token</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="footerLinks">
                        <h3>About</h3>
                        <ul className="footerLink">
                            <li><a href="#">Terms Of Service</a></li>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default FooterRight;