import React from 'react';
import {Navbar,closeAllDropDown} from "./components/Navbar";
import {closeAllComboItems} from "./components/formComponents/ComboBox";
import {cancelFocusCheckBoxGroup} from "./components/formComponents/CheckBoxGroup";
import {cancelFocusRadioButtonGroup} from "./components/formComponents/RadioButtonGroup";
import {closeAllDatePickerSelectors} from "./components/formComponents/DatePicker";

import PageForm1 from "./pages/PageForm1";

window.onclick = function(event) {
  // console.log("App.window.onClick()");
  // console.log(event.target.classList);
  if (!event.target.classList.contains("combo-main")) {
    closeAllComboItems();
  }
  if (
    !event.target.classList.contains("date-picker-main")
    && !event.target.classList.contains("left-button")
    && !event.target.classList.contains("right-button")
) {
    closeAllDatePickerSelectors();
  }

  if (!event.target.classList.contains("nav-item")) {
    closeAllDropDown();
  }
  if (event.target.type!=="checkbox") {
    cancelFocusCheckBoxGroup();
  }
  if (event.target.type!=="radio") {
    cancelFocusRadioButtonGroup();
  }


}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="mainPage">
        <h1>Main Page Goes Here</h1>
         <PageForm1/>
      </div>
    </div>
  );
}

export default App;
