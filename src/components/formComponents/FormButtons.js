import React from 'react';

const FormButtons = (props) => {
  const {buttons} = props;
  return (
    <div className={"form-btn-group"}>
      {buttons.map(button => (
        <input id= {button.id} type={button.type} value={button.value} className="btn btn-primary "/>
      ))}
    </div>
  );
};

FormButtons.defaultProps = {
  buttons: [
    {id:"", label:"Ok", value:"Ok", type:"submit"}
  ]
}

export default FormButtons;
