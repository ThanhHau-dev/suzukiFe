import React from "react";
import "./ProductDetails.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";

function ProductDetails_BEN_VAN() {
  // product là biến đại diện kết quả để truy xuất
  return (
    <div className="ProductDetails">
      <CallButton />
      <PopupEmail />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <img
              src="/images/img_products/img_BEN/banner van.jpg"
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
                src="/images/img_products/img_BEN/img_supperCaryVan_product_1.png"
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
            <p>Người bạn tuyệt vời trên hành trình vận chuyển!</p>
          </div>
        </div>
      </div>

      <div className="ProductDetails_2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 ">
              <img
                src="/images/img_products/img_BEN/img_supperCaryVan_product_5.jpg"
                alt="hình"
              />
            </div>
            <div className="col-md-4">
              <h1>Super Carry Van - kinh tế - hiệu quả - bền bỉ</h1>
            </div>
          </div>

          <div className="row ProductDetails_2_more">
            <div className="col-md-6">
              <h1>Người bạn đồng hành tin cậy!</h1>
            </div>
            <div className="col-md-6">
              <p>
                Tiên phong tại Việt Nam trong phân khúc xe tải van nhỏ gọn,
                Suzuki Blind Van đã có hơn ¼ thế kỷ mang trọng trách “người vận
                chuyển” của hàng chục nghìn doanh nghiệp. Được xem là sự kết hợp
                tuyệt vời giữa khả năng chuyên chở và sự tiện nghi, Blind Van
                giúp công việc vận chuyển trở nên thuận lợi hơn bao giờ hết
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
              src="/images/img_products/img_BEN/img_supperCaryVan_product_7.jpg"
              alt="hình"
            />
          </div>

          <div className="row ProductDetails_2_2">
            <div className="col-md-6">
              <h1>Động cơ chính hãng Nhật Bản</h1>
            </div>

            <div className="col-md-6">
              <p>
                Suzuki Blind Van với thiết kế nhỏ gọn, linh hoạt cùng khả năng
                vận hành mạnh mẽ, bền bỉ, tiết kiệm nhiên liệu hàng đầu và khả
                năng chuyên chở đa dụng, mang lại hiệu quả kinh tế cao cho khách
                hàng khi đầu tư
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
                src="/images/img_products/img_BEN/img_supperCaryVan_product_4.jpg"
                alt="hình"
              />
            </div>

            <div className="col-md-4">
              <h2>Khả năng chuyên chở tối ưu</h2>
              <p>
                Động cơ K15B tiên tiến, được nghiên cứu và chế tác chuyên sâu,
                đảm bảo tiêu chuẩn Suzuki toàn cầu. Với thế mạnh tiết kiệm nhiên
                liệu hàng đầu cùng khả năng vận hành mạnh mẽ, Carry Pro đáp ứng
                mọi nhu cầu vận chuyển
              </p>
            </div>
          </div>

          <div className="row ProductDetails_2_4">
            <div className="col-md-4">
              <h2>Thiết kế thông minh</h2>
              <p>
                Blind Van sử dụng động cơ Suzuki F10A Nhật Bản chính hãng, tối
                ưu khả năng tiết kiệm nhiên liệu hàng đầu và tăng cường sự mạnh
                mẽ, bền bỉ
              </p>
            </div>
            <div className="col-md-8">
              <img
                src="/images/img_products/img_BEN/img_supperCaryVan_product_6.webp"
                alt="hình"
              />
            </div>
          </div>

          <div className="row ProductDetails_2_5">
            <div className="col-md-6">
              <img
                src="/images/img_products/img_BEN/img_supperCaryVan_product_8.webp.jpg"
                alt="hình"
              />
            </div>

            <div className="col-md-6">
              <h2>Nhanh chóng và dễ dàng</h2>
              <p>
                Sàn thùng rộng rãi với chiều cao lý tưởng và thiết kế dạng
                phẳng, giúp chuyên chở đa dạng loại hàng ở mọi kích thước, hạn
                chế việc hàng hoá bị xê dịch trong quá trình vận chuyển. Thiết
                kế cửa mở 3 phía linh hoạt, thuận tiện cho việc xếp, dỡ hàng hóa
                ở khu vực chật hẹp
              </p>
            </div>
          </div>
          <div className="row ProductDetails_2_6">
            <div className="col-sm-12">
              <img
                src="/images/img_products/img_BEN/img_supperCaryVan_product_2.webp"
                alt="hình"
              />
            </div>
          </div>

          <div className="row ProductDetails_2_7">
            <div className="col-sm-6">
              <h2>SUPER CARRY VAN</h2>
            </div>
            <div className="col-sm-6">
              <p>
                Với thiết kế nhỏ gọn, Blind Van thuận tiện vận chuyển hàng mọi
                nơi, dễ dàng xoay trở trong các không gian nhỏ hẹp cùng đặc
                quyền di chuyển nội đô 24/7
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
              <p>4.1</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>4.1</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Công suất tối đa (Hp/rpm)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>31/5,500</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>31/5,500</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hệ thống cung cấp nhiên liệu</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Phun xăng đa điểm</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Phun xăng đa điểm</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hệ thống lái</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Bánh răng - Thanh răng</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Bánh răng - Thanh răng</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Hộp số</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>5MT</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>5MT</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Khoảng sáng gầm xe (mm)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>165</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>165</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Khối lượng bản thân (kg)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>740</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>740</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Khối lượng toàn bộ (kg)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>1,450</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>1,450</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Kích thước tổng thể bên ngoài (mm)</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>3.290 x 1.395 x 1.780</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>3.290 x 1.395 x 1.780</p>
            </div>
          </div>{" "}
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Động cơ</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Xăng</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>Xăng</p>
            </div>
          </div>
        </div>{" "}
        <hr />
        <div className="ProductDetails_3_1">
          <h4>Các tính năng chính</h4>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p>Radio Pioneer chính hiệu Nhật Bản</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>AM/FM/MP3, kết nối cổng USB/AUX</p>
            </div>
            <div className="col-sm-3 col-6 fw-bold">
              <p>AM/FM/MP3, kết nối cổng USB/AUX</p>
            </div>
          </div>{" "}
          <hr />
        </div>
      </div>

      <div className="ProductDetails_4 m-5">
        <div className="row">
          <h1>Trải nghiệm SUPER CARRY VAN ngay</h1>
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

export default ProductDetails_BEN_VAN;
