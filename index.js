console.log("To-Do app homework.");
getData();

document.getElementById("post").addEventListener("click",postData);
/////////////////////////////////////////////////////////////////////////
function postData(){

    const payload = {
        id: "zsdemeter",
        todo:[
          {
            checked: false,
            item: inputField
          },
       ]
    }

    fetch('https://simple-json-server-scit.herokuapp.com/todo', {
  method: "POST",
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
}).then(getData);
}

//////////////////////////////////////////////////////////////////////////
function putData(){
    const payload = {
       
    }

    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`, {
  method: "PUT",
  headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(payload)
}).then(getData);
}

function getData(){
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`).then((r) => r.json()).then(renderToDoList);
}
///////////////////////////////////////////////////////////////////////////

function renderToDoList(toDoList){
    for(const task of toDoList){
        console.log(task);
        renderTask(task);
    }
}

const inputField = document.getElementById("add-new-item").value;
const taskListHtml = document.querySelector(".task-list");

function renderTask(taskData){
    const task = document.createElement("div");
    task.classList.add("task-class");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const taskName = document.createElement("h4");
    const removeTaskButton = document.createElement("img");
    removeTaskButton.classList.add("remove-class");
    removeTaskButton.src = "delete.svg";

    taskListHtml.appendChild(task);
    task.appendChild(checkBox);
    task.appendChild(taskName);
    task.appendChild(removeTaskButton);

    removeTaskButton.addEventListener("click",putData);

    taskName.innerText = taskData.item;
    checkBox.checked = taskData.checked;
}
