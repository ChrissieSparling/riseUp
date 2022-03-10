import React from "react";
import "../Sidebar/sidebar.css";

const Sidebar = () => {
  return (
      <div className="sidebar">
      <div className="sidebarItem">
        <span >
            <h1 className="sidebarTitle">Important Links</h1></span>
        <a href="https://www.apa.org/topics/crisis-hotlines" className="sideBtn">Crisis Link</a>
        <a href="https://www.nami.org/Support-Education" className="sideBtn">Support Group</a>
        <a href="https://finder.psychiatry.org/?_ga=2.20744058.392515291.1646800358-1644409809.1646800358" className="sideBtn">Therapist</a>
      </div>
      </div>
  );
};

export default Sidebar;
