import React from 'react';
import ExplorerTopGridAddresses from './ExplorerTopGrid/ExplorerTopGridAddresses';
import ExplorerTopGridFees from './ExplorerTopGrid/ExplorerTopGridFees';
import ExplorerTopGridTotal from './ExplorerTopGrid/ExplorerTopGridTotal';
import ExplorerTopGridValue from './ExplorerTopGrid/ExplorerTopGridValue';
import './ExplorerTopGrid/ExplorerTopGrid.css';

function ExplorerTopGridRow() {
    return ( 
        <div className="explorereTopRow">
            <div className="row">
                <div className="col-xl-3">
                    <ExplorerTopGridValue/>
                </div>
                <div className="col-xl-3">
                    <ExplorerTopGridFees/>
                </div>
                <div className="col-xl-3">
                    <ExplorerTopGridTotal/>
                </div>
                <div className="col-xl-3">
                    <ExplorerTopGridAddresses/>
                </div>
            </div>
        </div>
     );
}

export default ExplorerTopGridRow;