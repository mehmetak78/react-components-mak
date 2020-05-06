import React from 'react';
import CheckBox from "./CheckBox";

const cancelFocusRadioButtonGroup = () => {
  const radioButtonGroups = document.querySelectorAll(".radiobutton-group");
  radioButtonGroups.forEach( (radioButtonGroup) => {
    radioButtonGroup.classList.remove("radiobutton-group-focus");
  });
}

const RadioButtonGroup = (props) => {
  const {className, items, flex, groupName, groupLabel} = props;

  const radioButtonClicked = (event) => {
    const checkBoxGroupElem = event.target.parentNode.parentNode.parentNode;
    checkBoxGroupElem.classList.add("radiobutton-group-focus");
  }

  return (
    <div className= {"radiobutton-group " + (flex ? "radiobutton-group-row " : " radiobutton-group-column ") + className }
    >
      {items.map(item => (
        <div className= {"radiobutton " +className} >
          <div className="radiobutton-item" >
            <input type="radio" id={item.id} name={groupName} onClick={radioButtonClicked}/>
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        </div>
      ))}
      <span className="group-label">{groupLabel}</span>
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  groupLabel: "Radiobox Group",
  groupName: "radioGroup1",
  items: [
    {
      id: "checkbox1",
      name: "checkbox",
      label: "Checkbox"
    }
  ],
  className: " ",
  flex: false
}
export {RadioButtonGroup, cancelFocusRadioButtonGroup};
