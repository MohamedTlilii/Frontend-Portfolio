import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";

function Projects() {
  const { data } = useFetch(
    "https://backend-portfolio-bxkp.onrender.com/api/data/projects"
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return null; // Render nothing if data is not available
  }

  return (
    <div className="projects-container">
      <SectionTitle title="Projects" className="projects-section-title" />
      <div className="flex py-10 gap-20 sm:flex-col projects-list">
        <ul>
          {data.map((project, index) => (
            <li
              key={index} // Add key prop for each element in the array
              onClick={() => setSelectedItemIndex(index)}
              className={`project-item ${
                selectedItemIndex === index ? "selected" : ""
              }`}
            >
              <h1>{project.title}</h1>
            </li>
          ))}
        </ul>

        <div className="project-details">
          <img
            src={data[selectedItemIndex].image}
            alt=""
            className="project-image"
          />
          <div className="project-description">
            <h1>{data[selectedItemIndex].title}</h1>
            <p>{data[selectedItemIndex].description}</p>

            <a
              style={{ color: " #f97316" }}
              href="https://eco-ride-electric-scooter.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
