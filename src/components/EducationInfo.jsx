import "../styles/MainPage.css";
import { RegisterFuncs } from "./RegisterFunction.js";

export default function EducationInfo(props){
    return (
      <>
        <h2 className="education-title">Education</h2>
        <section className="education-info">
          <div className="school-container info-cont">
            <label htmlFor="school">School name :</label>
            <input
              className="school-inp"
              id="school"
              type="text"
              onChange={RegisterFuncs.addSchoolName}
            ></input>
          </div>
          <div className="degree-container info-cont">
            <label htmlFor="degree">Degree / Field of study :</label>
            <input
              className="degree-inp"
              id="degree"
              type="text"
              onChange={RegisterFuncs.addDegree}
            ></input>
          </div>
          <div className="education-start-container info-cont">
            <label htmlFor="education-start">Start Date :</label>
            <input
              className="education-start-inp"
              id="education-start"
              type="month"
              onChange={RegisterFuncs.addEducationStart}
            />
          </div>

          <div className="graduation-date-container info-cont">
            <label htmlFor="graduation-date">Graduation Date :</label>
            <input
              className="graduation-date-inp"
              id="graduation-date"
              type="month"
              onChange={RegisterFuncs.addGraduationDate}
            />
          </div>
        </section>
      </>
    );

}
