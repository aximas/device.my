'use client'

import {useState} from 'react'
import {Button} from '@mui/material'

const Vibrate = () => {
    const milliSecondsData = [{name: '1 seconds', value: 1000}, {name: '5 seconds', value: 5000}]

    const [ms, setMs] = useState(0);

    return <div>
        Vibrate for {milliSecondsData.map(s => {
        return <Button onClick={() => setMs(s.value)} key={s.value}>{s.name}</Button>
    })}
    </div>
}

export default Vibrate