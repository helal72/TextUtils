import './App.css';
import Navbar from './Componants/Navbar';
import TextBox from './Componants/TextBox';
import React, {useState} from 'react'
import Alart from './Componants/Alart';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode =()=>{
    if(mode ==='light') {
      setMode('dark')
      document.body.style.backgroundColor = "#0e1340";
      showAlert('Dark mode is enable', 'success');
      document.title =" TextUtils - Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert('Light mode is enable', 'success');
      document.title =" TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Navbar title="TextUtil" home="Home" about="About" mode={mode} toggleMode ={toggleMode}/>
      <Alart alert ={alert}/>
      <div className="container my-3">
        <TextBox showAlert = {showAlert} heading ="Enter the text to analyze"  mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
