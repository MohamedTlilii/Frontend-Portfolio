import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
 
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {/* {Object.keys(contacts).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary"> {contacts[key]}</span>
            </p>
          ))} */}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[500px]">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
