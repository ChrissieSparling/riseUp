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
              <span className="postTitleHome">Inspirations</span>
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
              <span className="postTitleHome">Aspirations</span>
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
      </div>
    </div>
  );
};

export default HomePage;
