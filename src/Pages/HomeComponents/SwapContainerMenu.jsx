import React, { useState, useEffect, useRef } from 'react';
import SwapMenuBtn from '../../assets/img/Icon-button.svg';
import SwapMenuBtn2 from '../../assets/img/Icon-button2.svg';
import InfoIcon from '../../assets/img/InfoIcons.svg';

const SwapContainerMenu = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isActive, setActive] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setActive(!isActive);
        toggleBodyClass(); // Call the function to toggle body class
    };

    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalVisible(false);
            setActive(false);
            toggleBodyClass(); // Call the function to toggle body class
        }
    };

    const toggleBodyClass = () => {
        document.body.classList.toggle('openmenu');
        document.querySelector('.swapMenuContainer').classList.toggle('openmenu');
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="swapMenuContainer" ref={modalRef}>
                <button className={`swapMenuBtn ${isActive ? 'active' : ''}`} onClick={toggleModal}>
                    <img src={SwapMenuBtn} alt="SwapMenuBtn" className='openMenu' />
                    <img src={SwapMenuBtn2} alt="SwapMenuBtn" className='closeMenu' />
                </button>

                {isModalVisible &&
                    <div className="slippageModal">
                        <div className="slipageModal">
                        <div className="slipageModalTitle">
                            Max slippage <img src={InfoIcon} title='Info' alt="InfoIcon" />
                        </div>
                        <div className="slipageValueBox">
                            <div className="slipageValue">
                                <span className='valueItem' id='value1' onClick={toggleModal}>0.1 %</span>
                                <span className='valueItem active' id='value2' onClick={toggleModal}>0.5 %</span>
                                <span className='valueItem' id='value3' onClick={toggleModal}>1.0 %</span>
                            </div>
                            <div className="customeValue">
                                <input type="number" placeholder='Custom' />
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
                                    <span className='valueItem' id='timeValue1' onClick={toggleModal}>5 min</span>
                                    <span className='valueItem' id='timeValue2' onClick={toggleModal}>10 min</span>
                                </div>
                                <div className="customeValue">
                                    <input type="number" placeholder='Custom' />
                                    <span>min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                }
            </div>
        </>
    );
}

export default SwapContainerMenu;