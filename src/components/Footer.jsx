import '../styles/Footer.css'

export default function Footer(props){
   return (
       <>
       <hr className="footer-line"/>
       <footer className="footer-container">
             <p className="foot-desc"> <span className="copy-icon">&copy; </span>2026 CV Builder.  All rights reserved.</p>
             <div className="github-container">
                 <a href="https://github.com/ebisa22/cv-application" target="_blank">
    <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        width="40"
    />
</a>
             </div>
             <nav className="foot-nav-container">
                   <div
              className={
              props.activeMode === "home" ? "foot-home-cont active-btn" : "foot-home-cont"
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
            <button className="foot-start-btn foot-btn" onClick={props.getStarted}>
              Get Started
            </button>
            </div>
             </nav>
       </footer>
       </>
   );
}