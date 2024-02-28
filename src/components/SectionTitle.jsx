import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="section-title-container">
      <h1 className="section-title-text">{title}</h1>
      <div className="section-title-divider"></div>
    </div>
  );
}

export default SectionTitle;
