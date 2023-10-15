/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  buttonTextClassName: any;
  text: string;
  onClick?: () => void;
}



export const Buttonn = ({ className, buttonTextClassName, text = "TEXT" ,onClick }: Props): JSX.Element => {
  const handleClick = () => {
    // Reset scrolling to the top of the page
    window.scrollTo(0, 0);
    if (onClick) {
      onClick();
    }
  }


  return (
    <button className={`button ${className}`} onClick={handleClick}>
      <div className={`button-text ${buttonTextClassName}`} >{text}</div>
    </button>
  );
};

Buttonn.propTypes = {
  text: PropTypes.string,
};

