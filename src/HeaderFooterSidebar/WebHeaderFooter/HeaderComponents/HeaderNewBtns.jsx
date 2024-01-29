import React from 'react';
import AirdropEmmet from '../../../assets/img/web/AirdropEmmet.png';
import EmmetTokken from '../../../assets/img/web/EmmetTokken.png';

import './HeaderNewBtns.css';

function HeaderNewBtns() {
    return ( 
        <div className="headerBtn">
            <a href="#" className='AirdropEmmet'>
                🔥 Airdrop $EMMET Inscription 
                <img src={AirdropEmmet} alt="AirdropEmmet" />
            </a>
            <a href="#" className='EmmetTokken'>
                $EMMET Token Pre-sale
                <img src={EmmetTokken} alt="EmmetTokken" />
            </a>
        </div>
     );
}

export default HeaderNewBtns;