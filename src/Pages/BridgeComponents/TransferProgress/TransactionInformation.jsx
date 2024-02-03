import React from 'react';

function TransactionInformation() {

    const InfoIcon = '/img/transfer-progress/InfoIcon.svg';

    return ( 
        <div className="TransInfo">
            <img src={InfoIcon} alt="EstimatedTime" />
            <p>Your transaction is being processed</p>
        </div>
     );
}

export default TransactionInformation;