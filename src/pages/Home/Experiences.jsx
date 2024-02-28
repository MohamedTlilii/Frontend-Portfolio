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
    <div>
      <SectionTitle title="Experience" />

      <div className=" flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {data.map((experience, index) => (
            <div
              key={index} // Add key prop for each element in the array
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 "
                     : "text-white"
                 }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {data[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-2xl">
            {data[selectedItemIndex].company}
          </h1>
          <p className="text-white text-2xl">
            {data[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
