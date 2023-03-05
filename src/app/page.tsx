'use client'

import {Inter} from 'next/font/google'
import styles from './page.module.css'
import {useEffect, useState} from 'react'
import {func} from 'prop-types'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [geoData, setGeoData] = useState<{ longitude: number, latitude: number } | null>(null)
    const [gyroData, setGyroData] = useState<{ gamma: string, beta: string, alpha: string } | null>(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
        }

        function success(position: GeolocationPosition) {
            console.log('Latitude: ' + position.coords.latitude);
            console.log('Longitude: ' + position.coords.longitude);
            setGeoData({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        }


        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', deviceorientation, false);
        }

        function deviceorientation(eventData: any) {
            console.log(eventData.gamma);
            console.log(eventData.beta);
            console.log(eventData.alpha);
            setGyroData({beta: eventData.beta, alpha: eventData.alpha, gamma: eventData.gamma})
        }


        return () => {
            window.removeEventListener('deviceorientation', deviceorientation)
        }
    }, [])

    return (
        <main className={styles.main}>
            Main
            <section className={styles.geoData}>
                <h3>Geo data</h3>
                {geoData && (<>
                    <p>
                        longitude: {geoData.longitude}
                    </p>
                    <p>
                        latitude: {geoData.latitude}
                    </p>
                </>)}
            </section>
            <section className={styles.gyroscopeData}>
                <h3>Gyroscope and Compass data</h3>
                {gyroData && (<>
                    <p>Gamma: {gyroData.gamma}</p>
                    <p>Alpha: {gyroData.alpha}</p>
                    <p>Beta: {gyroData.beta}</p>
                </>)}
            </section>
        </main>
    )
}
