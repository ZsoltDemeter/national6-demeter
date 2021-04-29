import React from "react";
import { Link } from "react-router-dom";

function SendButton({ onClick, object, onMouseOver }) {
  return (
    <div className="send-container">
      <Link
        to={
          object.firstname && object.lastname && object.email && object.message
            ? "/submitted"
            : ""
        }
      >
        <a href="#" class="button" onClick={onClick} onMouseOver={onMouseOver}>
          Send
        </a>
      </Link>
    </div>
  );
}

export default SendButton;
