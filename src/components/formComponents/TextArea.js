import React from 'react';

const TextArea = (props) => {
  const {className, form, id, name,value, label, autoComplete, required, onChange} = props;
  return (
    <div className= {"textarea " +className}>
      <textarea form={form} id={id} name={name} value={value} autoComplete={autoComplete} required={required} onChange={onChange} />
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
