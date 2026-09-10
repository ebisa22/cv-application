import '../styles/MainPage.css'
import {useState,useRef} from 'react'
import { RegisterFuncs } from './RegisterFunction.js'

export default function ExperienceInfo(props){
const company = {
  info: {
    start: "",
    end: "",
    companyName: "",
    Role: "",
  },
  checkValidity() {
    for (let prop in this.info) {
      if (prop === "end") continue;

      if (!this.info[prop].trim()) {
        return false;
      }
    }

    return true;
  },
};

  const dialogRef=useRef(null);

  function showSubmitForm(){
    dialogRef.current.showModal();
  }

  function CompanyForm(){
    const [warning, setWarning] = useState(false);
             function closeSubmitForm() {
               for (let prop in company) {
                 company[prop] = "";
               }
               dialogRef.current.close();
               setWarning(false);
             }
      function handleAddCompany(e) {
        let validForm = company.checkValidity();
        if (validForm) {
          RegisterFuncs.addExperience(company);
          closeSubmitForm();
          setWarning(false);
        } else {
          setWarning(true)
          
        }
      }
      return (
        <>
          <section className="company-form">
            <div className="company-start-container info-cont">
              <label htmlFor="company-start">Start Date :</label>
              <input
                className="company-start-inp"
                id="company-start"
                type="month"
                onChange={(e) => {
                  company.info.start = e.target.value;
                }}
              />
            </div>

            <div className="company-end-container info-cont">
              <label htmlFor="company-end">
                End Date (optional if employed):
              </label>
              <input
                className="company-end-inp"
                id="company-end"
                type="month"
                onChange={(e) => {
                  company.info.end = e.target.value;
                }}
              />
            </div>

            <div className="company-name-container info-cont">
              <label htmlFor="company-name">Company Name:</label>
              <input
                className="company-name"
                id="company-name"
                type="text"
                onChange={(e) => {
                  company.info.companyName = e.target.value;
                }}
              />
            </div>
            <div className="company-res-container info-cont">
              <label htmlFor="company-res">Role in the company</label>
              <input
                className="company-res"
                id="company-name"
                type="text"
                onChange={(e) => {
                  company.info.Role = e.target.value;
                }}
              />
            </div>
          </section>
          {warning && (
            <p className="company-warning">
              * Please enter all required information.
            </p>
          )}

          <div className="modal-btns">
            <button
              className="submit-company-btn modal-btn"
              type="button"
              onClick={handleAddCompany}
            >
              Add Company
            </button>
            <button
              className="close-modal modal-btn"
              onClick={closeSubmitForm}
              type="button"
            >
              Cancel
            </button>
          </div>
        </>
      );
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