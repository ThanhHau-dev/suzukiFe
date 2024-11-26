import React from "react";
import "./Khuyen_mai.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";



function Khuyen_mai() {
  return (
    <div className="Khuyen_mai">
      <CallButton/>
      <PopupEmail/>
      <img
        src="/images/bannerMore/banner_khuyenmai.webp"
        alt="hình banner khuyến mãi"
      />

      <div className="container-fluid">
        <div className="Khuyen_mai_1">
        <div className="row flex-nowrap overflow-auto custom_col">
          <div className="col-md-6">
            <img
              className="card-img-top"
              src="/images/bannerMore/banner_khuyenmai_ct1.webp"
              alt="banner khuyến mãi"
            />

            <h1 className="card-title">
              RƯỚC XẾ NHẬT MỚI, LÊN ĐỜI KINH DOANH VỚI ƯU ĐÃI HẤP DẪN TỪ VIỆT
              NAM SUZUKI
            </h1>

            <p>
              Tháng 11/2024, Việt Nam Suzuki áp dụng mức hỗ trợ siêu ưu đãi dành
              cho các mẫu xe du lịch, tiếp bước cho những hành trình đầy hứng
              khởi.
            </p>

            <a class="describe_a" href="#">
              <span>Xem chi tiết</span>
              <button class="describe_button">
                <i class="bx bx-right-arrow-alt"></i>
              </button>
            </a>
          </div>

          <div className="col-md-6">
            <img
              className="card-img-top"
              src="/images/bannerMore/banner_khuyenmai_ct2.webp"
              alt="banner khuyến mãi"
            />

            <h1 className="card-title">
              RƯỚC XẾ NHẬT MỚI, LÊN ĐỜI KINH DOANH VỚI ƯU ĐÃI HẤP DẪN TỪ VIỆT
              NAM SUZUKI
            </h1>

            <p>
              Tháng 11/2024, Việt Nam Suzuki áp dụng mức hỗ trợ siêu ưu đãi dành
              cho các mẫu xe du lịch, tiếp bước cho những hành trình đầy hứng
              khởi.
            </p>

            <a class="describe_a" href="#">
              <span>Xem chi tiết</span>
              <button class="describe_button">
                <i class="bx bx-right-arrow-alt"></i>
              </button>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Khuyen_mai;
