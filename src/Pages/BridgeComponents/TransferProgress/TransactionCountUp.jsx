
import React from 'react';
import useElapsedTime from '../../../hooks/useElapsedTime';

export default function TransactionCountUp({start}) {

    const elapsedTime = useElapsedTime(start);

    return (<h5>

        {
            `${elapsedTime.hours ? elapsedTime.hours + ' hrs ' : ''}${elapsedTime.minutes ? elapsedTime.minutes + ' min ' : ''}${elapsedTime.seconds ? elapsedTime.seconds + ' sec' : ''}`
        }
    </h5>)

}