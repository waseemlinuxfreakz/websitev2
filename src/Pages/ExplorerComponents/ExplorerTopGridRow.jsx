import React from 'react';
import ExplorerTopGridAddresses from './ExplorerTopGrid/ExplorerTopGridAddresses';
import ExplorerTopGridFees from './ExplorerTopGrid/ExplorerTopGridFees';
import ExplorerTopGridTotal from './ExplorerTopGrid/ExplorerTopGridTotal';
import ExplorerTopGridValue from './ExplorerTopGrid/ExplorerTopGridValue';

function ExplorerTopGridRow() {
    return ( 
        <div className="explorereTopRow">
            <div className="row">
                <div className="col-xl-3 col-lg-12 col-md-12">
                    <ExplorerTopGridValue/>
                </div>
                <div className="col-xl-3 col-lg-12 col-md-12">
                    <ExplorerTopGridFees/>
                </div>
                <div className="col-xl-3 col-lg-12 col-md-12">
                    <ExplorerTopGridTotal/>
                </div>
                <div className="col-xl-3 col-lg-12 col-md-12">
                    <ExplorerTopGridAddresses/>
                </div>
            </div>
        </div>
     );
}

export default ExplorerTopGridRow;