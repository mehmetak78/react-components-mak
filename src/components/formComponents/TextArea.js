import React from 'react';

const TextArea = (props) => {
  const {className, form, id, name, label, autoComplete, required} = props;
  return (
    <div className= {"textbox " +className}>
      <textarea form={form} id={id} name={name} autoComplete={autoComplete} required={required} />
      <label htmlFor={name}>{label}</label>
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
