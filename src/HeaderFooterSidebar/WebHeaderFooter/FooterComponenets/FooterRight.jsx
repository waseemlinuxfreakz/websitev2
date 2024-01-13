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
                            <li><a href="/bridge">Bridge</a></li>
                            <li><a href="/swap">Swap</a></li>
                            <li><a href="/pool">Pool</a></li>
                            <li><a href="/explorer">Explorer</a></li>
                            <li><a href="/pool/your-liquidity">Stake</a></li>
                            <li><a href="#">Lend</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="footerLinks">
                        <h3>Developers</h3>
                        <ul className="footerLink">
                            <li><a href="https://docs.emmet.finance/">Docs</a></li>
                            <li><a href="https://www.npmjs.com/package/emmet.sdk">API / SDK</a></li>
                            <li><a href="#">Widget</a></li>
                            <li><a href="https://github.com/Emmet-Finance/whitepaper-v1.0">White Paper</a></li>
                            <li><a href="https://github.com/Emmet-Finance">GitHub</a></li>
                            <li><a href="https://docs.emmet.finance/security/bug-bounty">Bug Bounty</a></li>
                            <li><a href="#">List a Token</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="footerLinks">
                        <h3>About</h3>
                        <ul className="footerLink">
                            <li><a href="#">Terms Of Service</a></li>
                            <li><a href="https://docs.emmet.finance/intro/roadmap">Roadmap</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="https://docs.emmet.finance/ecosystem-and-partnerships/brand-and-logos">Brand Assets</a></li>
                            <li><a href="https://docs.emmet.finance/team/join-us">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default FooterRight;