import React, { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // for alert


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" home="Home" about="About us" mode={mode} toggleMode={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" element={ }/> */}
          <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
            
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
