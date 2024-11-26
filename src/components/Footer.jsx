import React from "react";
import "./Footer.css";
import EmailFooter from "./EmailFooter";

function Footer() {
  return (
    <footer class="footer">
      <hr />
      <div class="container-fluid">
        <div class="row justify-content-center">

          <div class="col-sm-2">
            <ul>
              <h5>Ô tô</h5>
              <li>
                <a href="/productsSUV/234">XL7 HYBRID</a>
              </li>
              <li>
                <a href="/productsSUV/8667">JIMNY</a>
              </li>
              <li>
                <a href="/productsSUV/8667">SUPER CARRY PRO</a>
              </li>
              <li>
                <a href="/productsSUV/8667">SUPER CARRY VAN</a>
              </li>
              <li>
                <a href="/productsSUV/8667">THƯ VIỆN XE</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-2">
            <ul>
              <h5>BẢNG GIÁ</h5>
              <li>
                <a href="/Bang_gia">BẢNG GIÁ Ô TÔ</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-4">
        <EmailFooter/>
        </div>

          <div class="col-sm-2">
            <ul>
              <h5>ĐẠI LÝ</h5>
              <li>
                <a href="/Dai_ly">ĐẠI LÝ Ô TÔ</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-2">
            <ul>
              <h5>KHUYẾN MÃI</h5>
              <li>
                <a href="/Khuyen_mai">KHUYẾN MÃI Ô TÔ</a>
              </li>
            </ul>
          </div>

          
    
          <hr />
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-sm-2">
            <ul>
              <h5>VỀ CHÚNG TÔI</h5>
              <li>
                <a href="/Contact">LIÊN HỆ CHÚNG TÔI</a>
              </li>
              <li>
                <a href="#">GIỚI THIỆU</a>
              </li>
              <li>
                <a href="/News">TIN TỨC Ô TÔ</a>
              </li>
              <li>
                <a href="#">CÂU HỎI THƯỜNG GẶP</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-2">
            <ul>
              <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
              <li>
                <a href="#">FACEBOOK Ô TÔ</a>
              </li>

              <li>
                <a href="#">YOUTUBE</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-2">
            <ul>
              <h5>HOẠT ĐỘNG</h5>
              <li>
                <a href="#">ĐĂNG KÝ LÁI THỬ</a>
              </li>
              <li>
                <a href="#">CÔNG NGHỆ Ô TÔ</a>
              </li>
              <li>
                <a href="#">CHÍNH SÁCH BẢO MẬT</a>
              </li>
              <li>
                <a href="#">HẬU MÃI</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-2">
            <ul>
              <h5>HẬU MÃI Ô TÔ</h5>
              <li>
                <a href="#">BẢO DƯỠNG ĐỊNH KỲ</a>
              </li>
              <li>
                <a href="#">QUY ĐỊNH BẢO HÀNH</a>
              </li>
              <li>
                <a href="#">CHIẾN DỊCH TRIỆU HỒI, DỊCH VỤ </a>
              </li>
              <li>
                <a href="#">CHĂM SÓC KHÁCH HÀNG </a>
              </li>
              <li>
                <a href="#">PHỤ TÙNG CHÍNH HÃNG</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row justify-content-center mt-5 mb-5">
          <div class="col-sm-2 ps-5">
            <h5>SUZUKI WORLD</h5>

            <p>SUZUKI WORLD</p>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
          <div class="col-sm-2"></div>
        </div>
        <hr />
      </div>

      <div class="footer_2">
        <div class="container-fluid ps-5 pe-5">
          <img src="https://doftr40680fkg.cloudfront.net/assets/images/logo.svg" />
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <h5>CÔNG TY TNHH VIỆT NAM SUZUKI</h5>
              <p>
                Địa chỉ: Đường số 2, Khu công nghiệp Long Bình, Biên Hòa, Đồng
                Nai. Giấy CNĐKDN: 3600244035. Cấp lần đầu: 21/04/1995. Cơ quan
                cấp: Sở Kế hoạch và Đầu tư tỉnh Đồng Nai.
              </p>
            </div>
            <div class="col-md-4">
              
            </div>
          </div>
        </div>
      </div>

      <div class="footer_3">© 2024 VIETNAM SUZUKI CORPORATION</div>
      <div className="htech_performance">
        <a href="https://htechp.com">
      Designed by HTECH PERFORMANCE
      </a>
      </div>
    </footer>
  );
}

export default Footer;
