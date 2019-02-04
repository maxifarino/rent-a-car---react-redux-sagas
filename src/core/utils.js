import moment from 'moment';

const defaultFormat = () => {
    return 'YYYY/MM/DD HH:mm';
}
export const formatDateWithTime = (date, hour, minute, format = undefined) => {
    const formatDateTime = format == undefined ? defaultFormat() : format;
    return moment(date).hour(hour).minute(minute).format(formatDateTime);
}

export const getHour = (date) => {
    if (date === null) return;
    let hour = date.split(' ')[1].split(':')[0];
    hour = hour.startsWith('00') || hour.startsWith('0') ? hour.slice(1) : hour;
    return hour;
}

export const getminutes = (date) => {
    if (date === null) return;
    let minutes = date.split(' ')[1].split(':')[1];
    minutes = minutes.startsWith('00') || minutes.startsWith('0') ? minutes.slice(1) : minutes;
    return minutes;
}