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

  return isYourLiquidityVisible ? (
    <div className="yourliquidityArea">
      <div className="yourliquidity">
        <div className="YourliquidityTop">
          <h2>Your liquidity</h2>
          <img src={Close} alt="Close" className="closeLiquidity" onClick={handleCloseClick} />
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
            <ChainSelectorDropdown />
            <div className="YourliquidityChainApy">
              <p>
                APY <img src={Info} alt="Info" />
              </p>{' '}
              <span>0.25%</span>
            </div>
          </div>
          <div className="yourliquidityInput">
            <TokenSelectorBox type="Inout" />
          </div>
          <button type="button" className="depositeBtn">
            Deposit
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Yourliquidity;
