'use client'

import {Button} from '@mui/material'
import {vibrate} from '@core/utils/helpers/vibrate'

const Vibrate = () => {
    const milliSecondsData = [{name: '1 seconds', value: 1000}, {name: '5 seconds', value: 5000}]

    return <div>
        Vibrate for {milliSecondsData.map(s => {
        return <Button onClick={() => vibrate(s.value)} key={s.value}>{s.name}</Button>
    })}
    </div>
}

export default Vibrate