import { PaymentInterface } from "../../../interfaces/ball/payment";

const apiUrl = "http://localhost:8080";

async function CreatePayment(data: PaymentInterface) {
    const requestOpions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/payments`, requestOpions)
    .then((response) => response.json())
    .then((res) => {
        if (res.data){
            return { status: true, message: res.data};
        }
        else{
            return { status: false, message: res.error};
        }
    });
    return res;    
}

async function GetAccomodation(id: Number | undefined) {
    const requestOptions = {
      method: "GET"
    };
  
    let res = await fetch(`${apiUrl}/services/${id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
}

async function GetService() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`${apiUrl}/services`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
  }

export{
    CreatePayment,
    GetAccomodation,
    GetService
};