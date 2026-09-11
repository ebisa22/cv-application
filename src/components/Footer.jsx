import '../styles/Footer.css'

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
              <svg
  className="github-icon"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path
    d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
  />
</svg>

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