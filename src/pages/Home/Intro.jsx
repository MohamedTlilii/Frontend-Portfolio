import React from "react";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
import { RingLoader } from "react-spinners";

function Intro() {
  const { data, loading } = useFetch(`${url}intro`);
  console.log(data);
  const { welcomeText, firstName, lastName, description } =
    (data && data[0]) || {};

  return (
    <div className="intro-container">
      {loading ? (
        <div className="loading-spinner-container">
          <RingLoader color="#36d7b7" size={100} className="loading-spinner" />
        </div>
      ) : (
        <React.Fragment>
          <h1 className="intro-welcome-text">{welcomeText}</h1>
          <h1 className="intro-name">
            {firstName || ""} {lastName || ""}
          </h1>
          <p className="intro-description">{description}</p>
        </React.Fragment>
      )}
      <a
        href="https://www.canva.com/design/DAF2zhCGAYM/upyjBwucq8HA-9GUMfq5Yw/view?utm_content=DAF2zhCGAYM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        className="intro-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}

export default Intro;
