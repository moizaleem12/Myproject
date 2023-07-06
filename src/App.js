import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Alert from './Components/Alert';
import About from './Components/About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [red, setred] = useState("")
  const [blue, setblue] = useState("")
  const showred = () => {

    document.body.style.backgroundColor = "red";
    showalert("background is change", "RED")
  }
  const showblue = () => {

    document.body.style.backgroundColor = "blue";
    showalert("background is change", "Blue")
  }
  const togle = () => {
    if (mode == 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showalert("dark mode in on", "success")
    }

    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("light mode in on", "success")

    }
  }
  const showalert = (mess, type) => {
    setalert({
      messege: mess,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 3000)
  }

  return (
    <>
        <Navbar title="TextApp" moddes={mode} chnage={togle} red={showred} blue={showblue} />
        <Alert alert={alert} />
      {/* <Router>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={} />
          </Routes>
      </Router> */}
        <div className="container">
          <Body heading="Preview your text" showalert={showalert} moddes={mode} titlehead="Enter your text" />
        </div> 
      
    </>
  );
}

export default App;
