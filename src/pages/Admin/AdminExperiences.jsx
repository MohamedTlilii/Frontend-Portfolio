// import { Form, Modal, message } from "antd";
import React from "react";
// import axios from "axios";

function AdminExperiences() {
  // console.log(portfolioData, "hgvjh");

  // console.log(selectedItemForEdit);

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          // onClick={() => {
          //   setShowAddEditModal(true);
          //   setSelectedItemForEdit(null);
          // }}
        >
          Add Exprience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {/* {experiences.map((experience) => ( */}
        <div
          className="shadow border p-5 border-gray-400 flex flex-col gap-5 mt-5"
          // key={experience.id}
        >
          <h1 className="text-primary text-xl font-bold ">
            {/* {experience.period} */}
          </h1>
          <br />
          <h1>Company : 
            {/* {experience.company} */}
            </h1>
          <h1>Role : 
            {/* {experience.title} */}
            </h1>
          <h1> 
            {/* {experience.description} */}
          </h1>
          <div className="flex justify-end gap-5">
            <button
              className="bg-red-500 text-white px-5 py-2 "
              // onClick={() => {
              //   onDelete(experience);
              // }}
            >
              Delete
            </button>
            <button
              className="bg-primary text-white px-5 py-2 "
              // onClick={() => {
              //   setSelectedItemForEdit(experience);
              //   setShowAddEditModal(true);
              //   setType("edit");
              // }}
            >
              Edit
            </button>
          </div>
        </div>
        {/* ))} */}
      </div>
      
    </div>
  );
}

export default AdminExperiences;
