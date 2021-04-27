import "./ToDoItem.css";

export function ToDoItem(props) {
  // console.log(props);

  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        defaultChecked={props.checkValue}
        onChange={() => {
          props.updateCheckStatus(props.itemIndex, !props.checkValue);
        }}
      />
      <p>{props.label}</p>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/892/892930.svg?token=exp=1618938206~hmac=b7491265fe8f1f011e746d785487c818"
        alt="trash"
        onClick={() => props.removeItem(props.label)}
      />
    </div>
  );
}
