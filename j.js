let time = document.getElementById('time');
const date = document.getElementById('date');
let m = document.getElementById('m')
setInterval( ()=> {
    let now = new Date();
    let seconds = now.getSeconds();
    let minuts = now.getMinutes();
    let hours = now.getHours()
    if (hours <= 12) {
        m.innerHTML = 'AM'
    }
    else {
        m.innerHTML = 'PM'
    }
    hours = hours % 12

    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (minuts < 10) {
        minuts = '0' + minuts
    }
    if (hours < 10) {
        hours = '0' + hours
    }

    let timestring = `${hours}:${minuts}:${seconds}  `
    time.innerHTML = timestring

    let weekDay = now.toLocaleDateString('en-ES', { weekday: 'long' });
    let monthDay = now.toLocaleDateString('en-ES', { day: 'numeric' });
    let year = now.toLocaleDateString('en-ES', { year: 'numeric' });
    let monthName = now.toLocaleDateString('en-ES', { month: 'long' });
    let dateString = `${weekDay} , ${monthDay}  ${monthName} ,${year}`
    date.innerHTML = dateString

}, 1000)








