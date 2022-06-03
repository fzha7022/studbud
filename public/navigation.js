//open and close navigation
let navSwitchOn = true;//open first
let navSwitch = document.getElementById("switch");//the button

//when click on the function I didn't make
function warning(){
  alert("Unfortunately, this section is down for a bit of maintenance right now. Sorry for the inconvenience :(")
}

//open if close, close if open
function switchNav(){
  if (navSwitchOn === true) {
    closeNav();
    navSwitchOn = false;
    navSwitch.innerHTML = "ope>";
  }else{
    openNav();
    navSwitchOn = true;
    navSwitch.innerHTML = "close<";
  }
}
//push the content
function openNav() {
    document.getElementsByClassName('navigation')[0].style.width = "250px";
    document.getElementsByClassName("main")[0].style.marginLeft = "250px";
}
function closeNav() {
    document.getElementsByClassName("navigation")[0].style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft = "0";
}