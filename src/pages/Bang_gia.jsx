import React from "react";
import "./Bang_gia.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";

function Bang_gia() {
  return (
    <div className="Bang_gia">
      <div className="container-fluid">
        <img
          src="/images/bannerMore/banner_banggia.webp"
          alt="banner"
        />

        <CallButton />
        <PopupEmail/>

        <div className="Bang_gia_1">
          <h1>BẢNG GIÁ CÁC DÒNG XE Ô TÔ SUZUKI TẠI VIỆT NAM NĂM 2024</h1>

          <table>
            <tr className="Bang_gia_1_Title">
              <td colspan="2">
                BẢNG GIÁ CÁC DÒNG XE Ô TÔ SUZUKI TẠI VIỆT NAM NĂM 2024
              </td>
            </tr>

            <tr>
              <td className="Bang_gia_1_Title">Mẫu xe</td>
              <td className="Bang_gia_1_Title">Giá bán lẻ có thuế GTGT</td>
            </tr>

            <tr className="Bang_gia_1_Title">
              <td colspan="2">Xe du lịch</td>
            </tr>
            <tr>
              <td>XL7 HYBRID 1-TONE</td>
              <td>599.900.000 VND</td>
            </tr>

            <tr>
              <td>XL7 HYBRID 2-TONE</td>
              <td>607.900.000 VND</td>
            </tr>

            <tr>
              <td>JIMNY 1-TONE</td>
              <td>789.000.000 VND</td>
            </tr>

            <tr>
              <td>JIMNY 2-TONE</td>
              <td>799.000.000 VND</td>
            </tr>

            {/* ----- */}

            <tr className="Bang_gia_1_Title">
              <td colspan="2">XE THƯƠNG MẠI</td>
            </tr>
            <tr>
              <td>SUPER CARRY VAN</td>
              <td>294.448.000 VND</td>
            </tr>

            <tr>
              <td>SUPER CARRY PRO THÙNG LỬNG (Màu xanh và trắng)</td>
              <td>318.600.000 VND</td>
            </tr>

            <tr>
              <td>SUPER CARRY PRO THÙNG LỬNG (Màu bạc)</td>
              <td>324.378.000 VND</td>
            </tr>

            <tr>
              <td>SUPER CARRY PRO THÙNG MUI BẠT</td>
              <td>342.812.000 VND</td>
            </tr>

            <tr>
              <td>SUPER CARRY PRO THÙNG KÍN</td>
              <td>347.884.000 VND</td>
            </tr>
          </table>

          <p>
            Ghi chú:
            <br />
            1. Giá trên đã bao gồm 10% VAT cho xe du lịch, 8% VAT cho xe thương
            mại nhưng không bao gồm chi phí đăng ký trước bạ, lưu hành và các
            chi phí khác.
            <br />
            2. Giá trên có thể thay đổi không báo trước, vui lòng liên hệ đại lý
            để biết thêm chi tiết.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bang_gia;
