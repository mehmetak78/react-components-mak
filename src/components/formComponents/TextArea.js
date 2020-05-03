import React from 'react';

const TextArea = (props) => {
  const {className, form, id, name, label, autoComplete, reqired} = props;
  return (
    <div className= {"textbox " +className}>
      <label htmlFor={name}>{label}</label>
      <textarea form={form} id={id} name={name} autoComplete={autoComplete} required />
    </div>
  );
};

TextArea.defaultProps = {
  id: "",
  name: "",
  form: "",
  label: "Label",
  type: "text",
  autoComplete: "",
  required: false
}
export default TextArea;
