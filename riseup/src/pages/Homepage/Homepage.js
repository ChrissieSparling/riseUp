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
              <span className="postTitleHome">Motivations</span>
              <hr />

              <p className="postSubHome">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, maiores iusto perspiciatis, minus vel veniam debitis
                magni praesentium, excepturi nisi sint. Ab aut numquam
                temporibus, facilis vitae illum quae quibusdam.lit. Quaerat,
                maiores iusto perspiciatis, minus vel veniam debitis magni
                praesentium, excepturi nisi sint. Ab aut numquam temporibus,
                facilis vitae illum quae quibusdam.
              </p>
            </div>
          </div>
        </div>

        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
              <span className="postTitleHome">Philosophy</span>
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
              <span className="postTitleHome">Inspirations</span>
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
              <span className="postTitleHome">Aspirations</span>
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
