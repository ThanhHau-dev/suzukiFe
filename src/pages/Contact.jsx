import React from "react";
import "./Contact.css";
import PhoneCall from "../components/PhoneCall";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";



function Contact() {

  const callPhone =() =>{
    window.location.href = "tel:0964060153";
  };

  return (
    <div className="Contact">
      <CallButton/>
      <PopupEmail />
      <img
        src="/images/bannerMore/banner_lienhe.webp"
        alt="hình hợp tác"
      />

        <div className="container">
        <div className="row Contact_1">
        <div className="col-md-4">
          <h1>Hotline</h1>
          <a class="describe_a" href="#"  onClick={callPhone}>
            <span> <PhoneCall/> </span>
            <button class="describe_button">
              <i class="bx bx-right-arrow-alt"></i>
            </button>
          </a>
        </div>

        <div className="col-md-4">
            <h1>
                Địa chỉ
            </h1>

            <p>
                Lô D3, đường D1, KCN Cát Lái, phường Thạnh Mỹ Lợi, TP Thủ Đức, TP HCM
            </p>
        </div>

        <div className="col-md-4">
            <h1>
            zalo
            </h1>

            <p>
            0964 060 153
            </p>
        </div>

        <button className="btn btn_Contact" onClick={callPhone}> 
          Liên Hệ 
        </button>
      </div>
        </div>
    </div>
  );

}

export default Contact;
