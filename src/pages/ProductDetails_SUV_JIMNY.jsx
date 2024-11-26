import React from "react";
import "./ProductDetails.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";

function ProductDetails_SUV_JIMNY() {
  // product là biến đại diện kết quả để truy xuất
  return (
    <div className="ProductDetails">
      <CallButton />
      <PopupEmail />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <img
              src="/images/img_products/img_SUV/img_bannerJimmy.webp"
              alt="hình banner"
            />
          </div>
        </div>
      </div>

      <div className="ProductDetails_1">
        <div className="container-fluid">
          <div className="row ProductDetails_1_ĐK_nhan_thong_tin align-items-center">
            <div className="col-md-7">
              <img
                src="/images/img_products/img_SUV/imgProduct_Jimny_1.png"
                alt="hình"
              />
            </div>
            <div className="col-md-5">
              <h1>ĐĂNG KÝ NHẬN THÔNG TIN</h1>
              <a class="describe_a" href="/">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="row">
            <p>
              Có những nơi trên thế giới chỉ Jimny mới có thể đến. Vượt qua
              những hố bùn, băng qua những khu rừng rậm rạp, chinh phục những
              tảng đá lớn với chiếc xe địa hình nhỏ gọn này để biết thế nào là
              sự vững chắc thực thụ. Jimny - luôn định hình những ranh giới mới.
            </p>
          </div>
        </div>
      </div>

      <div className="ProductDetails_2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 ">
              <img
                src="/images/img_products/img_SUV/imgProduct_Jimny_2.jpg"
                alt="hình"
              />
            </div>
            <div className="col-md-4">
              <h1>Màu sắc mạnh mẽ</h1>
            </div>
          </div>

          <div className="row ProductDetails_2_more">
            <div className="col-md-6">
              <h1>Sẵn sàng chinh phục nơi hoang dã</h1>
            </div>
            <div className="col-md-6">
              <p>
                Được phát triển để đương đầu với mọi thời tiết và địa hình khắc
                nghiệt, Jimny có thể đi đến những nơi mà các phương tiện khác
                không thể đi được. Tự tin cùng bạn lên đường và khám phá mọi
                ngóc ngách của thế giới.
              </p>
              <a class="describe_a" href="#">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="row ProductDetails_2_1">
            <img
              src="/images/img_products/img_SUV/imgProduct_Jimny_3.webp"
              alt="hình"
            />
          </div>

          <div className="row ProductDetails_2_2">
            <div className="col-md-6">
              <h1>Tập trung vào điều quan trọng nhất</h1>
            </div>

            <div className="col-md-6">
              <p>
                Với Jimny, chẳng điều gì có thể phân tán sự tập trung của bạn.
                Nội thất thuần đen một cách tối giản nhưng tinh tế, cùng hàng
                loạt các trang bị tiện nghi được phát triển nhằm tối ưu thao tác
                khi lái xe ngay cả khi đeo găng tay.
              </p>
              <a class="describe_a" href="#">
                <span>Xem chi tiết</span>
                <button class="describe_button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="row ProductDetails_2_3">
            <div className="col-md-8">
              <img
                src="/images/img_products/img_SUV/imgProduct_Jimny_4.jpg"
                alt="hình"
              />
            </div>

            <div className="col-md-4">
              <h2>Bảo vệ bản thân và mọi người</h2>
              <p>
                An toàn là ưu tiên hàng đầu bất kể bạn đi qua những vùng hoang
                dã hay trong thành phố. Nhờ công nghệ an toàn của Suzuki, bạn
                luôn có thể yên tâm khi lái xe.
              </p>
            </div>
          </div>

          <div className="row ProductDetails_2_4">
            <div className="col-md-4">
              <h2>Sự vững chắc đáng tin cậy</h2>
              <p>
                Bốn tính năng đặc trưng chứng minh  khả năng vượt địa hình vượt
                trội của Jimny - khung gầm rời chắc chắn, ba góc thân xe rộng,
                hệ thống treo cầu cứng 3 liên kết với lò xo trụ và hệ dẫn động 4
                bánh bán thời gian với chế độ cầu chậm. Mẫu xe đưa bạn đến bất
                cứ đâu bạn muốn với sự linh hoạt vô song, khả năng điều khiển
                chính xác và mô-men xoắn mạnh mẽ khi bạn cần nhất.
              </p>
            </div>
            <div className="col-md-8">
              <img
                src="/images/img_products/img_SUV/imgProduct_Jimny_5.jpg"
                alt="hình"
              />
            </div>
          </div>

          <div className="row ProductDetails_2_5">
            <div className="col-md-6">
              <img
                src="/images/img_products/img_SUV/imgProduct_Jimny_6.jpg"
                alt="hình"
              />
            </div>

            <div className="col-md-6">
              <h2>Chuẩn bị hành lý và sẵn sàng lên đường</h2>
              <p>
                Jimny mang đến không gian rộng rãi và khả năng lưu trữ tối ưu để
                đáp ứng mọi nhu cầu của bạn, cho dù bạn đang di chuyển trong đô
                thị hay khám phá những cung đường mòn.
              </p>
            </div>
          </div>
          <div className="row ProductDetails_2_6">
            <div className="col-sm-12">
              <img
                src="/images/img_products/img_SUV/imgProduct_Jimny_7.jpg"
                alt="hình"
              />
            </div>
          </div>

          <div className="row ProductDetails_2_7">
            <div className="col-sm-6">
              <h2>Doanh số tích lũy trên toàn thế giới</h2>
            </div>
            <div className="col-sm-6">
              <p>
                
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

      {/* Viết thông số kĩ thuật nữa thôi là xong content page này */}
      <div className="ProductDetails_3 m-5">
        <div className="container-fluid">
          <div className="row">
            <h4>Hiệu suất</h4>
            <hr />
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p>Bán kính vòng quay tối thiểu (m) </p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>4.9</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>4.9</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Công suất tối đa (Hp/rpm)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>101 / 6,000</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>101 / 6,000</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Dung tích động cơ (cc)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>1,462</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>1,462</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hệ thống lái</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Trục vít - thanh răng với trợ lực điện và giảm chấn tay lái</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Trục vít - thanh răng với trợ lực điện và giảm chấn tay lái</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>
              Hệ thống treo (Trước - Sau)
              </p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Cầu cứng 3 liên kết với lò xo cuộn, và thanh cân bằng ở phía trước</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Cầu cứng 3 liên kết với lò xo cuộn, và thanh cân bằng ở phía trước</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hỗ trợ dổ dốc</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p> Hộp số</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>4AT</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>4AT</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Khoảng sáng gầm xe (mm)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>210</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>210</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Đèn tự động bật/tắt</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Mô men xoắn tối đa (N.m/rpm)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>130 / 4,000</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>130 / 4,000</p>
            </div>
          </div>
        </div>{" "}
        <hr />
        <div className="ProductDetails_3_1">
          <h4>Các tính năng chính</h4>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Giải trí và kết nối</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Cảm ứng 9 inch hiển thị các góc nghiêng, phương hướng, áp suất khí quyển, cao độ</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Cảm ứng 9 inch hiển thị các góc nghiêng, phương hướng, áp suất khí quyển, cao độ</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Góc tới - góc vượt đỉnh dốc - góc thoát (độ)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>37 - 28 - 49</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>37 - 28 - 49</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hệ thống dẫn động</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Dẫn động 4 bánh bán thời gian ALLGRIP PRO với chế dộ cầu chậm</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Dẫn động 4 bánh bán thời gian ALLGRIP PRO với chế dộ cầu chậm</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hệ thống khung gầm</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Khung gầm rời</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Khung gầm rời</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hệ thống phanh</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Phanh đĩa (trước) và phanh tang trống (sau) với chức năng phanh hạn chế trượt bánh</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Phanh đĩa (trước) và phanh tang trống (sau) với chức năng phanh hạn chế trượt bánh</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hỗ trợ khởi hành ngang dốc (HHC)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Thông số lốp</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>195/80R15</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>195/80R15</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Đèn pha</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có vòi rửa đèn đầu</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Có vòi rửa đèn đầu</p>
            </div>
          </div>{" "}
          <hr />
         
     
        </div>
      </div>

      <div className="ProductDetails_4 m-5">
        <div className="row">
          <h1>Trải nghiệm JIMNY ngay</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3 col-6">
              <i class="bx bx-map"></i>
              <a href="/Dai_ly">
                <p>tìm đại lý</p>
              </a>
            </div>
            <div className="col-md-3 col-6">
              <i class="bx bx-car"></i>
              <p>đăng kí lái thử</p>
            </div>
            <div className="col-md-3 col-6">
              <i class="bx bxs-book-open"></i>
              <p>máy tính tài chính</p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails_SUV_JIMNY;
