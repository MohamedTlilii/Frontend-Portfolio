import React from "react";
// import { useSelector } from "react-redux";

function Intro() {
  // const { intro } = portfolioData;
  // const { welcomeText, firstName, lastNmae, caption, description } = intro;
  return (
    <div className=" h-[80vh] flex flex-col items-start justify-center gap-8 ">
      <h1 className=" text-white text-4xl  font-semibold">
        {/* {welcomeText} */}
      </h1>
      <h1 className=" text-7xl sm:text-3xl text-secondary font-semibold">
        {/* {firstName || ''} {lastNmae || ''} */}
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        {/* {caption || ''} */}
      </h1>
      <p className="text-white w-2/3 text-lg md:text-xl">
       {/* {description || ''} */}
      </p>
      <button className=" border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
