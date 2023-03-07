'use client'

import {useEffect, useState} from 'react'

const Page = () => {
    const [acceleration, setAcceleration] = useState<Record<string, number | null> | null>(null)
    const [accelerationIncludingGravity, setAccelerationIncludingGravity] = useState<Record<string, number | null> | null>(null)
    const [rotationRate, setRotationRate] = useState<Record<string, number | null> | null>(null)

    useEffect(() => {
        const devicemotionEvent = (eventData: DeviceMotionEvent) => {
            // Acceleration
            if (eventData.acceleration) {
                const {x, y, z} = eventData.acceleration;
                setAcceleration({x, y, z})
            }


            // Acceleration including gravity
            if (eventData.accelerationIncludingGravity) {
                const {x, y, z} = eventData.accelerationIncludingGravity;
                setAccelerationIncludingGravity({x, y, z})
            }


            // Rotation rate
            if (eventData.rotationRate) {
                const {alpha, beta, gamma} = eventData.rotationRate;
                setRotationRate({alpha, beta, gamma})
            }
        }

        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', devicemotionEvent, false);
        }

        return () => {
            window.removeEventListener('devicemotion', devicemotionEvent, false);
        }
    }, [])

    return <dl>
        <div>
            <dt>Acceleration</dt>
            {acceleration && (<dd><p>x: {acceleration.x}</p><p>y: {acceleration.y}</p><p>z: {acceleration.z}</p></dd>)}
        </div>

        <div>
            <dt>Acceleration including gravity</dt>
            {accelerationIncludingGravity && (<dd><p>x: {accelerationIncludingGravity.x}</p>
                <p>y: {accelerationIncludingGravity.y}</p><p>z: {accelerationIncludingGravity.z}</p></dd>)}
        </div>

        <div>
            <dt>Rotation rate</dt>
            {rotationRate && (<dd><p>alpha: {rotationRate.alpha}</p><p>beta: {rotationRate.beta}</p>
                <p>gamma: {rotationRate.gamma}</p></dd>)}
        </div>
    </dl>
}

export default Page