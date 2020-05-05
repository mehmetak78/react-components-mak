import React from 'react';

const TextBox = (props) => {
  const {className, id, name, value, label, type, autoComplete, required, onChange} = props;

  return (
    <div className= {"textbox " +className}>
      <input id={id} type={type} name={name} value={value} autoComplete={autoComplete} required={required}  onChange={onChange}/>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

TextBox.defaultProps = {
  id: "",
  name: "",
  value: "",
  label: "Label",
  type: "text",
  autoComplete: "",
  required: false
}
export default TextBox;
