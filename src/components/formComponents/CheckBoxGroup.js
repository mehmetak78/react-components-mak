import React from 'react';
import CheckBox from "./CheckBox";

const CheckBoxGroup = (props) => {
  const {className, checkBoxItems, flex} = props;

  return (
    <div className= {"checkbox-group checkbox-group-focus " + (flex ? "checkbox-group-row " : " checkbox-group-column ") + className }

    >
      {checkBoxItems.map(item => (
        <CheckBox item={item}/>
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
export default CheckBoxGroup;
