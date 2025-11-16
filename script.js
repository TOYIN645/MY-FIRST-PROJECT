let taskValue = document.getElementById('task');
let taskList = document.getElementById('tasklist');


function addTask() {
    // if (taskValue.value === '') {
    //     alert('Please enter a task');
    //     return;
    // }
    let li = document.createElement('li');
    li.innerHTML = taskName.value;
    taskList.appendChild(li);
    saveTask();

    taskName.value = '';

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTask();
    }) 
    
}

function saveTask() {
    localStorage.setItem('tasks',taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem('tasks');
    let allItems = taskList.querySelectorAll("li");
    allItems.forEach(li => {
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
            saveTask();
        });
    });
}
showTask();