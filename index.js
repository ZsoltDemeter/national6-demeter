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

function renderTask(task){
    
}