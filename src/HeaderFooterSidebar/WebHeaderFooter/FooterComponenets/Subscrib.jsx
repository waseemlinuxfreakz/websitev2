import React from 'react';

import './Subscrib.css'

function Subscrib() {
    return ( 
        <div className="subscribBox">
            <h2>Sign up for our newsletter and join the growing EMMET community</h2>
            <form action="#" className="subscribForm">
                <input type="search" placeholder='Email' />
                <button type='button'>Subscribe</button>
            </form>
        </div>
     );
}

export default Subscrib;