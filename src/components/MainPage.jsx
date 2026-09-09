import '../styles/MainPage.css'
import {RegisterFuncs} from './RegisterFunction.js';
import GeneralInfo from './Generalnfo.jsx';
import EducationInfo from './EducationInfo.jsx'

export default function MainPage(props){
 return(
    <main className="main">
        <div className="main-container">
            <form className="cv-container">
                  <h1 className="main-title">CV Application</h1>
                  <GeneralInfo/>
                  <EducationInfo/>
            </form>
        </div>
    </main>
 )
}