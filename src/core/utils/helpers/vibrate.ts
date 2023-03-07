export const vibrate = (ms: number) => {
    if (ms) navigator.vibrate(ms)
}