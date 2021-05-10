import "./ToDoItem.css";

export function ToDoItem(props) {
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
        src="/delete.png"
        alt="trash"
        onClick={() => props.removeItem(props.label)}
      />
    </div>
  );
}
