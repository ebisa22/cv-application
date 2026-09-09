import cvImage from '../assets/cv-img-2.png'
import '../styles/HomePage.css'

export default function HomePage(props){
    return (
      <main className="homepage-container">
        <div className="project-desc">
          <p className="description">
            CV Builder is a simple web application that allows users to create
            and organize their own CV. Users can enter their personal
            information, education, experience, and other relevant details, then
            get their CV in a clean format.
          </p>
          <button className="get-start-btn" onClick={props.onBtnClick}>
            Get Started
          </button>
        </div>
        <div className="img-container">
            <img src={cvImage} alt="A demo cv image." className="cv-img"/>
        </div>
      </main>
    );
}
