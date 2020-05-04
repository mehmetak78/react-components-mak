import React from 'react';

const Combobox = (props) => {
  const {className, id, name, label, type, autoComplete, required} = props;

  const comboMainClicked = (e) => {
    console.log("Clicked");
    const comboItems = e.target.querySelector(".combo-items");
    comboItems.classList.toggle("combo-items-active");
  }

  return (
    <div className= {"combobox " +className}>
      <div className="combo-main" onClick={comboMainClicked}>
        {"Please Select"}
        <div className="combo-items ">
          <div className="combo-item">Item1</div>
          <div className="combo-item">Item2</div>
          <div className="combo-item">Item3</div>
          <div className="combo-item">Item4</div>
        </div>
      </div>


      <label htmlFor={name}>{label}</label>
      {/*<select name="" id="">*/}
      {/*  <option value="1">Opt1</option>*/}
      {/*  <option value="2">Opt2</option>*/}
      {/*  <option value="3">Opt3</option>*/}
      {/*</select>*/}
    </div>
  );
};

Combobox.defaultProps = {
  id: "",
  name: "",
  label: "Label",
  type: "text",
  autoComplete: "",
  required: false
}
export default Combobox;
