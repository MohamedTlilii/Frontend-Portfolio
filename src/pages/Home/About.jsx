import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
// import "./About.css";

function About() {
  const { data } = useFetch(`${url}about`);
  const { lottieURL, description1, description2, skills } =
    (data && data[0]) || {};

  // console.log("Lottie URL:", lottieURL);

  return (
    <div className="about-container">
      <SectionTitle title="About" className="about-section-title" />
      <div className="about-content">
        <div className="about-lottie">
          {lottieURL && (
            <lottie-player
              src={lottieURL}
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          )}
        </div>
        <div className="about-description">
          <p className="text-white">{description1}</p>
          <p className="text-white">{description2}</p>
        </div>
      </div>
      <div className="about-skills">
        <h1 className="about-skills-title">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="about-skills-list">
          {Array.isArray(skills) &&
            skills.map((skill, index) => (
              <div className="about-skill-item" key={index}>
                <h1 className="about-skill-item-text">{skill}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
