import React from "react";

function SentMessageNotification({ hideMessage }) {
  return (
    <div className="message">
      <span id="X" onClick={hideMessage}>
        &#10005;
      </span>
      <p>Message sent!</p>
    </div>
  );
}

export default SentMessageNotification;
