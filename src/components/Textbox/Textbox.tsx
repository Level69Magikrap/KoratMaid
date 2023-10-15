/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  textboxShowTextClassName: any;
  text: string;
}

export const Textbox = ({ className, textboxShowTextClassName, text = "textbox" }: Props): JSX.Element => {
  return (
    <div className={`textbox ${className}`}>
      <div className={`textbox-show-text ${textboxShowTextClassName}`}>{text}</div>
    </div>
  );
};

Textbox.propTypes = {
  text: PropTypes.string,
};
