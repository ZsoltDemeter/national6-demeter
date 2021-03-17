console.log("To-Do app homework.");

function getData(){
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`).then((r) => r.json()).then(renderToDoList);
}

function renderToDoList(toDoList){
    for(const task of toDoList){
        console.log(task);
        renderTask(task);
    }
}

const taskListHtml = document.querySelector(".task-list");

function renderTask(taskData){
    const task = document.createElement("div");
    task.classList.add("task-class");
    const checkBox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskName = document.createElement("h4");
    const removeTaskButton = document.createElement("div");

    taskListHtml.appendChild(task);
    task.appendChild(checkBox);
    task.appendChild(taskName);
    task.appendChild(removeTaskButton);
}
