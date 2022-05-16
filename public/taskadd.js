const button = document.getElementById("taskSave");
var taskList = [];

var taskInput = document.getElementById("taskInput");
var groupInput = document.getElementById("groupInput");

var dodInput = document.getElementById("dodInput");
var timeInput = document.getElementById("timeInput");
var dateInput = document.getElementById("dateInput");
var descriptionInput = document.getElementById("descriptionInput");
var priorityInput = document.getElementById("priorityInput");
var estimateTimeInput = document.getElementById("estimateTimeInput");
var taskCompleteInput = document.getElementById("taskCompleteInput");

function groupCreate(){
    if (groupInput.options[groupInput.selectedIndex].value === "create"){
        let groupNew = document.createElement("input");
        groupNew.type = "text";
        groupInput.appendChild(groupNew);
    }
}

button.addEventListener("click", function(event){
    event.preventDefault();
    let name = taskInput.value;
    let group = groupInput.options[groupInput.selectedIndex].value;
    let dod = dodInput.options[dodInput.selectedIndex].value;
    let time = timeInput.value;
    let date = dateInput.value;
    let description = descriptionInput.value;
    let priority = priorityInput.options[priorityInput.selectedIndex].value;
    let estimateTime = estimateTimeInput.value;
    let taskComplete = taskCompleteInput.options[taskCompleteInput.selectedIndex].value;
    addTask(name, group, dod, time, date, description, priority, estimateTime, taskComplete);
    button.innerHTML = "Saved";
   //button.attributes = "disabled";
})

function addTask(name, group, dod, time, date, description, priority, estimateTime, taskComplete){
    let task = {
        name,
        group,
        dod,
        time,
        date,
        description,
        priority,
        estimateTime,
        taskComplete
    };
    taskList.push(task);
    localStorage.setItem("taskList", JSON.stringify({taskList}));
}