import React, { useState, useEffect, useRef } from 'react';
import Down from '../../../assets/img/down-white.svg';

function ExplorerTransactionsTnx() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('All Types');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleItemClick = (itemClassName) => {
    setSelectedItem(itemClassName);
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="ExplorerTransactionsFilter tnxTypeFilter">
      <div className="filterName">Tnx type</div>
      <div className="filterDropdown" ref={dropdownRef}>
        <div className="filterDropSelect" onClick={toggleDropdown}>
          <span className={selectedItem}>{selectedItem}</span>
          <img src={Down} alt="Down" className="dropDown" />
        </div>
        {isDropdownOpen && (
          <ul className="filterDropList">
            <li onClick={() => handleItemClick('All Types')}>
              <span className="allType">All Types</span>
            </li>
            <li onClick={() => handleItemClick('Redeem')}>
              <span className="redeem">Redeem</span>
            </li>
            <li onClick={() => handleItemClick('Transfer')}>
              <span className="transfer">Transfer</span>
            </li>
            <li onClick={() => handleItemClick('Deposit')}>
              <span className="deposit">Deposit</span>
            </li>
            <li onClick={() => handleItemClick('Borrow')}>
              <span className="borrow">Borrow</span>
            </li>
            <li onClick={() => handleItemClick('Approval')}>
              <span className="approval">Approval</span>
            </li>
            <li onClick={() => handleItemClick('Swap')}>
              <span className="swap">Swap</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExplorerTransactionsTnx;
