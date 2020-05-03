import React from 'react';
import FormButtons from "./FormButtons";

const TextBox = (props) => {
  const {className, name, label, type, autoComplete, reqired} = props;
  return (
    <div className= {"textbox " +className}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} autoComplete={autoComplete} required />
    </div>
  );
};

TextBox.defaultProps = {
  name: "",
  label: "Label",
  type: "text",
  autoComplete: "",
  required: false
}
export default TextBox;
