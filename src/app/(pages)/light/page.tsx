'use client'

import {useEffect, useState} from 'react'

const Light = () => {
    const [light, setLight] = useState<number | null>(null);
    const [level, setLevel] = useState<number | null>(null);
    const [lightSupport, setLightSupport] = useState<{ light: boolean, level: boolean }>({light: true, level: true})

    useEffect(() => {

        function devicelightHandler(event: Event) {
            if ('value' in event) {
                console.log(event.value + ' lux');
                typeof event.value === 'number' && setLight(event.value)
            } else {
                console.log('not detected')
                setLightSupport(prevState => ({...prevState, light: false}))
            }
        }

        if ('ondevicelight' in window) {
            window.addEventListener('devicelight', devicelightHandler);
        } else {
            console.log('ondevicelight does not support')
            setLightSupport(prevState => ({...prevState, light: false}))
        }


        function lightlevelHandler(event: Event) {
            if ('value' in event) {
                console.log(event.value);
                typeof event.value === 'number' && setLevel(event.value)
            } else {
                console.log('not detected')
                setLightSupport(prevState => ({...prevState, level: false}))
            }
        }

        if ('onlightlevel' in window) {
            window.addEventListener('lightlevel', lightlevelHandler);
        } else {
            console.log('onlightlevel does not support');
            setLightSupport(prevState => ({...prevState, level: false}))
        }

    }, [])

    return <div>
        <h3>
            Light
        </h3>
        <dl>
            <div>
                <dt>
                    Light
                </dt>
                <dd>
                    {lightSupport.light ? light + 'lux' :  'Sorry this API not supported'}
                </dd>
            </div>
            <div>
                <dt>
                    Level
                </dt>
                <dd>
                    {lightSupport.level ? level : 'Sorry this API not supported' }
                </dd>
            </div>
        </dl>
    </div>
}

export default Light