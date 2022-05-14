var cardSection = document.getElementsByClassName("flip-card");

function displayTask() {
    if (localStorage.length !== 0) {
      const reference = localStorage.getItem("taskList");
      taskList = JSON.parse(reference);
      for (let i=0; i<taskList.length; i++){
        let taskName = taskList[i].name;
        let card = document.createElement("div");
        card.className = "flip-card-inner";
        card.innerHTML = `<div class="flip-card-front"><p>` + taskName +
            `</p></div>
            <div class="flip-card-back">
              <button id="taskedit"><a href= "taskadd.html">Edit</a></button><br>
              <button id="delete" onclick="deleteTask()">Delete</button>
            </div>`
        cardSection[0].appendChild(card);
      }
    }
  }
function deleteTask(){
  let delButton = document.getElementById("delete");
  delButton.addEventListener("click", function(){
    alert("delete");
  });
}