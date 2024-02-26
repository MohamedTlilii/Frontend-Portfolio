import React from "react";
import { Form } from "antd";
// import { ShowLoading, HideLoading } from "../../redux/rootSlice";
// import axios from "axios";

function AdminAbout() {
 
  return (
    <div>
      <Form
        // onFinish={onFinish}
        layout="vertical"
        // initialValues={{
        //   ...portfolioData.abouts,
        //   skills: portfolioData.abouts.skills.join(" , "),
        // }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>

        <Form.Item name="description1" label="Description1">
          <textarea placeholder="Description1" />
        </Form.Item>

        <Form.Item name="description2" label="Description2">
          <textarea placeholder="Description2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full " label="Welcome Text">
          <button className="px-10 py-2 bg-primary text-white " type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
