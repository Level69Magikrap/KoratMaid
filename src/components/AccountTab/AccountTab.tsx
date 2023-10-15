/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

interface Props {
  property1: "default";
  className: any;
}

export const AccountTab = ({ property1, className }: Props): JSX.Element => {
  const location = useLocation();
  const id = location.state?.id;
  const params = new URLSearchParams(location.search);
  const userId = params.get('id');
  return (
    <div className={`account-tab ${className}`}>
      <Link to={`/ProfilePage2?id=${userId}`}><div className="text-wrapper">Address</div></Link>
      <img className="line" alt="Line" src="https://c.animaapp.com/p8A4OecU/img/line-37-1@2x.png" />
      <img className="line-2" alt="Line" src="https://c.animaapp.com/p8A4OecU/img/line-37-1@2x.png" />
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            {/* <div className="rectangle-2" />   grey-navigator */}
            <div className="rectangle-3" />   {/*blue-navigator*/}
          </div>
        </div>
        <Link to={`/ProfilePage?id=${userId}`}><div className="text-wrapper-2">Profile</div></Link>
      </div>
    </div>
  );
};

AccountTab.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};

export const AccountTab2 = ({ property1, className }: Props): JSX.Element => {
  const location = useLocation();
  const id = location.state?.id;
  const params = new URLSearchParams(location.search);
  const userId = params.get('id');
  return (
    
    <div className={`account-tab2 ${className}`}>
      <Link to={`/ProfilePage2?id=${userId}`}><div className="text-wrapper">Address</div></Link>       
      <img className="line" alt="Line" src="https://c.animaapp.com/p8A4OecU/img/line-37-1@2x.png" />
      <img className="line-2" alt="Line" src="https://c.animaapp.com/p8A4OecU/img/line-37-1@2x.png" />
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            {/* <div className="rectangle-2" />   grey-navigator */}
            <div className="rectangle-3" />   {/*blue-navigator*/}
          </div>
        </div>
        <Link to={`/ProfilePage?id=${userId}`}><div className="text-wrapper-2">Profile</div></Link>     
      </div>
    </div>

  );
};

AccountTab2.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};

