import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
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
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;