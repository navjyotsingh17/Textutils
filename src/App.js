import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes, Route
// } from "react-router-dom";

function App() {


  const [mode , setMode]= useState("light");
  
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = "rgb(4 3 51)";
      showAlert("Dark mode has been enabled","success");
      document.title = "Textutils - DarkMode";
    }
    else{
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils - LightMode";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" aboutText='About Textutils'mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Routes> */}
            {/* <Route excat path="/about" element={<About/>}/> */}
        {/* <Route  excat path="/" element= */}
        {<Textform showAlert={showAlert} heading="Enter your text in the below textbox" mode={mode} />}
          {/* </Routes> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
