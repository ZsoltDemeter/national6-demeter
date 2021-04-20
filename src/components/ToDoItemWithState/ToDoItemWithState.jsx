import { Component } from "react";

export class ToDoItemWithState extends Component {
  state = {
    nrOfClicks: 0,
  };

  handleIncreaseClick = () => {
    console.log("click on item");
    this.setState({ nrOfClicks: 1 });
  };

  render() {
    return (
      <div className="to-do-item" onClick={this.handleIncreaseClick}>
        <input type="checkbox" defaultChecked={this.props.checkValue} />
        <p>{this.props.label}</p>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/892/892930.svg?token=exp=1618938206~hmac=b7491265fe8f1f011e746d785487c818"
          alt="trash"
        />
        <p>{this.state.nrOfClicks}</p>
      </div>
    );
  }
}
