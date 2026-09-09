import '../styles/MainPage.css'
function Name(props){
 return (
      <div className="input-container">
          <input type="text" className={props.type} id={props.type}/>
          <button className="input-btn"></button>
      </div>
 );
}
export default function MainPage(props){
 return(
    <main className="main">
        <div className="main-container">
            <form className="cv-container">
                  <h1 className="main-title">CV Application</h1>
                  <section className="general-info">
                     <div className="fname-container info-cont">
                         <label for="first-name">First Name :</label>
                         <Name type="first-name"/>
                     </div>
                     <div className="last-container info-cont">
                         <label for="last-name">Last Name :</label>
                         <Name type="last-name"/>
                     </div>
                  </section>
            </form>
        </div>
    </main>
 )
}