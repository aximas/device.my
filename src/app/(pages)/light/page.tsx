'use client'

import {useEffect} from 'react'

const Light = () => {
    useEffect(() => {

        function devicelightHandler(value: Event) {
            if (event && 'value' in event) console.log(event.value + ' lux');
            else console.log('not detected')
        }

        if ('ondevicelight' in window) {
            window.addEventListener('devicelight', devicelightHandler);
        } else console.log('ondevicelight does not support')


        function lightlevelHandler(event: Event) {
            if ('value' in event) console.log(event.value);
            else console.log('not detected')
        }

        if ('onlightlevel' in window) {
            window.addEventListener('lightlevel', lightlevelHandler);
        } else console.log('onlightlevel does not support');

    }, [])

    return <div>
        Light
    </div>
}

export default Light