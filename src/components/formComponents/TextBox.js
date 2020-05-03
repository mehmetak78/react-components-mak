import React from 'react';

const TextBox = (props) => {
  const {className, id, name, label, type, autoComplete, reqired} = props;
  return (
    <div className= {"textarea " +className}>
      <label htmlFor={name}>{label}</label>
      <input id={id} type={type} name={name} autoComplete={autoComplete} required />
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
