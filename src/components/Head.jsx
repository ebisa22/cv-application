import '../styles/Head.css'

export default function Head(props){
    return (
      <header>
        <h1 className="head-title"  onClick={props.goHome}>CV Builder</h1>
        <nav className="nav-bar">
          <div
            className={
              props.activeMode === "home" ? "home-cont active-btn" : "home-cont"
            }
          >
            <button className="home-btn btn" onClick={props.goHome}>
              Home
            </button>
          </div>
          <div
            className={
              props.activeMode === "main"
                ? "start-cont active-btn"
                : "start-cont"
            }
          >
            <button className="start-btn btn" onClick={props.getStarted}>
              Get Started
            </button>
          </div>
        </nav>
      </header>
    );
}
