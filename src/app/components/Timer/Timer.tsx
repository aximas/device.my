import React, {useEffect, useState} from 'react';


import {TimerProps} from './Timer.props';
import {timeConvert} from '@core/utils/helpers/useTimeConvert'

export const Timer = ({sec, className, ...props}: TimerProps) => {
    /* React hooks */
    const [secs, setSecs] = useState(sec);
    useEffect(() => {
        const myInterval = setInterval(() => {
            if (secs > 0) {
                setSecs(secs - 1);
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    /* Custom hooks */
    const {days, hours, minutes, seconds} = timeConvert(secs);

    return (
        <span className={className} {...props}>
			{days} days {hours} hrs {minutes} mins {seconds}sec
		</span>
    );
};
