import React from 'react';
import Navbar from "./components/Navbar";


import PageForm1 from "./pages/PageForm1";

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
