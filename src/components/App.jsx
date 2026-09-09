import { useState } from 'react'
import Head from './Head.jsx'
import HomePage from './HomePage.jsx';
import '../styles/App.css'

function App() {
  const [appMode,setAppMode]=useState("home");
  function goHome(){
    setAppMode('home')
  }
  function getStarted(){
    setAppMode('main')
  }
  return (
    <>
        <Head activeMode={appMode} getStarted={getStarted} goHome={goHome}/>
         {(appMode==='home')?
           <HomePage onBtnClick={getStarted}/>:
           null
         }
    </>
  )
}

export default App
