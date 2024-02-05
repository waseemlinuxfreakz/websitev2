import React from 'react';
import AirdropEmmet from '../../../assets/img/web/AirdropEmmet.svg';
import EmmetTokken from '../../../assets/img/web/EmmetTokken.svg';

import './HeaderNewBtns.css';

function HeaderNewBtns() {
    return ( 
        <div className="headerBtn">
            <a href="#" className='AirdropEmmet'>
                🔥 <span>Airdrop</span> $EMMET Inscription 
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