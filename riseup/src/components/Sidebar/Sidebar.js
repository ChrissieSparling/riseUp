import React from "react";
import "../Sidebar/sidebar.css";

const Sidebar = () => {
  return (
      <div className="sidebar">
      <div className="sidebarItem">
        <span >
            <h1 className="sidebarTitle">Important Links</h1></span>
        <a className="sideBtn">Crisis Link</a>
        <a className="sideBtn">Support Group</a>
        <a className="sideBtn">Therapist</a>
      </div>
      </div>
  );
};

export default Sidebar;
