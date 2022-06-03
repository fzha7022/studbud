//toggle between calendar and quadrant
let cal = document.getElementById("calendar");
let qua = document.getElementById("quadrant");
//let switchView = document.getElementById("switchView");
cal.style.display = "block";
qua.style.display = "none";
function switchView() {
  if (cal.style.display === "none") {
    cal.style.display = "block";
  } else {
    cal.style.display = "none";
    //switchView.innerHTML = "Calendar";
  }
  if (qua.style.display === "none") {
    qua.style.display = "block";
    //switchView.innerHTML = "Calendar";
  } else {
    qua.style.display = "none";

  }
}

//drawing on canvas
var canvas = document.getElementById("canvas");
var x = canvas.getContext("2d");//x-axis
x.moveTo(0, 400);
x.lineTo(800, 400);
x.stroke();
var y = canvas.getContext("2d");//y-axis
y.moveTo(400, 0);
y.lineTo(400, 800);
y.stroke();

//the labels of the quadrant
var u = canvas.getContext("2d");
var notU = canvas.getContext("2d");
var im = canvas.getContext("2d");
var notIm = canvas.getContext("2d");
u.font = "30px Comic Sans MS";
u.textAlign = "center";
u.fillText("Urgent", 750, 430);
notU.fillText("Not Urgent", 80, 430);
im.fillText("Important", 480, 50);
notIm.fillText("Unimportant", 500, 780);
