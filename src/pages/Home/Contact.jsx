import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";

function Contact() {
  const { data, loading } = useFetch(`${url}contact`); // Modify to get loading state

  return (
    <div className="contact-container">
      <SectionTitle title="Say Hello" className="contact-section-title" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="contact-details">
          {loading && <p>Loading...</p>}
          {!loading && Array.isArray(data) && data.length > 0 && (
            <>
              {data.map((contact) => (
                <div key={contact._id} className="contact-info">
                  <p className="contact-braces">{"{"}</p>

                  <p className="ml-5">
                    <span className="contact-key">Name: </span>
                    <span className="contact-value">{contact.name}</span>
                  </p>
                  <p className="ml-5">
                    <span className="contact-key">Email: </span>
                    <span className="contact-value">{contact.email}</span>
                  </p>
                  <p className="ml-5">
                    <span className="contact-key">Phone: </span>
                    <span className="contact-value">{contact.mobile}</span>
                  </p>
                  <p className="ml-5">
                    <span className="contact-key">Country: </span>
                    <span className="contact-value">{contact.country}</span>
                  </p>
                  <p className="contact-braces">{"}"}</p>
                </div>
              ))}
            </>
          )}
          {!loading && !Array.isArray(data) && <p>No data available</p>}
        </div>
        <div className="contact-animation">
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
