import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";

function Experiences() {
  const { data } = useFetch(`${url}experiences`);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  // Ensure data exists and is an array
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null; // Render nothing if data is not available
  }

  return (
    <div className="experiences-container">
      <SectionTitle title="Experience" className="experiences-section-title" />

      <div className="flex py-10 gap-20 sm:flex-col experiences-list">
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
  );
}

export default Experiences;
