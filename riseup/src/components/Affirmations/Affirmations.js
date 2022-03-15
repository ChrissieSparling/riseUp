import React from "react";
import "../Affirmations/affirmations.css";
import "../Affirmations/Affirmations";

function Affirmations(props) {
  return (
    <div>
      <div className="affirmations-container">
        <div className="teddy">
          <div className="affJumbo">
            <h1 className="tinaTitle">🌻 Welcome Sunflowers 🌻</h1>
          </div>
        </div>
      </div>
      <h2 className="affWords1">
        You did not end up here by accident. You're here to take control over
        your life. Your existence. And it is easy! All it takes is one very
        simple step. RECOGNIZE YOUR VALUE! We DO! RiseUp - the world needs all
        of us to embrace ourselves with loving arms, accept our POWERFUL
        EXISTENCE, and extend that respect to ALL.
      <hr></hr>
        Once you sign up feel free to use the forum to post requests for advice
        or just share stories. Get words of encouragement by selecting the boxes
        below. You can also create your personal self care checklist on your
        profile page. Become a sunflower by signing up TODAY!
      </h2>
    </div>
  );
}

export default Affirmations;
