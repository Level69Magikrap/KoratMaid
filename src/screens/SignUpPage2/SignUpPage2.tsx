import React ,{useState} from "react";
import { Buttonn } from "../../components/Button";
import { MaidLogoWhite } from "../../components/MaidLogoWhite";
import { Link } from "react-router-dom";
import "./style.css";
import { BackButton3 } from "../../components/BackButton/BackButton";
import { message, Space } from 'antd';
import {  useNavigate } from 'react-router-dom';

// กำหนดค่าเริ่มต้นของ message
message.config({
  maxCount: 1, // จำกัดจำนวน message ที่แสดงพร้อมกันได้
});
export const SignUpPage2 = (): JSX.Element => {
   const [messageApi, contextHolder] = message.useMessage();
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false); // เพิ่ม state สำหรับการตรวจสอบว่ากำลังโหลดหรือไม่

   const success = () => {
     messageApi.open({
       type: 'success', 
       content: 'Create account success!',
     });
 
     setIsLoading(true); // กำหนดให้ isLoading เป็น true เมื่อแสดงข้อความ success
 
     // ใช้ setTimeout เพื่อเรียกใช้งานการเปลี่ยนหน้าหลังจากระยะเวลาที่กำหนด (เช่น 2000 มิลลิวินาทีหรือ 2 วินาที)
     setTimeout(() => {
       navigate('/LoginPage');
     }, 2000); // 2 วินาที
   };





  return (
    <div className="sign-up-page2">
      <div className="div">
        <MaidLogoWhite className="maid-logo-white-instance" />
        <div className="overlap">
          {/*=================================================================================== */}
          <div className="text-wrapper">Street Address</div>
          <div className="text-wrapper-2">House Number</div>
          <div className="text-wrapper-3">District</div>
          <div className="text-wrapper-4">Postal Code</div>
          <p className="more">More details for your address</p>
          <div className="text-wrapper-5">Province</div>
          <div className="text-wrapper-6">Village</div>
          <div className="text-wrapper-7">Add your address</div>
          <div className="text-wrapper-8">Sub-district</div>
          
          <div className="housenum-textbox" />
          <div className="village-textbox" />
          <div className="street-textbox" />
          <div className="postal-textbox" />
          <div className="subd-textbox" />
          <div className="overlap-2">
            <div className="district-textbox" />
            <div className="province-textbox" />
            <div className="text-wrapper-9">นครราชสีมา</div>
            <div className="text-wrapper-10">เมืองนครราชสีมา</div>
          </div>
          <div className="more-textbox" />
          {/*=================================================================================== */}
          <>
      {contextHolder}
      <Space>
         
          <Buttonn buttonTextClassName="button-instance"  onClick={success} className="create-button" text="Create Account" />
        

          </Space>
    </>
          <Link to="SignUpPage">
            <BackButton3 className="back-button-instance" />
          
          </Link>
        </div>
      </div>
    </div>
  );
};
