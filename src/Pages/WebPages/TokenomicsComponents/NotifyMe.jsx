import React, { useState } from 'react';
import './Notifyme.css';
import Close from '../../../assets/img/close.svg';

function NotifyMe() {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const handleNotifyClick = () => {
      setModalVisible(true);
    };
  
    const handleCloseClick = () => {
      setModalVisible(false);
    };

    return ( 
        <>
            <button className="notifyMe" onClick={handleNotifyClick}>Notify me</button>
            {isModalVisible && (
            <div className="notufyModal">
                <div className="notufyModalBox">
                    <div className="notifyTitle">
                        Private Seed
                        <img src={Close} alt="Notify" onClick={handleCloseClick} className="closeNot" />
                    </div>
                    <div className="notufyModalBody">
                        <p>I want to receive a notification when Private Seed started</p>
                        <form action="#">
                            <input type="email" placeholder="Email" />
                            <button type="notifyMeBtn">Notify me</button>
                        </form>
                    </div>
                </div>
            </div>
            )}
        </>
     );
}

export default NotifyMe;