export const vibrate = (ms: number) => {
    const getVibrateAPI = navigator.vibrate;
    if (ms) getVibrateAPI(ms)
}