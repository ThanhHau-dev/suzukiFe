import React, { useState, useEffect } from "react";
import "./EmailFooter.css";
import emailjs from "@emailjs/browser";

function EmailFooter() {
  // State để lưu trữ dữ liệu từ form
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    carType: "",
    paymentMethod: "", // Sẽ là "Trả thẳng" hoặc "Trả góp"
  });

  // Gọi API emailjs để khởi tạo publicKey
  useEffect(() => {
    emailjs.init("w15JVV1AB96-f0lko"); // Thay thế bằng publicKey của bạn
  }, []);

  // Hàm xử lý khi người dùng nhập vào input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm gửi Email từ sự kiện nút button
  const sendEmail = () => {
    const resultUser = {
      name: formData.fullName,
      tel: formData.phone,
      car: formData.carType,
      pay_method: formData.paymentMethod,
    };

    emailjs.send("service_s4c6u7k", "template_nnkuw0h", resultUser).then(
      (response) => {
        console.log("Email gửi thành công!", response.status, response.text);
        alert("Cảm ơn bạn nhiều nhé, chúng tôi sẽ sớm liên hệ lại !");
      },
      (error) => {
        console.error("Gửi email thất bại:", error);
      }
    );
  };

  // Trả về JSX để render giao diện
  return (
    <div className="EmailFooter">
      <h4>Đăng kí lái thử và báo giá</h4>
      <hr />
      <p>Quý khách vui lòng nhập thông tin và chọn hình thức thanh toán</p>

      <label>
        <input
          className="m-2"
          type="radio"
          name="paymentMethod"
          value="Trả thẳng"
          checked={formData.paymentMethod === "Trả thẳng"}
          onChange={handleInputChange}
        />
        Trả thẳng
      </label>

      <label>
        <input
          className="m-2"
          type="radio"
          name="paymentMethod"
          value="Trả góp"
          checked={formData.paymentMethod === "Trả góp"}
          onChange={handleInputChange}
        />
        Trả góp
      </label>

      <input
        className="form-control"
        placeholder="Họ và tên"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <input
        className="form-control"
        placeholder="Nhập số điện thoại"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />

      <select
        className="form-control"
        name="carType"
        value={formData.carType}
        onChange={handleInputChange}
      >
        <option value="">Chọn loại xe</option>
        <option value="XL7">XL7</option>
        <option value="Jimmy">Jimmy</option>
        <option value="Blind Van">Blind Van</option>
      </select>

      <button onClick={sendEmail} className="btn btn_EmailFooter">
        Gửi yêu cầu
      </button>

      <h2>
        Hotline kinh doanh: <span>0964 060 153 </span>
      </h2>
    </div>
  );
}

export default EmailFooter;
