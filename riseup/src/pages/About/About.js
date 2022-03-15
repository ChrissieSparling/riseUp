import React from 'react'
import "../About/about.css"
import Chrissie from '../../assets/images/chrissie.jpg'
import Denise from '../../assets/images/deniprof.jpg'
import Loop from '../../assets/images/loop.jpg'
import Nile from '../../assets/images/nile.jpg'
const About = (props) => {
  return (
    <div className='about-us-box'>
     <div className="aboutUs">About Us</div>
      <div className="postsAbout">
        <div className="postAbout2">
          <div className="postInfoAbout">
            <div className="postCatsAbout">
              <img className="aboutImg" src={Chrissie} />
              <span className="postTitleAbout">Chrissie Sparling</span>
              <hr />
              <p className="postSubAbout">
                A charismatic and inspiring soul as well as as the inspiration for this project. She worked on the front-end, back-end, and wrote all of the affiramtions.
              </p>
            </div>
          </div>
        </div>
        
{/* butterfly */}
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
                Quick as a whip and sharp as a tack. She was one of the major back-end develpoers and the designer of the Self Care Checklist.
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
               This wild one is a true blue front-end developer. She brings you color and style!
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
                The lady with all the answers and always there to lend a helping hand! She was the lead back-end developer, front-end developer and teacher.
              </p>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};
export default About;