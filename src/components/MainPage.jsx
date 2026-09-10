import '../styles/MainPage.css'
import {RegisterFuncs, validateForm} from './RegisterFunction.js';
import GeneralInfo from './Generalnfo.jsx';
import EducationInfo from './EducationInfo.jsx'
import ExperienceInfo from './ExperienceInfo.jsx';
import Submit from './Submit.jsx';

import { useState } from 'react';
export default function MainPage(props){
const [warning,setWarning]=useState(false)
 function handleSubmit(){
    const validForm=validateForm();
    if(!validForm){
        setWarning(true);
        return;
    }else{
         props.onSubmit();
    }
 }
 return(
    <main className="main">
        <div className="main-container">
            <form className="cv-container">
                  <h1 className="main-title">CV Application</h1>
                  {
                    warning &&                 
                  <p className="full-warning">
                      * Please enter all required information.
                  </p>
                  }
                  <GeneralInfo/>
                  <EducationInfo/>
                  <ExperienceInfo/>
                  <Submit onClick={handleSubmit}/>
            </form>
        </div>
    </main>
 )
}