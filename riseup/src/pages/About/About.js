import React from "react";
import "../About/about.css";
import Chrissie from "../../assets/images/chrissie.jpg";
import Denise from "../../assets/images/deniprof.jpg";
import Loop from "../../assets/images/loop.jpg";
import Nile from "../../assets/images/nile.jpg";
import buttflr from "../../assets/images/ButterflySunflower.png";

const About = (props) => {
  return (
    <div className="about-us-box">
      <div className="aboutUs">About Us</div>
      <div className="postsAbout">
        <div className="postAbout2">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Chrissie} />
              <span className="postTitleAbout">Chrissie Sparling</span>
              <hr />
              <p className="postSubAbout">
                A charismatic and inspiring soul as well as as the inspiration
                for this project. She worked on the front-end, back-end, and
                wrote all of the affiramtions.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="hover-container">
            <div class="left wing"></div>
            <div class="right wing"></div>
            <div class="body"></div>
            <div class="head"></div>
          </div>
        </div>
        <div className="postAbout2">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Denise} />
              <span className="postTitleAbout">Denise Arevalo</span>
              <hr />
              <p className="postSubAbout">
                Quick as a whip and sharp as a tack. She was one of the major
                back-end developers and the designer of the Self Care Checklist.
              </p>
            </div>
          </div>
        </div>
        <div className="postAbout2">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Loop} />
              <span className="postTitleAbout">Heather Loop</span>
              <hr />
              <p className="postSubAbout">
                This wild one is a true blue front-end developer. She brings you
                color and style!
              </p>
            </div>
          </div>
        </div>
        <div className="postAbout2">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Nile} />
              <span className="postTitleAbout">Nile Clark</span>
              <hr />
              <p className="postSubAbout">
                The lady with all the answers and always there to lend a helping
                hand! She was the lead back-end developer, front-end developer
                and teacher.
              </p>
            </div>
          </div>
        </div>
        <div className="mission">
          <p>Rise Up is here to empower, inform, inspire and nurture our fellow
          sunflowers to find help and positivity; We Rise Up Today!</p>
          <img className= "buttflr" src={buttflr} alt= "buttflower" ></img>
          <p>As we go through life we face some ups and downs. Sometimes when we
          are in a down it's hard for us to see the light. Here at Rise Up, our
          mascot is the sunflower because we RISE UP to see the light in any
          given situation. As Rise Up sunflowers you can get support from one
          another. As well as find resources for mental health professionals.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
