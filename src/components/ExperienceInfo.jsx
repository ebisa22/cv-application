import '../styles/MainPage.css'
import {useState,useRef} from 'react'
import { RegisterFuncs } from './RegisterFunction.js'

export default function ExperienceInfo(props){
  const [addCompany,setAddCompany]=useState({})
  const [addMode,setAddMode]=useState("normal")
  const dialogRef=useRef(null);

  function showSubmitForm(){
    setAddMode("adding");
    dialogRef.current.showModal();
  }
  function CompanyForm(){
      return (
        <>
           <section className="company-form">
            <div className="company-start-container info-cont">
            <label htmlFor="company-start">Start Date :</label>
            <input
              className="company-start-inp"
              id="company-start"
              type="month"
              onChange={RegisterFuncs.addEducationStart}
            />
          </div>

          <div className="company-end-container info-cont">
            <label htmlFor="company-end">End Date (optional if employed):</label>
            <input
              className="company-end-inp"
              id="company-end"
              type="month"
              onChange={RegisterFuncs.addGraduationDate}
            />
          </div> 

          <div className="company-name-container info-cont">
            <label htmlFor="company-name">End Date (optional if employed):</label>
            <input
              className="company-name"
              id="company-name"
              type="text"
              onChange={RegisterFuncs.addGraduationDate}
            />
          </div> 
          <div className="company-res-container info-cont">
            <label htmlFor="company-res">End Date (optional if employed):</label>
            <input
              className="company-res"
              id="company-name"
              type="text"
              onChange={RegisterFuncs.addGraduationDate}
            />
          </div> 

          </section>
        </>
      )
  }
 return(
   <>
    <h2 className="experience-title">Experience</h2>
     <dialog className="company-submit" ref={dialogRef}>   
            <CompanyForm/>               
             </dialog>
    <section className="experience-info">
      <button className="add-company-btn" onClick={showSubmitForm} type='button'>
         Add Company
      </button>
      
    </section>
   </>
 );
}