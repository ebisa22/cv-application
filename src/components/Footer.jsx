import '../styles/Footer.css'
import githubIcon from '../assets/github-icon.svg' 

export default function Footer(props){
   return (
     <>
       <footer className="footer-container">
         <p className="foot-desc">
           {" "}
           <span className="copy-icon">&copy; </span>2026 CV Builder. All rights
           reserved.
         </p>
         <div className="github-container">
           <a href="https://github.com/ebisa22/cv-application" target="_blank">
             <img src={githubIcon} alt="GitHub" className="github-icon" />
           </a>
         </div>
         <nav className="foot-nav-container">
           <div
             className={
               props.activeMode === "home"
                 ? "foot-home-cont active-btn"
                 : "foot-home-cont"
             }
           >
             <button className="foot-home-btn foot-btn" onClick={props.goHome}>
               Home
             </button>
           </div>
           <div
             className={
               props.activeMode === "main"
                 ? "foot-start-cont active-btn"
                 : "foot-start-cont"
             }
           >
             <button
               className="foot-start-btn foot-btn"
               onClick={props.getStarted}
             >
               Get Started
             </button>
           </div>
         </nav>
       </footer>
     </>
   );
}