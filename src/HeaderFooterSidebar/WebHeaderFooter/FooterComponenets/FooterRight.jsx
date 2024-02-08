import React from 'react';

import './FooterRight.css'

function FooterRight() {
    return (
        <div className="footerRight">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="footerLinks">
                        <h3>Products</h3>
                        <ul className="footerLink">
                            <li><a href="/bridge" target='_blank'>Bridge</a></li>
                            <li><a href="#" target='_blank'>Swap</a></li>
                            {/* <li><a href="/swap" target='_blank'>Swap</a></li> */}
                            <li><a href="#" target='_blank'>Pool</a></li>
                            {/* <li><a href="/pool" target='_blank'>Pool</a></li> */}
                            <li><a href="/explorer" target='_blank'>Explorer</a></li>
                            <li><a href="#" target='_blank'>Stake</a></li>
                            {/* <li><a href="/pool/your-liquidity" target='_blank'>Stake</a></li> */}
                            <li><a href="#">Lend</a></li>
                            {/* <li><a href="#">Lend</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="footerLinks">
                        <h3>Developers</h3>
                        <ul className="footerLink">
                            <li><a href="https://docs.emmet.finance/" target='_blank'>Docs</a></li>
                            <li><a href="https://www.npmjs.com/package/emmet.sdk" target='_blank'>API / SDK</a></li>
                            {/* <li><a href="#" target='_blank'>Widget</a></li> */}
                            <li><a href="https://github.com/Emmet-Finance/whitepaper-v1.0" target='_blank'>White Paper</a></li>
                            <li><a href="https://github.com/Emmet-Finance" target='_blank'>GitHub</a></li>
                            <li><a href="https://docs.emmet.finance/security/bug-bounty" target='_blank'>Bug Bounty</a></li>
                            <li><a href="#" target='_blank'>List a Token</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="footerLinks">
                        <h3>About</h3>
                        <ul className="footerLink">
                            <li><a href="/terms-of-service" target='_blank'>Terms of Service</a></li>
                            <li><a href="/privacy-policy" target='_blank'>Privacy Policy</a></li>
                            <li><a href="https://docs.emmet.finance/intro/roadmap" target='_blank'>Roadmap</a></li>
                            <li><a href="#" target='_blank'>News</a></li>
                            <li><a href="https://docs.emmet.finance/ecosystem-and-partnerships/brand-and-logos" target='_blank'>Brand Assets</a></li>
                            <li><a href="https://docs.emmet.finance/team/join-us" target='_blank'>Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterRight;