import '../styles/Submit.css'

export default function Submit(props){
  return(
   <div className="full-submit-container">
      <button type="button" className="full-submit-btn" onClick={props.onClick}>
          Submit
      </button>
   </div>
  );
}