const button = document.getElementById("save");

//change save to saved (just word)
button.addEventListener("click", function(event){
    event.preventDefault();
    button.innerHTML = "Saved";
})