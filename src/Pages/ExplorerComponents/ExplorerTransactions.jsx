import React, { useState, useEffect, useRef } from 'react';
import ExplorerTransactionsTitle from './ExplorerTransactions/ExplorerTransactionsTitle';
import ExplorerTransactionsTnx from './ExplorerTransactions/ExplorerTransactionsTnx';
import ExplorerTransactionsTo from './ExplorerTransactions/ExplorerTransactionsTo';
import ExplorerTransactionsFrom from './ExplorerTransactions/ExplorerTransactionsFrom';

import Filter from '../../assets/img/Icon-button.svg';
import Close from '../../assets/img/close.svg';

function ExplorerTransactions() {
    const [isTransactionRightOpen, setIsTransactionRightOpen] = useState(false);
    const filterDropdownBoxRef = useRef(null);

    const toggleTransactionRight = () => {
        setIsTransactionRightOpen(!isTransactionRightOpen);
    };

    const handleOutsideClick = (e) => {
        if (filterDropdownBoxRef.current && !filterDropdownBoxRef.current.contains(e.target)) {
            // Click outside .filterDropdownBox, close the transactionRight
            setIsTransactionRightOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener when component mounts
        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return ( 
        <div className="explorerTransactions explTransaTop">
            <ExplorerTransactionsTitle/>
            <div ref={filterDropdownBoxRef} className="filterDropdownBox">
                {/* <button className="filterDropBTN" onClick={toggleTransactionRight}>
                    <img src={Filter} alt="Filter" />
                </button> */}
                <div className={`transactionRight ${isTransactionRightOpen ? 'open' : ''}`}>
                    <ExplorerTransactionsTnx/>
                    <ExplorerTransactionsFrom/>
                    <ExplorerTransactionsTo/>
                </div>
            </div>
        </div>
    );
}

export default ExplorerTransactions;
