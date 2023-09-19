import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
 import TextForm from './Components/TextForm';
 import About from './Components/About';
 import Alert from './Components/Alert';
 import React, {useState} from 'react';
 import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled!","success");
    //  document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled!","success");
  //    document.title="TextUtils - Light Mode";
    }
  }
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
type:type
    })
    setTimeout(()=>{setalert(null)},1500)
  }
  return (
<>
<Router>
<Navbar title="TextAnalyzer" abouttext="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route path="/about" element={ <About mode={mode}/>}>
           
          </Route> 
          <Route path="/" element={<TextForm showalert={showalert}heading="Try TextAnalyzer - Enter the text to analyze" mode={mode}/>}>
          </Route>
        </Routes>
        </div>
        </Router>
</>
  );
}

export default App;
