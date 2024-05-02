import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
// import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
import { RingLoader } from "react-spinners";

function Projects() {
  const { data, loading } = useFetch(
    "https://backend-portfolio-bxkp.onrender.com/api/data/projects"
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  // Log data to the console
  // useEffect(() => {
  //   console.log("Fetched Data:", data);
  // }, [data]);
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null; // Render nothing if data is not available
  }

  return (
    <div className="projects-container">
      <SectionTitle title="Projects" className="projects-section-title" />
      {loading ? (
        <div className="loading-spinner-container">
          <RingLoader color="#36d7b7" size={100} className="loading-spinner" />
        </div>
      ) : (
        <div className="projects-list">
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
              <div>
                <a
                  className="project-link"
                  href={data[selectedItemIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </div>


              <div className="technologies-list" style={{ marginTop: '20px' }}>
  <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Technologies:</h2>
  <ul style={{ listStyleType: 'none', padding: '0' }}>
    {data[selectedItemIndex].technologies.map((tech, index) => (
      <li
        key={index}
        style={{
          display: 'inline-block',
          marginRight: '10px',
          padding: '5px 10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          color: '#000', // Set text color to black
        }}
      >
        {tech}
      </li>
    ))}
  </ul>
</div>










            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
