import React from "react";

import Post from "../../components/Posts/Post";
import Sidebar from "../../components/Sidebar/Sidebar";
import "../Forum/forum.css"


const Forum = () => {
  return (
    <>
      <div className="forum">
     
        <Post />
        <Sidebar />
      </div>
    </>
  );
};

export default Forum;
