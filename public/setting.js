let navSwitchOn = true;

function switchNav(){
  if (navSwitchOn === true) {
    closeNav();
    navSwitchOn = false;
  }else{
    openNav();
    navSwitchOn = true;
  }
}

function openNav() {
    document.getElementsByClassName('navigation')[0].style.width = "250px";
    document.getElementsByClassName("main")[0].style.marginLeft = "250px";
}
function closeNav() {
    document.getElementsByClassName("navigation")[0].style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft = "0";
}

const button = document.querySelector("button");

button.addEventListener("click", function(event){
    event.preventDefault();
    button.innerHTML = "Saved";
})

function reminder(){
    
}