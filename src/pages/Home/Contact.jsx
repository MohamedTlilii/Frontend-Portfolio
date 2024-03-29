import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { url } from "../../utils/url";
import { useFetch } from "../../utils/useFetch";
import { RingLoader } from "react-spinners";

function Contact() {
  const { data, loading } = useFetch(`${url}contact`);

  return (
    <div className="contact-container">
      <SectionTitle title="Say Hello" className="contact-section-title" />

      {loading ? (
        <div className="loading-spinner-container">
          <RingLoader color="#36d7b7" size={100} className="loading-spinner" />
        </div>
      ) : (
        <div className="contact-content">
          <div className="contact-details">
            {Array.isArray(data) && data.length > 0 ? (
              <>
                {data.map((contact) => (
                  <div key={contact._id} className="contact-info">
                    <p className="contact-braces">{"{"}</p>

                    <p className="contact-detail">
                      <span className="contact-key">Name: </span>
                      <span className="contact-value">{contact.name}</span>
                    </p>
                    <p className="contact-detail">
                      <span className="contact-key">Email: </span>
                      <span className="contact-value">{contact.email}</span>
                    </p>
                    <p className="contact-detail">
                      <span className="contact-key">Phone: </span>
                      <span className="contact-value">{contact.mobile}</span>
                    </p>
                    <p className="contact-detail">
                      <span className="contact-key">Country: </span>
                      <span className="contact-value">{contact.country}</span>
                    </p>
                    <p className="contact-braces">{"}"}</p>
                  </div>
                ))}
              </>
            ) : (
              <div className="loading-spinner-container">
                <RingLoader color="#36d7b7" size={80} className="loading-spinner" />
              </div>
            )}
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
      )}
    </div>
  );
}

export default Contact;
