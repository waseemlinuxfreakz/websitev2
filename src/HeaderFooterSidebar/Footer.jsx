import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return ( 
        <footer id='footerArea'>
            <div className="container">
                <div className="footerRow">
                    <div className="leftCol">
                        <p>SDK v2.1.3-alpha.3</p>
                    </div>
                    <div className="centerCol">
                        <div className="footerNav">
                            <a href="#">Terms of Service</a>
                            <span>|</span>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="rightCol">
                        <p className="powerBy">
                            © 2023 Powered by Emmet Finance
                        </p>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;