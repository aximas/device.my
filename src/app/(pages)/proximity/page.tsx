'use client'

import {useEffect, useState} from 'react'

const Proximity = () => {
    const [proximityDistance, setProximityDistance] = useState(0);
    const [detectionZone, setDetectionZone] = useState<boolean | null>(null)

    useEffect(() => {
        if ('ondeviceproximity' in window) {
            // Fired when object is in the detection zone
            window.addEventListener('deviceproximity', function (event) {
                // Object distance in centimeters
                if ('value' in event && typeof event.value === 'number') {
                    console.log(event.value + ' centimeters');
                    setProximityDistance(event.value)
                }
            });
        } else {
            console.log('deviceproximity not supported');
        }

        if ('ondeviceproximity' in window) {
            // Fired when object is in the detection zone
            window.addEventListener('userproximity', function (event) {
                if ('near' in event) {
                    if (event.near == true) {
                        console.log('Object is near');
                        setDetectionZone(true)
                    } else {
                        console.log('Object is far');
                        setDetectionZone(false)
                    }
                }
            });
        } else {
            console.log('userproximity not supported');
        }
    }, [])

    return <div>
        <h3>
            Proximity
        </h3>
        <dl>
            <div>
                <dt>
                    Distance:
                </dt>
                <dd>
                    {proximityDistance ? proximityDistance + 'centimeters' : 'Sorry this API not supported'}
                </dd>
            </div>
            <div>
                <dt>
                    Detection zone:
                </dt>
                <dd>
                    {detectionZone === null ? 'Sorry this API not supported' : detectionZone ? 'Object is near' : 'Object is far'}
                </dd>
            </div>
        </dl>
    </div>
}

export default Proximity