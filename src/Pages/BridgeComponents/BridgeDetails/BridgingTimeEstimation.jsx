import React from "react";
import EstimatedTime from '../../../assets/img/Estimatedtime.svg';

export default function BridgingTimeEstimation() {
    
    return (<div className="detialItem">
        <div className="detialItemLeft">
            Estimated time
        </div>
        <div className="detialItemRight">
            <img src={EstimatedTime} alt="EstimatedTime" />
            2 min 30 sec
        </div>
    </div>)
}