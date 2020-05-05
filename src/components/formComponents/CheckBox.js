import React from 'react';

const CheckBox = (props) => {
  const {className, item, checkBoxClicked} = props;



  return (
    <div className= {"checkbox " +className} >
      <div className="checkbox-item" >
        <input type="checkbox" className="checkBox" id={item.id} onClick={checkBoxClicked}/>
        <label htmlFor={item.id}>{item.label}</label>
      </div>
    </div>
  );
};

CheckBox.defaultProps = {
  item: {
    id: "checkbox",
    name: "checkbox",
    label: "Checkbox",
    checkBoxClicke: null
  }
}
export default CheckBox;
