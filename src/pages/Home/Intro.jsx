import React from "react";
// import { useSelector } from "react-redux";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
import { RingLoader } from "react-spinners";
// import "./App.css"; // Importing the CSS file

function Intro() {
  const { data, loading } = useFetch(`${url}intro`); // Modify to get loading state
  const { welcomeText, firstName, lastName, caption, description } =
    (data && data[0]) || {};

  return (
    <div className="intro-container">
      {loading ? ( // Display loader only when loading is true
        <div className="loading-spinner-container">
          <RingLoader color="#36d7b7" size={80} className="loading-spinner" />
        </div>
      ) : (
        <React.Fragment>
          <h1 className="intro-welcome-text">{welcomeText}</h1>
          <h1 className="intro-name">
            {firstName || ""} {lastName || ""}
          </h1>
          {/* <h1 className="intro-caption">{caption || ""}</h1> */}
          <p className="intro-description">{description}</p>
        </React.Fragment>
      )}
      <button className="intro-button">Get Started</button>
      
    </div>
  );
}

export default Intro;
