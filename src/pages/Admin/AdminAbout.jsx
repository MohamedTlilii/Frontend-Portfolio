import React, { useState } from "react";
import { Form } from "antd";
import axios from "axios";

function AdminAbout() {
  const [formValues, setFormValues] = useState({
    lottieURL: "", // Correct property name
    description1: "", // Correct property name
    description2: "", // Correct property name
    skills: "", // Correct property name
  });

  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios
      .put(
        "https://backend-portfolio-bxkp.onrender.com/api/data/updateabout/65de86f7d7a7bd8f4664f33a",
        formValues
      )
      .then(() => {
        console.log("Data saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <Form layout="vertical">
        <Form.Item name="lottieURL" label="Lottie URL">
          <input
            placeholder="Lottie URL"
            style={{ width: "99%", height: "30px" }}
            value={formValues.lottieURL} // Correct property name
            onChange={(e) => handleInputChange("lottieURL", e.target.value)} // Pass property name directly
          />
        </Form.Item>

        <Form.Item name="description1" label="Description1">
          <textarea
            placeholder="Description1"
            style={{ width: "99%", height: "100px" }} // Adjust height for textarea
            value={formValues.description1} // Correct property name
            onChange={(e) => handleInputChange("description1", e.target.value)} // Pass property name directly
          />
        </Form.Item>

        <Form.Item name="description2" label="Description2">
          <textarea
            placeholder="Description2"
            style={{ width: "99%", height: "100px" }} // Adjust height for textarea
            value={formValues.description2} // Correct property name
            onChange={(e) => handleInputChange("description2", e.target.value)} // Pass property name directly
          />
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <textarea
            placeholder="Skills"
            style={{ width: "99%", height: "100px" }} // Adjust height for textarea
            value={formValues.skills} // Correct property name
            onChange={(e) => handleInputChange("skills", e.target.value)} // Pass property name directly
          />
        </Form.Item>

        <div>
          <button className="save-button" type="button" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
