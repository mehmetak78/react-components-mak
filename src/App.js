import React from 'react';
import Navbar from "./components/Navbar";

import CardWithImg from "./components/CardWithImg";
import Page1 from "./pages/Page1";
import FormPage1 from "./pages/FormPage1";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="mainPage">
        <h1>Main Page Goes Here</h1>
        <FormPage1/>
      </div>
    </div>
  );
}

export default App;
