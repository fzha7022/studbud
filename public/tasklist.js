//this is the task list that I created but not working (no errors)

var cardSection = document.getElementsByClassName("taskcard");
var taskName = document.getElementsByTagName("p");

function displayTask() {
    if (localStorage.length !== 0) {
      const reference = localStorage.getItem("taskList");
      taskList = JSON.parse(reference);
      createCard(taskList);
    }else {
      alert("You don't have any tasks right now :)");
    }
  }

function createCard(arr){
  for (let i = 0; i < arr.length; i++){
    let obj = {};
    obj = arr[i]
    taskName[0].innerHTML = obj.name;
  }
}

function deleteTask(){
  let delButton = document.getElementById("delete");
  delButton.addEventListener("click", function(){
    alert("delete");
  });
}