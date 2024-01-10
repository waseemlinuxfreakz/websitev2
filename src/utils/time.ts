export const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

export const getTimeLength = (start: string, end: string) => {
    const s: number = new Date(start).getTime();
    const e: number = new Date(end).getTime();
    const elapsed: number = e - s;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    return {days, hours, minutes, seconds}
}

export function unpackDateTime(dt: {days:number, hours: number, minutes: number, seconds: number}): string {
    if(dt.days) return `${dt.days} day${dt.days > 1 ? 's' : ''}`;
    if(dt.hours) return `${dt.hours} hour${dt.hours > 1 ? 's' : ''}`;
    if(dt.minutes) return `${dt.minutes} minute${dt.minutes > 1 ? 's' : ''}`;
    if(dt.seconds) return `${dt.seconds} second${dt.seconds > 1 ? 's' : ''}`;
    return '';
}