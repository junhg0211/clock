let clockHour, clockMinute, clockSecond, clockMillisecond;
let clockDate, clockTimezone;
let container;
let nowFullscreen = false;

document.addEventListener('DOMContentLoaded', () => {
    // -- clock
    clockHour = document.querySelector("#clock-hour");
    clockMinute = document.querySelector("#clock-minute");
    clockSecond = document.querySelector("#clock-second");
    clockMillisecond = document.querySelector("#clock-millisecond");
    clockDate = document.querySelector("#clock-date");
    clockTimezone = document.querySelector("#clock-timezone");

    setInterval(() => {
        let time = new Date();

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let milliseconds = Math.floor(time.getMilliseconds() / 1000 * 60);
        clockHour.innerText = hours;
        clockMinute.innerText = padNumber(minutes, 2);
        clockSecond.innerText = padNumber(seconds, 2);
        clockMillisecond.innerText = padNumber(milliseconds, 2);

        let year = time.getFullYear();
        let month = time.getMonth();
        let day = time.getDate();
        clockDate.innerText = `${orderString(day)} ${monthString(month)}, ${year}`

        var zone = time.toLocaleTimeString('en-us',{timeZoneName:'long'}).split(/ [AP]M /)[1];
        clockTimezone.innerText = zone;
    }, 1000 / 60);

    // -- fullscreen
    container = document.querySelector(".container");
    container.addEventListener("click", () => {
        if (nowFullscreen) {
            document.exitFullscreen();
        } else {
            fullscreen();
        }

        nowFullscreen = !nowFullscreen;
    });
});