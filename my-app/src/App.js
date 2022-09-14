// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";

import TextForm from "./components/TextForm";
// import { render } from "react-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

   const showAlert=(message,type)=>{
    setAlert({ 
      msg : message,
      type:type  
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')


  }


  const toggleMode=(whatevercolor)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+whatevercolor)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#363434';
      showAlert('Dark mode has been enabled','success');
      // document.title='mytextapp-darkMode';
      // setInterval(() => {
      //   document.title='mytextapp-darkMode ksamjcoiwadc lkdnc';
      // }, 2000);
      // setInterval(() => {
      //   document.title='darkMode ksamjcoiwadc lkdnc';
      // }, 1200);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      // document.title='mytextapp-lightMode';

    }
  }
  return (
    <>
     <Router>
       <Navbar title='Myapp' newText='aboutus' mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container">
        
       <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
      
          <Route exact path="/" element={<TextForm heading="Enter a text" showAlert={showAlert} mode={mode}/>} >

          </Route>
        </Routes>

        {/* <TextForm heading="Enter a text" showAlert={showAlert} mode={mode}/> */}
        {/* <About/> */}
        
       </div>
       </Router>
  </>
  );
}

export default App;
