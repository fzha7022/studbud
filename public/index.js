//const navSwitch = document.getElementById("switch");

/* navSwitch.addEventListener("click", function switchNav(){
    let navSwitchOn = True;
    if (navSwitchOn === True) {
      closeNav();
      navSwitchOn = False;
    }else{
      openNav();
      navSwitchOn = True;
    }
}) */

function switchNav(){
  let navSwitchOn = True;
  if (navSwitchOn === True) {
    closeNav();
    navSwitchOn = False;
  }else{
    openNav();
    navSwitchOn = True;
  }
}

function openNav() {
    document.getElementByClassName("navigation").style.width = "250px";
    document.getElementByClassName("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementByClassName("navigation").style.width = "0";
    document.getElementByClassName("main").style.marginLeft = "0";
}