import React from 'react';
import EstimatedTime from '../../assets/img/InfoIcons.svg';

function TransactionInformation() {
    return ( 
        <div className="TransInfo">
            <img src={EstimatedTime} alt="EstimatedTime" />
            <p>Bla bla information about transaction or terms</p>
        </div>
     );
}

export default TransactionInformation;