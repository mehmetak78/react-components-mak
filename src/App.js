import React from 'react';
import Navbar from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="mainPage">
        <h1>Main Page Goes Here</h1>
        <ToggleButton id={"toggleButton1"} direction={"DIRECTION_RIGHT"}/>
      </div>

    </div>
  );
}

export default App;
