'use client';

import {useEffect, useState} from 'react'
import {Timer} from '@//components/Timer/Timer'

const Battery = () => {
    const [isCharging, setIsCharging] = useState(false)
    const [level, setLevel] = useState<number | null>(null)
    const [chargingTime, setChargingTime] = useState<number | null>(null)
    const [dischargingTime, setDischargingTime] = useState<number | null>(null)

    useEffect(() => {
        let battery;
        if ('battery' in navigator) battery = navigator.battery

        function logBattery(battery: any) {
            function updateAllBatteryInfo() {
                updateChargeInfo();
                updateLevelInfo();
                updateChargingInfo();
                updateDischargingInfo();
            }

            updateAllBatteryInfo();

            battery.addEventListener('chargingchange', () => {
                updateChargeInfo();
            });

            function updateChargeInfo() {
                setIsCharging(battery.charging)
            }

            battery.addEventListener('levelchange', () => {
                updateLevelInfo();
            });

            function updateLevelInfo() {
                setLevel(battery.level)
            }

            battery.addEventListener('chargingtimechange', () => {
                updateChargingInfo();
            });

            function updateChargingInfo() {
                setChargingTime(battery.chargingTime)
            }

            battery.addEventListener('dischargingtimechange', () => {
                updateDischargingInfo();
            });

            function updateDischargingInfo() {
                setDischargingTime(battery.dischargingTime)
            }

            return () => {
                battery.removeListener('chargingchange', updateChargeInfo);
                battery.removeListener('levelchange', updateLevelInfo);
                battery.removeListener('chargingtimechange', updateChargingInfo);
                battery.removeListener('dischargingtimechange', updateDischargingInfo);
            }
        }

        if ('getBattery' in navigator) {
            if (typeof navigator.getBattery === 'function') navigator.getBattery().then(logBattery);
        } else if (battery) {
            logBattery(battery);
        }
    }, [])

    return <div>
        <h3>Battery Info</h3>
        <dl>
            <div>
                <dt>Your device:</dt>
                <dd>{isCharging || 'not'} charging</dd>
            </div>
            <div>
                <dt>Battery level:</dt>
                <dd>{level && level * 100} %</dd>
            </div>
            <div>
                <dt>Charging time:</dt>
                <dd>{chargingTime && isFinite(chargingTime) ? <Timer sec={chargingTime}/> : 'not access'}</dd>
            </div>
            <div>
                <dt>Discharging device:</dt>
                <dd>{dischargingTime && isFinite(dischargingTime) ? <Timer sec={dischargingTime}/> : 'not access'}</dd>
            </div>
        </dl>
    </div>
}

export default Battery