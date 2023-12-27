import React from 'react';
import EstimatedTime from '../../assets/img/InfoIcons.svg';

function TransactionInformation() {
    return ( 
        <div className="TransInfo">
            <img src={EstimatedTime} alt="EstimatedTime" />
            <p>Your transaction is being processed</p>
        </div>
     );
}

export default TransactionInformation;