function humanReadable(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const timeFormat = (num) => String(num).padStart(2, "0");

    return `${timeFormat(hrs)}:${timeFormat(mins)}:${timeFormat(secs)}`;
}