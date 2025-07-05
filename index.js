let clockHour, clockMinute, clockSecond, clockMillisecond;
let clockDate, clockTimezone;
let container;
let nowFullscreen = false;

let previousHours, previousMinutes, previousSeconds;
let previousYear, previousMonth, previousDay, previousWeekday;

document.addEventListener('DOMContentLoaded', () => {
    // -- clock
    clockHour = document.querySelector("#clock-hour");
    clockMinute = document.querySelector("#clock-minute");
    clockSecond = document.querySelector("#clock-second");
    clockMillisecond = document.querySelector("#clock-millisecond");
    clockDate = document.querySelector("#clock-date");
    clockTimezone = document.querySelector("#clock-timezone");

    let zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'long'}).split(/ [AP]M /)[1];
    clockTimezone.innerText = zone;

    setInterval(() => {
        let time = new Date();

        // -- clock
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let milliseconds = Math.floor(time.getMilliseconds() / 1000 * 100);
        if (previousHours != hours) {
            clockHour.innerText = hours;
        }
        if (previousMinutes != minutes) {
            clockMinute.innerText = padNumber(minutes, 2);
        }
        if (previousSeconds != seconds) {
            clockSecond.innerText = padNumber(seconds, 2);
        }
        clockMillisecond.innerText = padNumber(milliseconds, 2);

        // -- date and timezone
        let year = time.getFullYear();
        let month = time.getMonth();
        let day = time.getDate();
        let weekday = weekdayString(time.getDay());
        if (previousDay != day) {
            clockDate.innerText = `${weekday}, ${padNumber(year, 4)}-${padNumber(month+1, 2)}-${padNumber(day, 2)}`;
        }

        // -- theme
        if (previousHours != hours) {
            if (hours < 6 || hours >= 18) {
                document.body.classList.remove("light");
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
                document.body.classList.add("light");
            }
        }

        previousHours = hours;
        previousMinutes = minutes;
        previousSeconds = seconds;
        previousYear = year;
        previousMonth = month;
        previousDay = day;
        previousWeekday = weekday;
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