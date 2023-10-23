function padNumber(number, length) {
    let string = number.toString();
    let needs = length - string.length;

    let zeros = '';
    for (let i = 0; i < needs; i++) {
        zeros += '0';
    }

    return zeros + number.toString();
}