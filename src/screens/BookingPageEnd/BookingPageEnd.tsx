import React,{useState} from "react";
import { Buttonn} from "../../components/Button";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MaidLogoWhite2 } from "../../components/MaidLogoWhite/MaidLogoWhite";

export const BookingPageEnd = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;;
  const params = new URLSearchParams(location.search);
  const userId = params.get('id');

  return (
    <div className="bookingPageEnd">
      <div className="div">
        <div className="overlap">
          <div className="flexcontainer">
            <div className="text">
              <span className="text-wrapper">
                Booking
              </span>
            </div>
            <div className="text">
              <span className="text-wrapper">Success!</span>
            </div>
          </div>
          <Link to={`/HomePage2?id=${userId}`}>
            <Buttonn buttonTextClassName="button-instance" className="login-button" text="Home" />
          </Link>
          <p className="p">
            Thank you for your payment! Your booking was successful, and your service request is now in process. You can
            check the history of your booking in your account dashboard.
          </p>
        </div>

        <MaidLogoWhite2 className="maid-logo-white-instance" />

      </div>
    </div>
  );
};
