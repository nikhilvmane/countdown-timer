var end = new Date('02/27/2014 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('container').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = days + "<br>"+'Days ';
        document.getElementById('hours').innerHTML = hours +"<br>"+'Hrs ';
        document.getElementById('minutes').innerHTML = minutes +"<br>"+ 'Mins ';
        document.getElementById('seconds').innerHTML = seconds +"<br>"+ 'Secs';
    }

    timer = setInterval(showRemaining, 1000);