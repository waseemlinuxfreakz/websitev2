import React from "react";
import EstimatedTime from '../../../assets/img/Estimatedtime.svg';

export default function BridgingTimeEstimation() {
    
    return (<div className="detialItem">
        <div className="detialItemLeft">
            Estimated time
        </div>
        <div className="detialItemRight">
            <img src={EstimatedTime} alt="EstimatedTime" />
            1 min 59 sec
        </div>
    </div>)
}