import React, { useState } from "react";
import { Form } from "antd";
import axios from "axios";
import { urlAdmin } from "../../utils/url";

function AdminIntro() {
  const [formValues, setFormValues] = useState({
    welcomeText: "",
    firstName: "",
    lastName: "",
    caption: "",
    description: "",
  });
  console.log(formValues);

  const handleInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSave = (id) => {
    console.log("Sending request to URL:", `${urlAdmin}/updateintro`);
    console.log("Data to be sent:", formValues);

    // Send formValues to the server
    axios.put(`${urlAdmin}/updateintro`,id, formValues)
      .then(() => {
        console.log("Data saved successfully!");
      })
      .catch(error => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <Form layout="vertical">
        <Form.Item name="welcomeText" label="Welcome Text">
          <input
            name="welcomeText"
            placeholder="Welcome Text"
            style={{ width: "99%", height: "30px" }}
            value={formValues.welcomeText}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input
            name="firstName"
            placeholder="First Name"
            style={{ width: "99%", height: "30px" }}
            value={formValues.firstName}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input
            name="lastName"
            placeholder="Last Name"
            style={{ width: "99%", height: "30px" }}
            value={formValues.lastName}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input
            name="caption"
            placeholder="Caption"
            style={{ width: "99%", height: "30px" }}
            value={formValues.caption}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea
            name="description"
            placeholder="Description"
            style={{ width: "99%", height: "90px" }}
            value={formValues.description}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </Form.Item>
        <div>
          <button className="save-button" type="submit" onClick={()=>{
            handleSave()
          }}>
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
