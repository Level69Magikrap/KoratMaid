import React,{ useState, useEffect } from 'react';
import qrcode from '../../image/qrcode.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { message, Upload,Button,Form} from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import { PaymentInterface } from "../../interfaces/ball/payment";
import { CreatePayment,GetService } from "../../services/http/ball";
import { ServiceInterface } from "../../interfaces/ball/service";




export const BookingPage3 : React.FC = () => {
  
  const location = useLocation();
  const id = location.state?.id;;
  const params = new URLSearchParams(location.search);
  const userId = params.get('id');
  
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [services, setServices] = useState<ServiceInterface[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  
  const getServices = async () => {
    let res = await GetService();
    if (res) {
      setServices(res);
    }
  };


  useEffect(() => {
    getServices();
  },[]);

  const onFinish = async(values: PaymentInterface) => {
    values.Image = image || '';
    values.Service = services[services.length - 1]
    let res = await CreatePayment(values);
    console.log(values);
    console.log(res.message);
    if(res.status){
      message.open({
        type:"success",
        content:"อัปโหลดสำเร็จ",
      })
      setTimeout(function(){
        navigate(`/BookingPageEnd?id=${userId}`);
      },500);
    }else{
      message.open({
        type:"error",
        content:"อัปโหลดไม่สำเร็จ",
      })
    }
    
  }


  function onChange(info : any) {
    info.file.status = 'Done';
    let s = info.file.originFileObj;
    const a = new FileReader();
    a.onload = function(e: any){
      const result = e.target.result;
      console.log(result.slice(0,result.length-1));
      setImage(result.slice(0,result.length-1));
    }
    a.readAsDataURL(s);
  }


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const lastServiceAC = services.length > 0 ? services[services.length - 1].Accomodation : null;

  return (
    
    // พื้นหลัง
    <div className="page"style={{backgroundColor:"#8CC8FF",position:"absolute", width:"100%", height:"100%"}}>
      <div style={{backgroundColor:"#FFFFFF",position:"absolute", top:"15%",width:"100%", height:"85%",borderRadius:"5% 5% 0 0",}}/>
      <div style={{width:"100%",height:"20%",display:"flex",justifyContent:"center",alignItems:"center"}} >
         <p style={{marginBottom:"4%",fontFamily:"Helvetica",fontSize:(screenWidth*0.02),fontWeight:700}}>Booking a service</p>
            <Link to={`/HomePage2?id=${userId}`}>
              <div style={{position:"absolute",top:"6%",left:"5%"}}><img src="https://c.animaapp.com/1cGgrXG8/img/---icon--home-2--1@2x.png" alt="" width={(screenWidth*0.026)} /></div>
            </Link>
            <Link to={`/BookingPage2?id=${userId}`}>
            <div style={{position:"absolute",top:"6%",left:"10%"}}><img src="https://c.animaapp.com/iqEoUPux/img/group-2@2x.png" alt="" width={(screenWidth*0.026)} /></div>
            </Link>
      </div>

    {/* 3 จุดข้างบน */}
      <div>
        <div style={{position:"absolute", left:"35%",top:"22%",backgroundColor:"#FFEF99",width:"11%",height:".5%",borderRadius:"10%"}}/>
        <div style={{position:"absolute", left:"50.5%",top:"22%",backgroundColor:"#FFEF99",width:"11%",height:".5%",borderRadius:"10%"}}/>
        <div style={{backgroundColor:"#FFEF99",width:"3%",height:"5%",position:"absolute",borderRadius:"50%",left:"46.8%",top:"19.5%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:(screenWidth*0.018),fontFamily:"Helvetica",fontWeight:700,color:"grey"}}>2</div>
        <div style={{backgroundColor:"#FFEF99",width:"3%",height:"5%",position:"absolute",borderRadius:"50%",left:"31.5%",top:"19.5%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:(screenWidth*0.018),fontFamily:"Helvetica",fontWeight:700,color:"grey"}}>1</div>
        <div style={{backgroundColor:"#FFEF99",width:"3%",height:"5%",position:"absolute",borderRadius:"50%",left:"62.2%",top:"19.5%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:(screenWidth*0.018),fontFamily:"Helvetica",fontWeight:700,color:"grey"}}>3</div> 
      </div>

    {/* กรอบเทาตรงกลาง */}
      <div style={{backgroundColor:"#959595",position:"absolute",width:(screenWidth*0.48),height:(screenWidth*0.22),borderRadius:"10%",left:"29%",top:"32.5%"}}>
        <div style={{position:"absolute",left:"5%",top:"5%"}}><img src={qrcode} alt="" width={(screenWidth*0.18)}/></div>
        <p  style={{position:"absolute",fontFamily:"Helvetica",fontSize:(screenWidth*0.016),left:"55%",top:"3%",fontWeight:700}}>Bank Accout</p>
        <p  style={{position:"absolute",fontFamily:"Helvetica",fontSize:(screenWidth*0.016),left:"55%",top:"13%"}}>SCB</p>
        <p  style={{position:"absolute",fontFamily:"Helvetica",fontSize:(screenWidth*0.016),left:"55%",top:"28%",fontWeight:700}}>Bank Account Number</p>
        <p  style={{position:"absolute",fontFamily:"Helvetica",fontSize:(screenWidth*0.016),left:"55%",top:"38%"}}>670-238025-7</p>
        <p  style={{position:"absolute",fontFamily:"Helvetica",fontSize:(screenWidth*0.016),left:"55%",top:"53%",fontWeight:700}}>Bank Account Name</p>
        <p  style={{position:"absolute",fontFamily:"Helvetica",fontSize:(screenWidth*0.016),left:"55%",top:"63%"}}>Mr.Sakchai Wongklam</p>

      {/* ปุ่มอัพโหลด */}
      </div>
          <Form 
            name="upload"
            autoComplete="off"
            onFinish={onFinish}
            >
              
            <Form.Item
            valuePropName="file"
            >
            <div style={{position:"absolute",left:(screenWidth*0.481),top:(screenWidth*0.32),justifyContent:"center",alignItems:"center"}} >
              <Upload listType="picture-card" multiple={false} maxCount={1} onChange={onChange} accept=".png" >
             <UploadOutlined style={{fontSize:(screenWidth*0.02),position:"absolute",top:"20%"} }/>
              <p style={{position:"absolute",top:"40%"}}>Upload</p>
              </Upload> 
            </div>
            {/* // ปุ่ม Finish */}
            <Button type="primary" htmlType="submit" style={{backgroundColor:isHovered?'#000000':'#FFE663', 
                                                              borderRadius:'28.3px/28.5px', 
                                                              height:(screenWidth*0.04), 
                                                              left:(screenWidth*0.8), 
                                                              width:(screenWidth*0.1),
                                                              top:(screenWidth*0.313),
                                                              fontSize:(screenWidth*0.01),
                                                              fontFamily: "Inter,Helvetica",
                                                              boxShadow:"0px 4px 4px #00000040",
                                                              color:isHovered?"white":'black',
                                                              position:"absolute",
                                                              fontWeight:700}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                                                              >Finish</Button>
            </Form.Item>
          </Form>
          {/* // แสดงเงินที่ต้องจ่าย */}
            <div className="total" style={{width:"50%",position:"absolute",left:"43%",top:"80%",fontSize:(screenWidth*0.0183),color:"#3F93FE",fontWeight:"700"}}> Total : {lastServiceAC} Baht</div>
    </div>         
  );
};
