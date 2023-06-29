let time = document.getElementById('time');
const date = document.getElementById('date');
let m = document.getElementById('m')
let segund = document.querySelector('.segund')
let minute = document.querySelector('.minute');
let hora = document.querySelector('.houre')
setInterval( ()=> {
    let now = new Date();
    let seconds = now.getSeconds();
    let minuts = now.getMinutes();
    let hours = now.getHours()
     hours = hours % 12
    if (hours >= 12) {
       
        m.innerHTML = 'AM'
    }
    else {
        m.innerHTML = 'PM'
    }
    //testif
    if(m.innerHTML == 'PM' && hours == '00'){
        hours = 12
    }

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
    
    let segundMove = seconds * 6
    let minuteMove = minuts * 6 
    let horaMove = (hours * 30) + (minuteMove / 12) 
    segund.style.transform = `rotatez(${segundMove}deg)`
    minute.style.transform = `rotatez(${minuteMove}deg)`
    hora.style.transform = `rotatez(${horaMove}deg)`

}, 1000)

console.log(segund)









