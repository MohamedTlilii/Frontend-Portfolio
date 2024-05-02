import React from "react";
// import "./LeftSideBar.scss";

function LeftSider() {
  return (
    <div className="left-sider-container">
      <div className="left-sider-content">
        <div className="left-sider-links">
          <a href="https://www.facebook.com/mohamed.tliliiiii/">
            <i className="ri-facebook-circle-line"></i>
          </a>
          <a href="mailto:mohamedtlili1995@hotmail.com">
            <i className="ri-mail-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-tlili-/">
            <i className="ri-linkedin-box-line"></i>
          </a>
          <a href="https://github.com/MohamedTlilii?tab=repositories">
            <i className="ri-github-line"></i>
          </a>
        </div>
        <div className="left-sider-divider"></div>
      </div>
    </div>
  );
}

export default LeftSider;
