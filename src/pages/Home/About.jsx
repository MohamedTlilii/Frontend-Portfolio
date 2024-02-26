import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  
  // const {abouts} = portfolioData 
  // const { skills,lottieURL, description1, description2 } = abouts;

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center gap-10 sm:flex-col">
        <div className="h-[60vh] w-1/2 sm:w-full">
          {/* Use camelCase for HTML elements */}
          <lottie-player
            // src={lottieURL}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          {/* Render description paragraphs */}
          <p className="text-white">
            {/* {description1 } */}
          </p>
          <p className="text-white">
            {/* {description2 } */}
            </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {/* Map over skills only if it's an array */}
          {/* {Array.isArray(skills) &&
            skills.map((skill, index) => (
              <div className="border border-tertiary py-3 px-10" key={index}>
                <h1 className="text-tertiary">{skill}</h1>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default About;
