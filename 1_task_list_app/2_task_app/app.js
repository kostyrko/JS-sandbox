// add variables
const addTaskBtn = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");
const removeAllBtn = document.getElementById("removeFinishedTasksButton");
const taskCounter = document.getElementById("counter");

// setup function
function setup() {
  addTaskBtn.addEventListener("click", addTask);
  removeAllBtn.addEventListener("click", removeAllCompleted);
  taskCounterFunc();
}
// call setup func
setup();


function taskCounterFunc() {
  taskCounter.innerHTML = taskList.childElementCount - taskList.querySelectorAll(".completed").length
}

function addTask() {
  let inputValLen = taskInput.value.length;
  let priorityVal = priorityInput.value;
  let index
  if (inputValLen > 4 && inputValLen < 100 
    && priorityVal > 0 && priorityVal < 11) {

    const allTasks = Array.from(document.querySelectorAll('li'));
    const newTask = createTask();
    
    // find element to put new before if priority num is bigger
    const element = allTasks.find(e => 
      Number(newTask.dataset.priority) > Number(e.dataset.priority))
    

    taskList.insertBefore(newTask, element)

    taskInput.value = "";
    priorityInput.value = "";
    taskInput.style.color = "";
    priorityInput.style.color = "";

  } else {
    if (inputValLen < 5 || inputValLen > 100) {
      taskInput.style.color = "red";
    } else {
      priorityInput.style.color = "red";
    }
    alert('1) Task message should be from 5 to 100 characters,\n2) priority should be set from 1 to 10')
  }
  taskCounterFunc();
}

function createTask() {
  const liElem = document.createElement("li");

  const content = document.createElement("h1");
  content.innerText = taskInput.value;

  const priority = document.createElement("h5");
  priority.innerText = `Priority ${priorityInput.value}`;
  liElem.dataset.priority = priorityInput.value

  const delBtn = document.createElement("button");
  delBtn.className = "fa fa-remove";
  delBtn.addEventListener("click", removeTask);

  const doneBtn = document.createElement("button");
  doneBtn.className = "fa fa-check";
  // doneBtn.innerText = "Completed";
  doneBtn.addEventListener("click", completedTask);

  const editBtn = document.createElement("button");
  editBtn.className = "fa fa-edit";
  editBtn.addEventListener("click", editTask);

  const arrElems = [content, priority, delBtn, doneBtn, editBtn];

  arrElems.forEach((e) => liElem.appendChild(e));

  return liElem;
}

function removeTask() {
  taskList.removeChild(this.parentElement);
  taskCounterFunc();
}

function completedTask() {
  // console.log(this.dataset.counter);
  // convert string to num
  let counter = Number(this.dataset.counter);

  if (!counter || counter === 0) {
    this.dataset.counter = 1;
    this.parentElement.classList.add("completed");
    this.classList.add("fa-mail-reply");
    this.classList.remove('fa-checked');
    // this.innerText = "Uncompleted";
  } else {
    this.dataset.counter = 0;
    this.classList.remove("fa-mail-reply");
    this.classList.add('fa-checked');
    this.parentElement.classList.remove("completed");
    // this.innerText = "Completed";
  }
  taskCounterFunc();
}

function editTask() {
  console.log('editTask')
}

function removeAllCompleted() {
  let arrCompleted = document.querySelectorAll(".completed");
  arrCompleted.forEach((e) => {
    taskList.removeChild(e);
  });
}



