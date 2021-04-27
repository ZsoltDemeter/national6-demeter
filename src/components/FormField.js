import React from "react";

function FormField({ title }) {
  return (
    <div className="form-field">
      <h4>{title}</h4>
      <input className="input-field" />
    </div>
  );
}

export default FormField;
