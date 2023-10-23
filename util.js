function padNumber(number, length) {
    let string = number.toString();
    let needs = length - string.length;

    let zeros = '';
    for (let i = 0; i < needs; i++) {
        zeros += '0';
    }

    return zeros + number.toString();
}

function fullscreen() {
    let el = document.documentElement,
        rfs = el.requestFullscreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    rfs.call(el);
}

function orderString(number) {
    if (number == 11 || number == 12 || number == 13) {
        return `${number}th`;
    }

    if (number % 10 == 1) {
        return `${number}st`;
    }
    if (number % 10 == 2) {
        return `${number}nd`;
    }
    if (number % 10 == 3) {
        return `${number}rd`;
    }

    return `${number}th`;
}

function monthString(month) {
    return [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ][month];
}

function weekdayString(day) {
    return [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ][day];
}