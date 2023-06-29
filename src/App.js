import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {

//state for the light and dark mode
  const [mode , setMode]= useState("light");
  
  //state for the alert
  const [alert, setAlert] = useState(null);

  //showing the alert below the navbar
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  //removing the color classes so that other color theme cal be applied on the app
  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
  }

  //method to change the theme of the application and then showing the alert
  const toggleMode=(cls)=>{
    removeBodyClasses();
     console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = "rgb(4 3 51)";
      showAlert("Dark mode has been enabled","success");
      // document.title = "Textutils - DarkMode";
    }
    else{
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success")
      // document.title = "Textutils - LightMode";
    }
  }

  //sending the title for navabr as prosp and routing to about page
  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
            <Route excat path="/about" element={<About mode={mode}/>}/>
        <Route  excat path="/" element={<Textform showAlert={showAlert} heading="Try Textutils - Word counter, character counter, 
        Remove extra spaces" mode={mode} />}/>
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
