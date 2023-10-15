/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const IconEdit = ({ className }: Props): JSX.Element => {
  return (
    <img
      className={`icon-edit ${className}`}
      alt="Icon edit"
      src="https://c.animaapp.com/p8A4OecU/img/---icon--edit-2--5@2x.png"
    />
  );
};
