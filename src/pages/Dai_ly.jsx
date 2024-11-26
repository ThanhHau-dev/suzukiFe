import React from "react";
import "./Dai_ly.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";



function Dai_ly() {
  return (
    <div className="Dai_ly">
      <CallButton/>
      <PopupEmail />
      <div className="container-fluid">
        <img src="/images/bannerMore/banner_daily.jpg" alt="hình banner đại lý"/>
        <div className="row">
          <div className="col-md-12">
            <h1>Vị trí đại lý</h1>
          </div>
        </div>

        <div className="row">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5676684187024!2d106.7738596!3d10.767764600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fd444387cb5%3A0xb42db99cc57ae822!2sSubaru%20Minh%20Thanh%204S!5e0!3m2!1svi!2s!4v1731850986361!5m2!1svi!2s"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dai_ly;
