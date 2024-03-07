import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";

function Admin() {
  
  return (
    <div className="admin-container" >
      <Header  />
      <div >
        <Tabs 
          defaultActiveKey="1"
          tabBarStyle={{ color: 'white' }} // Set the color of the tabs to white
          items={[
            {
              label: "Intro",
              key: "1",
              children: <AdminIntro />,
            },
            {
              label: "About",
              key: "2",
              children: <AdminAbout />,
            },
            {
              label: "Experience",
              key: "3",
              children: <AdminExperiences />,
            },
            {
              label: "Projects",
              key: "4",
              children: <AdminProjects />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Admin;
