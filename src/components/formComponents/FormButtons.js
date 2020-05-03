import React from 'react';

const FormButtons = (props) => {
  const {buttons} = props;
  const className = "form-btn-group grid grid" + buttons.length;
  return (
    <div className={className}>
      {buttons.map(button => (
        <input type={button.type} value={button.value} className="btn btn-primary "/>
      ))}
    </div>
  );
};

FormButtons.defaultProps = {
  buttons: [
    {label:"Ok", value:"Ok", type:"submit"}
  ]
}

export default FormButtons;
