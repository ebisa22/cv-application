import { useState } from 'react'
import Head from './Head.jsx'
import HomePage from './HomePage.jsx'
import MainPage from './MainPage.jsx'
import Footer from './Footer.jsx'
import '../styles/App.css'

function App() {
  const [appMode,setAppMode]=useState("main");
  function goHome(){
    setAppMode('home')
  }
  function getStarted(){
    setAppMode('main')
  }
  return (
    <div className="body-container">
        <Head activeMode={appMode} getStarted={getStarted} goHome={goHome}/>
         {(appMode==='home')?
           <HomePage onBtnClick={getStarted}/>:
           <MainPage/>
         }
         <Footer activeMode={appMode} getStarted={getStarted} goHome={goHome}/>
    </div>
  )
}

export default App
