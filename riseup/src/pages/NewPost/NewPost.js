import React from "react";
import "./NewPost.css";

const Write = () => {
  return (
    <div className="write">
      <h1>What's on your mind?</h1>
      <form className="writeForm">
           {/* img future dev */}
        {/* <div className="writeFormGroup">
           
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          /> 
        </div> */}
        <div className="writFormGroup">
          <input className="writeInput writeText NPtitle" type="text" placeholder="Give it a title..."></input>
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>

      </form>
    </div>
  );
};

export default Write;
