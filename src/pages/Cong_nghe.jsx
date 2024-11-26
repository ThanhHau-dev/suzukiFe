import React from "react";
import "./Cong_nghe.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";



function Cong_nghe() {
  return (
    <div className="Cong_nghe">
      <CallButton/>
      <PopupEmail/>
      <img
        src="/images/bannerMore/banner_congnghe.webp"
        alt="hình banner"
      />
      <div className="Cong_nghe_1">
        <div className="container-fluid">
          <div className="row flex-nowrap overflow-auto cong_nghe_custom_col">
            <div className="col-md-6">
              <img
                src="/images/bannerMore/banner_congnghe_ct1.webp"
                alt="hình banner"
              />

              <h1>
                HỆ THỐNG PHÂN PHỐI LỰC PHANH ĐIỆN TỬ (EBD) & CHỐNG BÓ CỨNG PHANH
                (EBS)
              </h1>

              <p>
                Trong tình huống phanh khẩn cấp, hệ thống ABS giữ cho lốp không
                bị khóa và hỗ trợ người lái duy trì khả năng điều khiển. Ngoài
                ra, EBD giúp rút ngắn khoảng cách phanh bằng cách phân bố lực
                tối ưu cho các bánh xe tùy theo tải trọng. Hệ thống giúp ổn định
                khả năng vận hành và di chuyển của xe, đảm bảo an toàn hiệu quả
                cho người lái.
              </p>

              <a class="describe_a" href="/">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a>
            </div>

            <div className="col-md-6">
              <img
                src="/images/bannerMore/banner_congnghe_ct1.webp"
                alt="hình banner"
              />

              <h1>HỆ THỐNG CÂN BẰNG ĐIỆN TỬ (ESP)</h1>

              <p>
                Sử dụng tín hiệu từ các cảm biến gia tốc của xe và tốc độ các
                bánh xe để xác định trạng thái chuyển động và so sánh với góc vô
                lăng. Nếu xảy ra hiện tượng trượt bánh, hệ thống sẽ tự động điều
                chỉnh công suất động cơ và phanh để kiểm soát hiện tượng trượt,
                đảm bảo xe luôn vận hành đúng quỹ đạo mong muốn, giảm thiểu rủi
                ro tai nạn.
              </p>

              <a class="describe_a" href="/">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Cong_nghe_2">
        <div className="container-fluid">
          <div className="row flex-nowrap overflow-auto cong_nghe_custom_col">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src="/images/bannerMore/banner_congnghe_ct3.webp"
                alt="hình"
              />

              <h2>HỆ THỐNG HỖ TRỢ KHỞI HÀNH NGANG DỐC (HHC)</h2>

              <p>
                Chức năng hỗ trợ giữ phanh khi người lái chuyển từ chân phanh
                sang chân ga trong vòng 2 giây lúc khởi hành
              </p>

              {/* <a class="describe_a" href="#">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a> */}
            </div>

            <div className="col-md-4">
              <img
                className="card-img-top"
                src="/images/bannerMore/banner_congnghe_ct4.webp"
                alt="hình"
              />

              <h2>GIẢM THIỂU CHẤN THƯƠNG NGƯỜI ĐI BỘ</h2>

              <p>
                Cấu tạo nắp ca-pô, khu vực hệ thống gạt mưa, cản trước và một số
                cho tiết khác của Suzuki XL7 được thiết kế hấp
              </p>

              {/* <a class="describe_a" href="#">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a> */}
            </div>

            <div className="col-md-4">
              <img
                className="card-img-top"
                src="/images/bannerMore/banner_congnghe_ct4.webp"
                alt="hình"
              />

              <h2>HỆ THỐNG SHVS*</h2>

              <p>
              Hệ thống SHVS (Xe Hybrid Thông minh của Suzuki) là hybrid cỡ nhẹ với pin lithium-ion và năng lượng điện hỗ 
              </p>

              {/* <a class="describe_a" href="#">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cong_nghe;
