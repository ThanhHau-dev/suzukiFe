import React from "react";
import "./CallButton.css"; // Đảm bảo rằng bạn có file CSS cho nút này

const CallButton = ({ openPopupEmail }) => {
  const phoneNumber = "0912345678"; // Số điện thoại

  return (
    <div className="call-buttons-container">
      {/* Nút gọi 2 */}
      <a href={`tel:${phoneNumber}`} className="call-button-call">
        <div className="button-background-call"></div> {/* Nền có hiệu ứng */}
        <img className="img_icon" src="/images/icon_phone.png" alt="Call" />
        {/* Đường dẫn tới biểu tượng */}
      </a>

      {/* Nút điều hướng về zalo của Hào */}
      <a href="https://zalo.me/0964060153" className="call-button-zalo">
        <div className="button-background-zalo"></div> {/* Nền có hiệu ứng */}
        <img className="img_icon" src="/images/icon_zalo.webp" alt="Call" />
      </a>
    </div>
  );
};

export default CallButton;
