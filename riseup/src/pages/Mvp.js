import React from "react";
import Post from "../components/Posts/Post";
import Sidebar from "../components/Sidebar/Sidebar";
import "../css/mvp.css"

const Mvp = () => {
  return (
    <>
      <div className="mvp">
        <Post />
        <Sidebar />
      </div>
    </>
  );
};

export default Mvp;
