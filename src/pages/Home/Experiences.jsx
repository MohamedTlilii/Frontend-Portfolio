import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
import { RingLoader } from "react-spinners";

function Experiences() {
  const { data, loading } = useFetch(`${url}experiences`);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  // Ensure data exists and is an array
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null; // Render nothing if data is not available
  }

  return (
    <div className="experiences-container">
      <SectionTitle title="Experience" className="experiences-section-title" />

      {loading ? (
        <div className="loading-spinner-container">
          <RingLoader color="#36d7b7" size={100} className="loading-spinner" />
        </div>
      ) : (
        <div className="flex-container">
          <ul>
            {data.map((experience, index) => (
              <li
                key={index} // Add key prop for each element in the array
                onClick={() => setSelectedItemIndex(index)}
                className={`experience-item ${
                  selectedItemIndex === index ? "selected" : ""
                }`}
              >
                <h1>{experience.period}</h1>
              </li>
            ))}
          </ul>

          <div className="experience-details">
            <img 
            src={data[selectedItemIndex].image}
            alt=""
            className="experience-image" />
            <div>
              <h1 className="experience-title">{data[selectedItemIndex].title}</h1>
              <h1 className="experience-company">
                {data[selectedItemIndex].company}
              </h1>
              <p className="experience-description">
                {data[selectedItemIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experiences;
