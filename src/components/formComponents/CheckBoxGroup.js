import React from 'react';
import CheckBox from "./CheckBox";

const cancelFocusCheckBoxGroup = () => {
  const checkBoxGroups = document.querySelectorAll(".checkbox-group");
  checkBoxGroups.forEach( (checkBoxGroup) => {
    checkBoxGroup.classList.remove("checkbox-group-focus");
  });
}

const CheckBoxGroup = (props) => {
  const {className, checkBoxItems, flex} = props;

  const checkBoxClicked = (event) => {
    const checkBoxGroupElem = event.target.parentNode.parentNode.parentNode;
    checkBoxGroupElem.classList.add("checkbox-group-focus");
  }

  return (
    <div className= {"checkbox-group " + (flex ? "checkbox-group-row " : " checkbox-group-column ") + className }

    >
      {checkBoxItems.map(item => (
        <CheckBox item={item} checkBoxClicked={checkBoxClicked}/>
      ))}
    </div>
  );
};

CheckBoxGroup.defaultProps = {
  checkBoxItems: [
    {
      id: "checkbox1",
      name: "checkbox",
      label: "Checkbox"
    }
  ],
  className: " ",
  flex: false
}
export {CheckBoxGroup, cancelFocusCheckBoxGroup};
