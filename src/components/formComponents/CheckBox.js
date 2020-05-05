import React from 'react';

const CheckBox = (props) => {
  const {className, item} = props;

  // document.onclick = function(event) {
  //   console.log("CheckBox.document.onClick()");
  //
  // }

  return (
    <div className= {"checkbox " +className}>
      <div className="checkbox-item">
        <input type="checkbox" id={item.id}/>
        <label htmlFor={item.id}>{item.label}</label>
      </div>
    </div>
  );
};

CheckBox.defaultProps = {
  item: {
    id: "checkbox",
    name: "checkbox",
    label: "Checkbox"
  }
}
export default CheckBox;
