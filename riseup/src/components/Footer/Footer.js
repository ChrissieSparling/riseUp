import React from "react";
import "../Footer/footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="main-footer">
      <div className="containerFooter">
        <div className="column">
          <div className="row">
            {/* Column1 */}

            <div className="col">
              <h4 className="list-unstyled">
                🌻Created by: Chrissie, Denise, Heather, Nile🌻
              </h4>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()} Rise Up | All rights reserved |
                <a href="#" className="footTag">
                  Terms Of Service{" "}
                </a>
                |{" "}
                <a href="#" className="footTag">
                  Privacy
                </a>
              </p>
            </div>
            <div className="socialFooter">
              <SocialIcon
                className="socialFoot"
                network="instagram"
                bgColor="#e6dddd"
                style={{ height: 25, width: 25 }}
                target="_blank"
                url="https://www.instagram.com/weriseuptoday/"
              />
              <SocialIcon
                className="socialFoot"
                network="spotify"
                bgColor="#e6dddd"
                style={{ height: 25, width: 25 }}
                target="_blank"
                url="https://open.spotify.com/user/31wpgbh5wy6ar4oh4q5z6ex4ctji"
              />
              <SocialIcon
                className="socialFoot"
                network="twitter"
                bgColor="#e6dddd"
                style={{ height: 25, width: 25 }}
                target="_blank"
                url="https://twitter.com/weriseuptoday"
              />
            </div>

            <div className="crisisFooter">
              <a className="crisisLinkFoot" href="/crisis">
                Crisis Links
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
