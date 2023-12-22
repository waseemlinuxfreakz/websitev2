import React, { useState } from 'react';

import './Yourliquidity.css';

import Close from '../../../assets/img/close.svg';
import Info from '../../../assets/img/InfoIcons.svg';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';
import TokenSelectorBox from '../../HomeComponents/TokenSelectors/TokenSelectorBox';

function Yourliquidity() {
  const [activeButton, setActiveButton] = useState('Deposit');
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(true);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleCloseClick = () => {
    setYourLiquidityVisible(false);
  };

  
  const handleBackButtonClick = () => {
    window.history.back();
  };

  return isYourLiquidityVisible ? (
    
    <>

      <div className="yourliquidityArea">
        <div className="yourliquidity">
          <div className="YourliquidityTop">
            <h2>Your liquidity</h2>
            <img src={Close} alt="Close" className="closeLiquidity" onClick={handleBackButtonClick}/>
          </div>
          <div className="toggleLiquidity">
            <button
              className={`depositeToggle ${activeButton === 'Deposit' ? 'active' : ''}`}
              onClick={() => handleButtonClick('Deposit')}
            >
              Deposit
            </button>
            <button
              className={`withdrawToggle ${activeButton === 'Withdraw' ? 'active' : ''}`}
              onClick={() => handleButtonClick('Withdraw')}
            >
              Withdraw
            </button>
          </div>
          <div className="YourliquidityContainer">
            <div className="YourliquidityChain">
              <ChainSelectorDropdown 
                parent={'LP'}
              />
              <div className="YourliquidityChainApy">
                <p>
                  APY <img src={Info} alt="Info" />
                </p>{' '}
                <span>0.25%</span>
              </div>
            </div>
            <div className="yourliquidityInput">
              <TokenSelectorBox type="LP" />
            </div>
            <ul className="YourliquidityList">
              <li>
                <div className="LiquidityleftText">
                  LPT Available
                </div>
                <div className="LiquidityrightText">
                  0.003
                </div>
              </li>
              <li>
                <div className="LiquidityleftText">
                  LPT farming
                </div>
                <div className="LiquidityrightText">
                  -
                </div>
              </li>
              <li>
                <div className="LiquidityleftText">
                  Share of Pool
                </div>
                <div className="LiquidityrightText">
                  0.00%
                </div>
              </li>
              <li>
                <div className="LiquidityleftText">
                  Volume (24h)
                </div>
                <div className="LiquidityrightText">
                  $2,999,236.93
                </div>
              </li>
              <li>
                <div className="LiquidityleftText">
                  Liquidity
                </div>
                <div className="LiquidityrightText">
                  $23,692,142.50
                </div>
              </li>
            </ul>
            <button type="button" className="depositeBtn">
              Deposit
            </button>
          </div>
        </div>
      </div>
      </>
  ) : null;
}

export default Yourliquidity;
