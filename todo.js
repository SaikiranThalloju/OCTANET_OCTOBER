// Get elements by their IDs
var addTaskButton = document.getElementById("addTask");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var dateTime = document.getElementById("date-time");
var priority = document.getElementById("priority");

// Add task when the button is clicked
// addTaskButton.addEventListener("click", function() {
//   var taskText = taskInput.value;
//   var dateandtime = dateTime.value;
//   var priority3 = priority.value;
//   console.log(priority3);
//   if (taskText.trim() !== "") {
//     addTask(taskText,dateandtime,priority3);
//     taskInput.value = "";
//     dateTime.value = "";
//     priority.value = "High";
//   }
//   else{
//     alert("Enter the Task");
//   }
// });

addTaskButton.addEventListener("click", function() {
  var taskText = taskInput.value;
  var dateandtime = dateTime.value;
  var priority3 = priority.value;

  if (taskText.trim() !== "") {
    if (dateandtime !== "") {
      addTask(taskText, dateandtime, priority3);
      taskInput.value = "";
      dateTime.value = "";
      priority.value = "High";
    } else {
      alert("Enter the Date");
    }
  } else {
    alert("Enter the Task");
  }
});







// Add a new task to the list
function addTask(taskText,dateandtime,priority3) {
  var container = document.createElement("div");
  container.className = "container";

  var li = document.createElement("div");
  li.innerHTML = "Task Name : " + taskText;

  var li2 = document.createElement("div");
  li2.innerHTML = "DeadLine : "+dateandtime;

  var priority2 = document.createElement("div");
  priority2.innerHTML = "Priority : "+priority3;

  var removeButton = document.createElement("button");
  removeButton.className = "delete"
  removeButton.innerHTML = "Delete Task";
  removeButton.addEventListener("click", function() {
    container.remove();
  });
  container.appendChild(li);
  container.appendChild(li2);
  container.appendChild(priority2);
  container.appendChild(removeButton);

  taskList.appendChild(container);
}
