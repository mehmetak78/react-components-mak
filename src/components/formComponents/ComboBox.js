import React, {useEffect, useState} from 'react';

const FIRST_SINGLE_MESSAGE = "(Select Item)";
const FIRST_MULTI_MESSAGE = "(Select Items)";
const MULTI_SELECTED_MESSAGE = "(Multiple Selected)";


const Combobox = (props) => {
  const {className, id, name, label, type, autoComplete, required, multi} = props;

  const [selectedItem, setSelectedItem] = useState(FIRST_SINGLE_MESSAGE);

  const [selectedItems] = useState(new Set());

  const comboMainClicked = (e) => {
    const comboItems = e.target.querySelector(".combo-items");
    if (comboItems) {
      comboItems.classList.toggle("combo-items-active");
    }
  }

  useEffect(() => {
    if (multi) {
      setSelectedItem(FIRST_MULTI_MESSAGE);
    }
    // eslint-disable-next-line
  }, []);

  const closeComboItems = (comboItems) => {
    if (comboItems) {
      comboItems.classList.remove("combo-items-active");
    }
    else {
      const allComboItems = document.querySelectorAll(".combo-items");
      allComboItems.forEach(comboItems=> {
        comboItems.classList.remove("combo-items-active");
      })
    }
  }
  
  window.onclick = function(event) {
    //event.stopPropagation();
    if (!event.target.classList.contains("combo-main")) {
      closeComboItems();
    }
  }

  const comboItemClicked = (e) => {
    e.stopPropagation();
    if (multi) {
      if (selectedItems.has(e.target.id)) {
        selectedItems.delete(e.target.id);
      } else {
        selectedItems.add(e.target.id);
      }
      if (selectedItems.size>1) {
        setSelectedItem(MULTI_SELECTED_MESSAGE);
      } else if (selectedItems.size===1) {
        setSelectedItem(selectedItems.values().next().value)
      }
      else {
        setSelectedItem(FIRST_MULTI_MESSAGE);
      }
      e.target.classList.toggle("combo-item-selected");
    }
    else {
      setSelectedItem(e.target.id);
      const comboItems = e.target.parentNode;
      closeComboItems(comboItems);
    }
  }

  const emptyItem = (
    multi ? "":
     <div className="combo-item" id={FIRST_SINGLE_MESSAGE} onClick={comboItemClicked}>&nbsp;</div>
  )

  const classNameForRequired = required ? " required": " ";
  return (
    <div className= {"combobox " + className}>
      <div className={"combo-main " + classNameForRequired} onClick={comboMainClicked}>
        {selectedItem}
        <div className="combo-items ">
          {emptyItem}
          <div className="combo-item" id="Item1" onClick={comboItemClicked}>Item1</div>
          <div className="combo-item" id="Item2" onClick={comboItemClicked}>Item2</div>
          <div className="combo-item" id="Item3" onClick={comboItemClicked}>Item3</div>
          <div className="combo-item" id="Item4" onClick={comboItemClicked}>Item4</div>
          <div className="combo-item" id="Item5" onClick={comboItemClicked}>Item5</div>
          <div className="combo-item" id="Item6" onClick={comboItemClicked}>Item6</div>
        </div>
      </div>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

Combobox.defaultProps = {
  id: "",
  name: "",
  label: "Label",
  type: "text",
  autoComplete: "",
  required: false,
  multi: false
}
export default Combobox;
