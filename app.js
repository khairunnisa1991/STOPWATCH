var hours = 0
var mintues = 0
var seconds = 0
var miliseconds = 0
var running = false

var milisec = document.getElementById("milisec")
var sec = document.getElementById("sec")
var min = document.getElementById("min")
var hr = document.getElementById("hr")

function start() {
    running = true
    stopwatch()
}

function stopwatch() {
    if (running) {
        miliseconds = miliseconds + 10
        milisec.innerHTML = miliseconds
        if (miliseconds >= 1000) {
            miliseconds = 0
            seconds++
            sec.innerHTML = seconds
            if (seconds > 60) {
                seconds = 0
                mintues++
                min.innerHTML = mintues
                if (mintues > 60) {
                    mintues = 0
                    hours++
                    sec.innerHTML = seconds
                    if (hours > 10) {
                        hours = 0
                        hr.innerHTML = hours
                    }

                }

            }

        }

        setTimeout(stopwatch, 10)
    }
}

function stop() {
    running = false
}
function reset() {
    running = false
    hours = 0
    mintues = 0
    seconds = 0
    miliseconds = 0
    

milisec.innerHTML = miliseconds
sec.innerHTML = seconds
min.innerHTML = mintues
hr.innerHTML = hours

}