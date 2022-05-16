var cardSection = document.getElementsByClassName("flip-card");

function displayTask() {
    if (localStorage.length !== 0) {
      const reference = localStorage.getItem("taskList");
      taskList = JSON.parse(reference);
      taskList.forEach(createCard);
    }else {
      alert("You don't have any tasks right now :)");
    }
  }

function createCard(obj, index, arr){
  arr[index] = obj;
  let taskName = obj.name;
  let card = document.createElement("div");
  card.className = "flip-card-inner";
  card.id = index;
  card.innerHTML = `<div class="flip-card-front"><p>` + taskName +
      `</p></div>
      <div class="flip-card-back">
        <button id="taskedit"><a href= "taskadd.html">Edit</a></button><br>
        <button id="delete" onclick="deleteTask()">Delete</button>
      </div>`
  cardSection[0].appendChild(card);
}

function deleteTask(){
  let delButton = document.getElementById("delete");
  delButton.addEventListener("click", function(){
    alert("delete");
  });
}