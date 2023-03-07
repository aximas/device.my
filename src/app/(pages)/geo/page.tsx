'use client'

import styles from '@/app/page.module.css'
import {useEffect, useState} from 'react'

const Geo = () => {
    const [geoData, setGeoData] = useState<{ longitude: number, latitude: number } | null>(null)


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

    }, [])

    return <section className={styles.geoData}>
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
}

export default Geo