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
              Crisis Hotline
            </a>
            <p className="crisisDesc">Crisis hotline and resources</p>
            <a
              className="crisisLink"
              target="_blank"
              href="https://www.apa.org/topics/crisis-hotlines"
            >
              https://www.apa.org/topics/crisis-hotlines
            </a>
          </div>

          <div className="crisisBtn">
            <a
              className="crisisLinkName"
              target="_blank"
              href="https://finder.psychiatry.org/?_ga=2.20744058.392515291.1646800358-1644409809.1646800358"
            >
              Psychiatrist
            </a>
            <p className="crisisDesc">Find a psychiatrist in your local area</p>
            <a
              className="crisisLink"
              target="_blank"
              href="https://finder.psychiatry.org/?_ga=2.20744058.392515291.1646800358-1644409809.1646800358"
            >
              https://finder.psychiatry.org/?_ga=2.20744058.392515291.1646800358-1644409809.1646800358
            </a>
          </div>

          <div className="crisisBtn">
            <a
              className="crisisLinkName"
              target="_blank"
              href="https://www.nami.org/Support-Education"
            >
              Support Groups
            </a>
            <p className="crisisDesc">Find a support group for you</p>
            <a
              className="crisisLink"
              target="_blank"
              href="https://www.nami.org/Support-Education"
            >
              https://www.nami.org/Support-Education
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crisis;