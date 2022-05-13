var cardSection = document.getElementsByClassName("flip-card");

function displayTask() {
    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++){
            taskName = localStorage.key(i);
            let card = document.createElement("div");
            card.className = "flip-card-inner";
            card.innerHTML = `<div class="flip-card-front">
            </div>
            <div class="flip-card-back">
              <button id="taskedit"><a href= "taskedit.html">Edit</a></button><br>
              <button id="delete" onclick="deleteTask()">Delete</button>
            </div>`
            cardSection.appendChild(card);
        }
    }
  }
function deleteTask(){
  let delButton = document.getElementById("delete");
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    item.remove();})
}

/* function renderTask(task){
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);

    delButton.addEventListener("click", function(event){
        event.preventDefault();
        item.remove();
    })
} */