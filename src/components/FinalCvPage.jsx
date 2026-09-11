import "../styles/FinalCvPage.css";
import { Person } from "./RegisterFunction.js";
import {useRef } from "react"
import html2pdf from "html2pdf.js";


export default function FinalCvPage(props) {
  const cvRef=useRef(null);
  const handleDownload = () => {
  const element = cvRef.current;

  const options = {
    margin: 0,
    filename: `${Person.firstName}-${Person.lastName}-CV.pdf`,
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  html2pdf()
    .set(options)
    .from(element)
    .save();
};

  function formatDate(date) {
    if (!date) return "";
    if (date.includes(" ")) {
      return date;
    }
    const [year, month] = date.split("-");
    if (!year || !month) {
      return date;
    }
    const dateObject = new Date(year, Number(month) - 1);
    return dateObject.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
  function getProfessionalTitle() {
    if (Person.profession?.trim()) {
      return Person.profession;
    }
    return "Professional";
  }
  function handleCancel(){
   props.goBack();
  }
  return (
    <main className="final-page">
      <div className="page-view" ref={cvRef}>
        <header className="cv-header">
          <div className="cv-header-main">
            <h1>
              {Person.firstName} {Person.lastName}
            </h1>
            <p className="cv-title">
              {getProfessionalTitle()}
            </p>
          </div>
          <div className="cv-contact">
            {Person.email && (
              <p>{Person.email}</p>
            )}
            {Person.phoneNumber && (
              <p>{Person.phoneNumber}</p>
            )}
           {Person.location && (
              <p>{Person.location}</p>
            )}
          </div>

        </header>

        <div className="cv-content">
          <section className="cv-section">

            <h2>Professional Profile</h2>

            <p className="profile-text">

              Dedicated and motivated professional with a strong
              commitment to continuous learning, effective communication,
              and delivering high-quality work. Adaptable to new
              environments and able to work independently or as part of
              a team. Seeking opportunities to apply existing skills,
              develop professionally, and contribute positively to an
              organization.

            </p>

          </section>

          {Person.experience?.length > 0 && (
            <section className="cv-section">

              <h2>Professional Experience</h2>


              <div className="experience-list">

                {Person.experience.map((experience) => (

                  <article
                    className="experience-item"
                    key={experience.id}
                  >

                    <div className="experience-top">

                      <div className="experience-role">

                        <h3>
                          {experience.Role}
                        </h3>

                        <p className="experience-company">
                          {experience.companyName}
                        </p>

                      </div>


                      <p className="experience-date">

                        {formatDate(experience.start)}

                        {" — "}

                        {experience.end
                          ? formatDate(experience.end)
                          : "Present"}

                      </p>

                    </div>


                    {experience.description && (

                      <p className="experience-description">
                        {experience.description}
                      </p>

                    )}

                  </article>

                ))}

              </div>

            </section>

          )}

          {(Person.schoolName || Person.degree) && (

            <section className="cv-section">

              <h2>Education</h2>


              <article className="education-item">

                <div className="education-main">

                  {Person.degree && (
                    <h3>
                      {Person.degree}
                    </h3>
                  )}

                  {Person.schoolName && (
                    <p className="education-school">
                      {Person.schoolName}
                    </p>
                  )}

                </div>


                {(Person.degreeStart || Person.degreeEnd) && (

                  <p className="education-date">

                    {formatDate(Person.degreeStart)}

                    {" — "}

                    {formatDate(Person.degreeEnd)}

                  </p>

                )}

              </article>

            </section>

          )}

          <section className="cv-section">

            <h2>Professional Highlights</h2>

            <div className="highlight-grid">

              <div className="highlight">
                <span className="highlight-number">01</span>

                <div>
                  <h3>Adaptable</h3>
                  <p>
                    Comfortable learning new processes, tools, and
                    responsibilities.
                  </p>
                </div>
              </div>


              <div className="highlight">
                <span className="highlight-number">02</span>

                <div>
                  <h3>Collaborative</h3>
                  <p>
                    Able to communicate effectively and contribute
                    within a team environment.
                  </p>
                </div>
              </div>


              <div className="highlight">
                <span className="highlight-number">03</span>

                <div>
                  <h3>Professional</h3>
                  <p>
                    Committed to reliability, continuous improvement,
                    and quality work.
                  </p>
                </div>
              </div>

            </div>

          </section>
        </div>

      </div>
      <div className="final-btns">
       <button className="download-btn" onClick={()=>{
        handleDownload();
       }}>
        Download CV
       </button>
       <button className="final-cancel-btn" onClick={handleCancel}>
        Cancel
       </button>
      </div>
    </main>
  );
}
