function digitalClock() {
    var date = new Date();
    var hours = paddingZero(date.getHours() + ''); // add a string after number convert the value from number to string

    var minute = paddingZero(date.getMinutes() + '');
    var seconds = paddingZero(date.getSeconds() + '');
    
    var day = date.getDay();
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var clock = weekDays[day]+" "+ hours+":"+minute+":"+seconds;
    console.log(clock);
    document.getElementById('clock').innerHTML = clock;
    
}

function paddingZero(time) {
    if (time.length <2) {
        return '0' + time;
    }
    return time;
}

digitalClock()

setInterval(digitalClock, 1000); //setInterval is a build-in function that calls the function every 1000ms