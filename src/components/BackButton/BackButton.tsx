/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";
import { Group } from "../Group";
import "./style.css";

interface Props {
  className: any;
}

export const BackButton = ({ className }: Props): JSX.Element => {
  const handleClick = () => {
    // Reset scrolling to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <Link className={`back-button ${className}`} to="/LoginPage" onClick={handleClick}>
      <Group className="group-instance" />
    </Link>
  );
};

export const BackButton2 = ({ className }: Props): JSX.Element => {
  const handleClick = () => {
    // Reset scrolling to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <Link className={`back-button ${className}`} to="/" onClick={handleClick}>
      <Group className="group-instance" />
    </Link>
  );
};

export const BackButton3 = ({ className }: Props): JSX.Element => {
  const handleClick = () => {
    // Reset scrolling to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <Link className={`back-button ${className}`} to="/SignUpPage" onClick={handleClick}>
      <Group className="group-instance" />
    </Link>
  );
};

export const BackButton4 = ({ className }: Props): JSX.Element => {
  const handleClick = () => {
    // Reset scrolling to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <Link className={`back-button ${className}`} to="/HomePage2" onClick={handleClick}>
      <Group className="group-instance" />
    </Link>
  );
};

export const BackButton5 = ({ className }: Props): JSX.Element => {
  const handleClick = () => {
    // Reset scrolling to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <Link className={`back-button ${className}`} to="/BookingPage" onClick={handleClick}>
      <Group className="group-instance" />
    </Link>
  );
};

export const BackButton6 = ({ className }: Props): JSX.Element => {
  const handleClick = () => {
    // Reset scrolling to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <Link className={`back-button ${className}`} to="/BookingPage2" onClick={handleClick}>
      <Group className="group-instance" />
    </Link>
  );
};