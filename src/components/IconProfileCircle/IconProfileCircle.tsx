import React from "react";
import "./style.css";
interface Props {
  className: any;
  onClick?: () => void; // เพิ่ม onClick ใน Props
}

export const IconProfileCircle = ({ className, onClick }: Props): JSX.Element => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  return (
    
    <img
      className={`icon-profile-circle ${className}`}
      alt="Icon profile circle"
      src="https://c.animaapp.com/yoh2VfX4/img/---icon--profile-circle--1@2x.png"
      onClick={handleClick} // เรียกใช้งาน onClick ที่ถูกส่งมา
    />
  );
};
