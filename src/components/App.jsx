import { useState } from 'react'
import Head from './Head.jsx'
import HomePage from './HomePage.jsx'
import MainPage from './MainPage.jsx'
import FinalCvPage from './FinalCvPage.jsx'
import Footer from './Footer.jsx'
import { clearForm } from './RegisterFunction.js'
import '../styles/App.css'

function App() {
  const [appMode,setAppMode]=useState("home");
  function goHome(){
    setAppMode('home')
  }
  function getStarted(){
    setAppMode('main')
    clearForm();
  }
  function showFinal(){
    setAppMode('final')
  }
  return (
    <div className="body-container">
        <Head activeMode={appMode} getStarted={getStarted} goHome={goHome}/>
        { appMode==='home' && <HomePage onBtnClick={getStarted}/>}
       {appMode==='main' && <MainPage onSubmit={showFinal}/>}
         {appMode==='final' && <FinalCvPage goBack={getStarted}/> }     
         <Footer activeMode={appMode} getStarted={getStarted} goHome={goHome}/>
    </div>
  )
}

export default App
