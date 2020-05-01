import React from 'react';

const DIRECTION_LEFT = "DIRECTION_LEFT";

const ToggleButton = (props) => {

  const onClick = () => {
    const toggle_btn = document.querySelector("#"+props.id);
    if (props.direction === DIRECTION_LEFT) {
      toggle_btn.classList.toggle("toggle-btn-open-left");
    }
    else {
      toggle_btn.classList.toggle("toggle-btn-open-right");
    }
    props.toggleClicked();
  }

  return (
    <div id={props.id} className="toggle-btn" onClick={onClick}>
      <div className="toggle-btn-line"> </div>
    </div>
  );
};


ToggleButton.defaultProps =
  {
    toggleClicked:()=> {
      console.log("Default Click Function. ");
    },
    direction: DIRECTION_LEFT
  };



export default ToggleButton;
