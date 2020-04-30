import React from 'react';

const ToggleButton = (props) => {
  return (
    <div className="toggle-btn" onClick={props.toggleClicked}>
      <div className="toggle-btn-line"> </div>
    </div>
  );
};

export default ToggleButton;
