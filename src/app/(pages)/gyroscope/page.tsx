'use client'
import {useEffect, useState} from 'react'
import styles from '@/app/page.module.css'


const Gyroscope = () => {
    const [gyroData, setGyroData] = useState<{ gamma: string, beta: string, alpha: string } | null>(null)

    useEffect(() => {
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', deviceorientation, false);
        }

        function deviceorientation(eventData: any) {
            setGyroData({beta: eventData.beta, alpha: eventData.alpha, gamma: eventData.gamma})
        }

        return () => {
            window.removeEventListener('deviceorientation', deviceorientation)
        }
    }, [])

    return <section className={styles.gyroscopeData}>
        <h3>Gyroscope and Compass data</h3>
        {gyroData && (<>
            <p>Gamma: {gyroData.gamma}</p>
            <p>Alpha: {gyroData.alpha}</p>
            <p>Beta: {gyroData.beta}</p>
        </>)}
    </section>
}

export default Gyroscope