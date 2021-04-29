import React from "react";

function MessageField({ title, onChange, className }) {
  return (
    <div className="form-field-message">
      <h4>{title}</h4>
      <textarea
        maxLength="365"
        className={`textarea ${className}`}
        onChange={onChange}
      />
    </div>
  );
}

export default MessageField;
