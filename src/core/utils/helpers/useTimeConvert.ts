export const timeConvert = (seconds: number) => {
	if (!seconds) return { days: 0, hours: 0, minutes: 0 };
	const days = Math.floor(seconds / (3600 * 24));
	seconds -= days * 3600 * 24;
	const hours = Math.floor(seconds / 3600);
	seconds -= hours * 3600;
	const minutes = Math.floor(seconds / 60);
	seconds -= Math.floor(minutes * 60);
	return { days, hours, minutes, seconds };
};
