function FormField({ title, className, onChange }) {
  return (
    <div className="form-field">
      <h4>{title}</h4>
      <input className={`input-field ${className}`} onChange={onChange} />
    </div>
  );
}

export default FormField;
