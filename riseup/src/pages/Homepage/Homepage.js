import React from 'react'
import "./homepage.css"
import happyImg from "../../assets/images/happyFlower.png";
import { useState } from "react";
import Affirmations from "../../components/Affirmations/Affirmations";
import Accordion from "../../components/Accordion/Accordion";



const HomePage = (props) => {


  return (
    <div>
      <Affirmations />
      <Accordion />

      <div className="postsHome">
        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
              <span className="postTitleHome"><a className="homeAffLinks" href="../MotPages">Motivation</a></span>
              <hr />

              <p className="postSubHome">
              Get Motivated everyday by subscribing to our community. WeRiseUpToday has one goal! Helping you improve your life by reaching out to a community that appreciates you. We want to give you encouragement to be that ideal person you want to be.
              </p>
            </div>
          </div>
        </div>

        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
              <span className="postTitleHome"><a className="homeAffLinks" href="../Phil">Philosophy</a></span>
              <hr />

              <p className="postSubHome">
              In order to get started on this journey, we need to be able to identify the real problems facing us. All problems are a matter of perspective. The better we understand our own perspectives, we are able to embark on the next phase of our journey. WeRiseUpToday will give you insight to our experiences, how we deal with things. It is always up to you on how you precieve this experience, but our gaurantee to you is that we will always strive to help you find silver linings by providing you pick me up's when you need them.
              </p>
            </div>
          </div>
        </div>
        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
              <span className="postTitleHome"><a className="homeAffLinks" href="../InspirPage">Inspiration</a></span>
              <hr />

              <p className="postSubHome">
              WeRiseUpToday was Inspired by YOU! The world has seen some dark days and we have every intention of shining bright lights into that darkness by helping that one person in your life who matters most. YOU!
              </p>
            </div>
          </div>
        </div>
        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
              <span className="postTitleHome"><a className="homeAffLinks" href="../AspirationPage">Aspirations</a></span>
              <hr />

              <p className="postSubHome">
              We believe in Dreams. More than that, we Want to SEE your dreams come true. When you join every day you will access to a community who wants nothing more than to see you thrive. Get quotes, images, ideas, or send us an email and tell us what you'd like to see here to make your goals more achieveable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
