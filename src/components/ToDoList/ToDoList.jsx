import { Component } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export class ToDoList extends Component {
  state = {
    toDoList: [],
    inputValue: "",
    shouldCreateUser: false,
  };

  removeItem = (itemText) => {
    this.setState({
      toDoList: this.state.toDoList.filter(
        (itemData) => itemData.item !== itemText
      ),
    });
  };

  componentDidMount() {
    console.log("ToDoList has finished mounting");

    fetch("https://simple-json-server-scit.herokuapp.com/todo/zsdemeter")
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        if (json.todo) {
          this.setState({ toDoList: json.todo });
        } else {
          this.setState({ shouldCreateUser: true });
        }
      });
  }

  componentWillUnmount() {
    console.log("ToDoList will be unmounted");
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddItem = () => {
    this.setState({
      toDoList: [
        { checked: false, item: this.state.inputValue },
        ...this.state.toDoList,
      ],
      inputValue: "",
    });

    const payload = {
      id: "sradusi",
      todo: [
        { checked: false, item: this.state.inputValue },
        ...this.state.toDoList,
      ],
    };

    if (this.state.shouldCreateUser) {
      fetch("https://simple-json-server-scit.herokuapp.com/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      this.setState({ shouldCreateUser: false });
    } else {
      fetch("https://simple-json-server-scit.herokuapp.com/todo/zsdemeter", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }
  };

  render() {
    console.log("ToDoList - render");
    console.log(this.state);

    return (
      <div className="to-do-list">
        {this.state.toDoList.map((itemData, index) => (
          <ToDoItem
            key={index + itemData.item}
            checkValue={itemData.checked}
            label={itemData.item}
            removeItem={this.removeItem}
          />
        ))}

        <div className="add-item">
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddItem}>+</button>
        </div>
      </div>
    );
  }
}
