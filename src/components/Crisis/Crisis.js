import React from "react";
import "./crisis.css";

const Crisis = () => {
  return (
    <div className="crisisBackground">
      <div className="crisis">
        <div className="crisisBox">
          <span>
            <h1 className="crisisTitle">Crisis Links</h1>
          </span>

          <div className="crisisBtn">
            <a
              className="crisisLinkName"
              target="_blank"
              href="https://www.apa.org/topics/crisis-hotlines"
            >
              Crisis Hotline Link
            </a>
            <p className="crisisDesc">Crisis hotline and resources</p>
      
          </div>

          <div className="crisisBtn">
            <a
              className="crisisLinkName"
              target="_blank"
              href="https://finder.psychiatry.org/?_ga=2.20744058.392515291.1646800358-1644409809.1646800358"
            >
             American Psychiatrist Association Link
            </a>
            <p className="crisisDesc">Find a psychiatrist in your local area</p>
            
          </div>

          <div className="crisisBtn">
            <a
              className="crisisLinkName"
              target="_blank"
              href="https://www.nami.org/Support-Education"
            >
              National Alliance on Mental Illness Link
            </a>
            <p className="crisisDesc">Find a support group for you</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crisis;