//try to control the widget
let player = document.getElementById("player");
player.style.display = "none";
function openPlayer(){
  if (player.style.display === "none") {
    player.style.display = "block";
  } else {
    player.style.display = "none";
  }
}

//stopwatch
let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [seconds,minutes,hours] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00';
});

function displayTimer(){
  seconds+=1;
  if(seconds == 60){
    seconds = 0;
    minutes++;
    if(minutes == 60){
      minutes = 0;
      hours++;
    }
  }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;

 timerRef.innerHTML = `${h} : ${m} : ${s}`;
}

//switching
let stopwatch = document.getElementById("stopwatch");
let pomodoro = document.getElementById("pomodoro");
stopwatch.style.display = "block";
pomodoro.style.display = "none";
function switchTimer(){
  if (stopwatch.style.display === "none") {
    stopwatch.style.display = "block";
  } else {
    stopwatch.style.display = "none";
  }
  if (pomodoro.style.display === "none") {
    pomodoro.style.display = "block";
  } else {
    pomodoro.style.display = "none";
  }
}

//countdown timer
// Set the date we're counting down to
var countDownDate = 25;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = 0;

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="pomodoro"
  document.getElementById("pomodoro").innerHTML = minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("pomodoro").innerHTML = "EXPIRED";
  }
}, 1000);