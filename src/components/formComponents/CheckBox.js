import React from 'react';

const CheckBox = (props) => {
  const {className, item, checkBoxClicked, onChange} = props;


  return (
    <div className= {"checkbox " +className} >
      <div className="checkbox-item" >
        <input type="checkbox" className="checkbox" id={item.id} name={item.name} checked={item.checked} onClick={checkBoxClicked} onChange={onChange}/>
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
