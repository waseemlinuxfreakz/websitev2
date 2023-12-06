import React from 'react';
import InfoIcon from '../../../assets/img/InfoIcons.svg';

export default function SlippagePopUp({ parent }) {

    function isInsideBridge() {
        return parent && parent.toLowerCase() === 'bridge';
    }

    function onSlippageSelect(choice) {
        console.log("Slippage choice", choice);
    }

    function onTxDeadlineChoice(choice) {
        console.log("Deadline choice", choice);
    }

    return (<div className="slippageModal">
        <div className="slipageModal">
            <div className="slipageModalTitle">
                Max slippage <img src={InfoIcon} title='Info' alt="InfoIcon" />
            </div>
            <div className="slipageValueBox">
                <div className="slipageValue">
                    <span className='valueItem' id='value1' onClick={() => onSlippageSelect(0.1)}>0.1 %</span>
                    <span className='valueItem active' id='value2' onClick={() => onSlippageSelect(0.5)}>0.5 %</span>
                    <span className='valueItem' id='value3' onClick={() => onSlippageSelect(1.0)}>1.0 %</span>
                </div>
                <div className="customeValue">
                    <input
                        type="number"
                        placeholder='Custom'
                    />
                    <span>%</span>
                </div>
            </div>
            <br />
            <div className="timeSelect">
                <div className="slipageModalTitle">
                    Txn deadline <img src={InfoIcon} title='Info' alt="InfoIcon" />
                </div>
                <div className="slipageValueBox">
                    <div className="slipageValue">
                        <span className='valueItem' id='timeValue1' onClick={() => onTxDeadlineChoice()}>5 min</span>
                        <span className='valueItem' id='timeValue2' onClick={() => onTxDeadlineChoice()}>10 min</span>
                    </div>
                    <div className="customeValue">
                        <input type="number" placeholder='Custom' />
                        <span>min</span>
                    </div>
                </div>
            </div>
        </div>
    </div>)

}