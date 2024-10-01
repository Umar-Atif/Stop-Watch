var seconds = document.querySelector(".seconds");
var minutes = document.querySelector(".minutes");
var hours = document.querySelector(".hours");
var time;

function start(){
    time = setInterval(function(){
        seconds.innerHTML++
        if (seconds.innerHTML == 60){
            seconds.innerHTML = "00"
            minutes.innerHTML++
        }

        if (minutes.innerHTML == 60){
            minutes.innerHTML = "00"
            hours.innerHTML++
        }
}, 1000);
}

function stop(){
    clearInterval(time);
}

function reset(){
    seconds.innerHTML = "00"
    minutes.innerHTML = "00"
    hours.innerHTML = "00"
    clearInterval(time)
}