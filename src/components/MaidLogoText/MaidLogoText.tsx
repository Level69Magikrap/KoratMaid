/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const MaidLogoText = ({ className }: Props): JSX.Element => {
  return (
    <div className={`maid-logo-text ${className}`}>
      <img className="img" alt="Maid logo text" src="https://c.animaapp.com/y4PKkXRU/img/maid-logo-text-1@2x.png" />
    </div>
  );
};
