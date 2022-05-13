function openNav() {
    document.getElementByClassName("navigation").style.width = "250px";
    document.getElementByClassName("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementByClassName("navigation").style.width = "0";
    document.getElementByClassName("main").style.marginLeft = "0";
}