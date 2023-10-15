/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

interface Props {
  className: any;
}

export const MaidLogoWhite = ({ className }: Props): JSX.Element => {
  return (
    <Link to="/">
      <div className={`maid-logo-white ${className}`}>
        <div className="overlap-group">
          <img
            className="the-best-home"
            alt="The best home"
            src="https://c.animaapp.com/PnzkDyvI/img/the-best-home-cleaning-service-1-1@2x.png"
          />
          <img
            className="img"
            alt="The best home"
            src="https://c.animaapp.com/PnzkDyvI/img/the-best-home-cleaning-service--1--1-1@2x.png"
          />
        </div>
      </div>
    </Link>
  );
};


export const MaidLogoWhite2 = ({ className }: Props): JSX.Element => {
  return (
    <Link to="/HomePage2">
      <div className={`maid-logo-white ${className}`}>
        <div className="overlap-group">
          <img
            className="the-best-home"
            alt="The best home"
            src="https://c.animaapp.com/PnzkDyvI/img/the-best-home-cleaning-service-1-1@2x.png"
          />
          <img
            className="img"
            alt="The best home"
            src="https://c.animaapp.com/PnzkDyvI/img/the-best-home-cleaning-service--1--1-1@2x.png"
          />
        </div>
      </div>
    </Link>
  );
};
