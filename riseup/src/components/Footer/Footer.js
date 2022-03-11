import React from "react";
import "../Footer/footer.css";

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
                  Terms Of Service
                </a>
                <a href="#" className="footTag">
                  Privacy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
