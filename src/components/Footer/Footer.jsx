import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-info">
          <div className="top">
            <p>
              &copy;  2024 Guilherme Rozenblat. All rights reserved.
            </p>

          </div>
          <div className="bottom">
            <div className="textfooter">
              <p>Developed by Guilherme Rozenblat</p>
            </div>

            <div className="local">
              <p>Rio de Janeiro, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
