// mikolaj
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();


// f(x) loading all event listeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks events
  filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.forEach(function(task){
    // create li element
    const li = document.createElement('li');
    li.className = 'collection-item'; // class based on materialize
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>'
    // Append the link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
  });
}

// Add taks
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }
  // create li element
  const li = document.createElement('li')
  li.className = 'collection-item'; // class based on materialize
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))
  // create new link element
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>'
  // Append the link to li
  li.appendChild(link);
  // append link do li
  taskList.appendChild(li);
  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';

  // console.log(li);
  e.preventDefault();
} 

// Store Task in Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task - using icon/button
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove();

    // remove from local storage
    removeTaskFromLocalStorage
    (e.target.parentElement.parentElement)
    }
  }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear All Tasks using button
function clearTasks() {
  // 1st option
  // taskList.innerHTML = ''
  // 2nd option -> faster one
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  // Clear from local storage
  clearTasksFromLocalStorage();
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// filter task
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}