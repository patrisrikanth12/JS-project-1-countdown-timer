const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secsElement = document.getElementById("secs");


const newYear = "19 aug 2022";
const newYearsDate = new Date(newYear);

function countdown() {
    const currentDate = new Date();

    const totalSeconds = (Math.floor(newYearsDate - currentDate) / 1000).toFixed(0);

    const days = Math.floor((totalSeconds / 3600) / 24);

    const hours = Math.floor((totalSeconds / 3600) % 60);

    const minutes = Math.floor((totalSeconds / 60) % 60);

    const seconds = Math.floor(totalSeconds % 60);

    console.log(days + " " + hours + " " + minutes + " " + seconds);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

countdown();

setInterval(countdown,1000);
