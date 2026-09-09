import "../styles/MainPage.css";
import { RegisterFuncs } from "./RegisterFunction.js";

function Name(props) {
  return (
      <input
        type="text"
        className={props.type}
        id={props.type}
        onChange={props.onChange}
      />
  );
}
export default function GeneralInfo() {
  return (
    <section className="general-info">
      <div className="fname-container info-cont">
        <label htmlFor="first-name">First Name :</label>
        <Name type="first-name" onChange={RegisterFuncs.addFirstName} />
      </div>
      <div className="last-container info-cont">
        <label htmlFor="last-name">Last Name :</label>
        <Name type="last-name" onChange={RegisterFuncs.addLastName} />
      </div>
      <div className="email-container info-cont">
        <label htmlFor="email">Email :</label>
        <input
          className="email-inp"
          id="email"
          type="email"
          onChange={RegisterFuncs.addEmail}
        ></input>
      </div>
      <div className="phone-container info-cont">
        <label htmlFor="tel">Phone Number :</label>
        <input
          className="tel-inp"
          id="tel"
          type="tel"
          onChange={RegisterFuncs.addPhone}
        ></input>
      </div>
    </section>
  );
}
