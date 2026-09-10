import '../styles/MainPage.css'
import {useState,useRef} from 'react'
import { RegisterFuncs } from './RegisterFunction.js'
import { Person } from './RegisterFunction.js';

export default function ExperienceInfo(props){
  const dialogRef=useRef(null);
  const [companies,setCompanies]=useState([]);

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
  
function showSubmitForm(){
    dialogRef.current.showModal();
  }
  
  function CompanyForm(){
    const [warning, setWarning] = useState(false);
             
    function closeSubmitForm() {
               for (let prop in company.info) {
                 company.info[prop] = "";
               }
               dialogRef.current.close();
               setWarning(false);
             }
     function handleAddCompany(e) {
    const validForm = company.checkValidity();

    if (validForm) {
        const newCompany = {
            ...company.info,
            id: crypto.randomUUID()
        };

        RegisterFuncs.addExperience(newCompany);

        setWarning(false);

        setCompanies(prev => [
            ...prev,
            newCompany
        ]);

        closeSubmitForm();

    } else {
        setWarning(true);
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
                id="company-res"
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
function removeCompany(id) {
  setCompanies(prev =>
    prev.filter(company => company.info.id !== id)
  );

  RegisterFuncs.removeCompany(id);
}

 function ListCompanies() {
    return (
        <div >

            {companies.length > 0 && (
                <div className="companies-container">
                    {companies.map((company) => (

                        <div
                            key={company.id}
                            className="company-container"
                        >

                            <h3>
                                {company.companyName}
                            </h3>

                            <p>
                                {company.Role}
                            </p>

                            <p>
                                {company.start}
                                {' -- '}
                                {company.end || 'Present'}
                            </p>

                            <button
                                className="company-btn"
                                onClick={() => removeCompany(company.id)}
                            >
                                X
                            </button>

                        </div>

                    ))}
                </div>
            )}

        </div>
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
      <ListCompanies/>
    </section>
   </>
 );
}