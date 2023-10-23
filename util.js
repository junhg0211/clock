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
    month += 1;

    if (month == 1) {
        return "January";
    }
    if (month == 2) {
        return "February";
    }
    if (month == 3) {
        return "March";
    }
    if (month == 4) {
        return "April";
    }
    if (month == 5) {
        return "May";
    }
    if (month == 6) {
        return "June";
    }
    if (month == 7) {
        return "July";
    }
    if (month == 8) {
        return "August";
    }
    if (month == 9) {
        return "September";
    }
    if (month == 10) {
        return "October";
    }
    if (month == 11) {
        return "November";
    }
    if (month == 12) {
        return "December";
    }
}