import React from "react";
import "./NewPost.css";

const Write = () => {
  return (
    <div className="write">
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
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>

      </form>
    </div>
  );
};

export default Write;
