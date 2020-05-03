import React from 'react';

const TextBox = (props) => {
  const {className, id, name, label, type, autoComplete, required} = props;
  return (
    <div className= {"textarea " +className}>
      <input id={id} type={type} name={name} autoComplete={autoComplete} required={required} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

TextBox.defaultProps = {
  id: "",
  name: "",
  label: "Label",
  type: "text",
  autoComplete: "",
  required: false
}
export default TextBox;
