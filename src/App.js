import React, { useState } from 'react'
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
// import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App(props) {
  const [mode,setMode]=useState('light');
  // const [alert , setAlert]=useState(null);

  const showAlert=(message,type)=>({
    message:message,
    type:type
  })

  const toggelMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title="home-DarkMode";
      
    }
   else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
      document.title="home-LightMode";
    }
  }
  return (
    <>
    {/* <BrowserRouter>
    <Navbar Title="TextUtils" mode={mode} toggelMode={toggelMode}/>
    <Alert alert={alert} />
    <Routes>
      <Route path='/' element={<Home mode={mode}/>}/>
      <Route path='/about' element={ <About/>}/>
    </Routes>
    </BrowserRouter> */}

    <Navbar Title="TextUtils" mode={mode} toggelMode={toggelMode}/>
    <Home mode={mode}/>
    </>
  )
}
