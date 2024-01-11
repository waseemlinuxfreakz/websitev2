import React, { useState, useEffect} from 'react';
import TransactionDetailsBreadcrumb from './TransactionDetailsBreadcrumb';
import TransactionHash from './TransactionHash';
import TransactionDetailsArea from './TransactionDetailsBox';


function TransactionDetails() {

    const [scrolledTop, setScrolledTop] = useState(false);

    if(!scrolledTop){
        window.scroll(0,0);
        setScrolledTop(true);
    }

    return ( 
        <div className="TransactionDetailsArea">
            <TransactionDetailsBreadcrumb/>
            <TransactionHash/>
            <TransactionDetailsArea/>
        </div>
     );
}

export default TransactionDetails;