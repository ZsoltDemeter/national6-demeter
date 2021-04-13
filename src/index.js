import { createToDoItemList } from "./components/item";
import { getToDoData, updateUserData, createUserData } from "./utils/api";

console.log("To Do App");

const inputTask = document.getElementById("task-name");

let todo = [];
let userExist = false;

getToDoData((data) => {
  console.log(data);

  if (data.id === "zsdemeter") {
    todo = data.todo;
    userExist = true;
    createToDoItemList(todo);
  }
});

document.getElementById("add-task-button").addEventListener("click", () => {
  if (userExist) {
    // update user data
    console.log("add task to todo list");
    const itemValue = inputTask.value;
    if (itemValue) {
      console.log(todo);

      todo.push({
        checked: false,
        item: itemValue,
      });

      updateUserData(todo, () => {
        getToDoData((data) => {
          console.log(data);

          todo = data.todo;

          createToDoItemList(todo);
        });
      });
    }
  } else {
    // add user to server
    const itemValue = inputTask.value;
    if (itemValue) {
      createUserData(itemValue, () => {
        getToDoData((data) => {
          console.log(data);
          todo = data.todo;
          createToDoItemList(todo);
        });
      });
    }
  }

  inputTask.value = "";
});
