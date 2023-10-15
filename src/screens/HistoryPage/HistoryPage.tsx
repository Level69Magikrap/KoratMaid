import React from "react";
import { BackgoundWhite } from "../../components/BackgoundWhite";
//import { Button } from "../../components/Button";
import { IconHome } from "../../components/IconHome";
import "./style.css";
//import { Link } from "react-router-dom";

export const HistoryPage = (): JSX.Element => {
  return (
    <div className="history-page">
      <div className="div-4">
        <div className="overlap-2">
            <BackgoundWhite className="backgound-white-default" />
            {/*Add your Code here nakaaa*/}
     
            
            <div className="text-wrapper-9">Booking history</div>
            <IconHome className="icon-home-2" />
        </div>
      </div>
    </div>
  );
};