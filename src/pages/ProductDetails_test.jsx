import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails_test = () => {
  const { id } = useParams(); // Nhận id từ URL
  const location = useLocation(); // Lấy thông tin route hiện tại
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Xác định API dựa vào route, validate đường link bằng react
    const apiEndpoint = location.pathname.includes("SUV")
      ? `http://localhost:3000/productsSUV/${id}`
      : `http://localhost:3000/productsBEN/${id}`;

    // Gọi API dựa vào endpoint được chọn
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Lỗi khi lấy chi tiết sản phẩm:", error));
  }, [id, location.pathname]);

  if (!product) return <p>Đang tải...</p>;

  // product là biến đại diện kết quả để truy xuất

  return (
<div className="ProductDetails">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <img
              src="https://www.suzuki.com.vn/_next/image?url=https%3A%2F%2Fdoftr40680fkg.cloudfront.net%2Fmodels%2FANC32SH1%2Fimages%2FBanner-Tagline_1727245446119.jpg&w=2048&q=75"
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
                src="https://doftr40680fkg.cloudfront.net/models/undefined/slider/desktop/WarrantyDT_1724057514886.jpg"
                alt="hình"
              />
            </div>
            <div className="col-md-5 p-5">
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
              Động lực mới - Đi muôn nơi. Tiếp bước mọi hành trình, khơi trào
              tinh thần tràn <br />
              đầy nhiệt huyết. XL7 Hybrid - Tất cả cho mọi đam mê dịch chuyển.
            </p>
          </div>
        </div>
      </div>

      <div className="ProductDetails_2">
        <div className="container-fluid">
          <div className="row align-items-center mb-5">
            <div className="col-md-8 ">
              <img
                src="https://doftr40680fkg.cloudfront.net/models/ANC32SH1/three-six-zero/configurator/exterior/AYA415XA730002/image36-1723549937854EXT-GRD_GLX_D-BG_A-BC_EYP_36_1723549937665.jpg"
                alt="hình"
              />
            </div>
            <div className="col-md-4">
              <h1>Chọn màu sắc</h1>
            </div>
          </div>

          <div className="row m-5">
            <div className="col-md-6">
              <h1>Táo bạo & Mạnh mẽ</h1>
            </div>
            <div className="col-md-6">
              <p>
                XL7 Hybrid nổi bật giữa đám đông. Diện mạo của một chiếc SUV đậm
                chất mạnh mẽ với lưới tản nhiệt màu đen độc đáo và đèn pha LED,
                những đường viền khắp thân xe làm tôn thêm sự hứng khởi căng
                tràn.
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
              src="https://xesuzukidanang.com/wp-content/uploads/2020/09/CABIN-XL7.jpg"
              alt="hình"
            />
          </div>

          <div className="row m-5 ProductDetails_2_2">
            <div className="col-md-6">
              <h1>Khơi trào cảm xúc</h1>
            </div>

            <div className="col-md-6">
              <p>
                Nội thất thuần đen đầy phong cách kết hợp với các viền kim loại
                màu bạc độc đáo, khơi nguồn cảm hứng. Khoang lái tinh tế và tiện
                nghi, với các nút điều khiển ngay trong tầm tay bạn.
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
                src="https://doftr40680fkg.cloudfront.net/models/undefined/highlights/desktop/9-DT_1723892438286.jpg"
                alt="hình"
              />
            </div>

            <div className="col-md-4">
              <h2>Mạnh mẽ và tự tin</h2>
              <p>
                XL7 Hybrid - Mạnh mẽ và nổi bật, mang đến nguồn động lực căng
                tràn cho <br />
                cho mọi hành trình hứng khởi
              </p>
            </div>
          </div>

          <div className="row ProductDetails_2_4">
            <div className="col-md-4">
              <h2>Động cơ mạnh mẽ</h2>
              <p>
                XL7 được trang bị động cơ K15B với sự hỗ trợ của ISG mang đến
                cảm giác lái mượt mà và thú vị.
              </p>
            </div>
            <div className="col-md-8">
              <img
                src="https://doftr40680fkg.cloudfront.net/models/undefined/highlights/desktop/8-01_1723780688656.jpg"
                alt="hình"
              />
            </div>
          </div>

          <div className="row ProductDetails_2_5">
            <div className="col-md-6">
              <img
                src="https://doftr40680fkg.cloudfront.net/models/undefined/highlights/desktop/CruiseControlDT_1723781103354.jpg"
                alt="hình"
              />
            </div>

            <div className="col-md-6">
              <h2>Hệ thống kiểm soát hành trình</h2>
              <p>
                Hệ thống tự động duy trì tốc độ xe thông qua các nút bấm tích
                hợp trên tay lái, giúp việc <br />
                lái xe trở nên an toàn và thư giãn hơn, đặc biệt trên các hành
                trình dài.
              </p>
            </div>
          </div>
          <div className="row ProductDetails_2_6">
            <div className="col-sm-12">
              <img
                src="https://doftr40680fkg.cloudfront.net/models/undefined/details/desktop/1928x830_1723089060118.jpg"
                alt="hình"
              />
            </div>
          </div>

          <div className="row m-5 ProductDetails_2_7">
            <div className="col-sm-6">
              <h2>Hệ thống Hybrid thông minh từ Suzuki - SHVS</h2>
            </div>
            <div className="col-sm-6">
              <p>
                SHVS hỗ trợ động cơ trong quá trình tăng tốc bằng cách sử dụng
                năng lượng điện chuyển đổi trong quá trình giảm tốc, tăng khả
                năng vận hành êm mượt và tối ưu hiệu suất nhiên liệu.{" "}
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
                <p>
                Dung tích khoang hành lý tối đa (lít)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                803
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                803
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Khoảng sáng gầm xe (mm)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                200
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                200
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Kích thước tổng thể bên ngoài (mm)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               4,450 x 1,775 x 1,710
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               4,450 x 1,775 x 1,710
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Màn hình giải trí trung tâm
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                Hỗ trợ kết nối không dây Apple Carplay & Android Auto
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                Hỗ trợ kết nối không dây Apple Carplay & Android Auto
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Mức tiêu thụ nhiên liệu (lít/ 100km) (Trong đô thị - Ngoài đô thị - Hỗn hợp)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                803
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                803
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Dung tích khoang hành lý tối đa (lít)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                6.81 - 5.36 - 5.9
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                6.81 - 5.36 - 5.9
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Số chỗ ngồi (người)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                7
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                7
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Trọng lượng không tải (kg)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                1,195
                </p>
              </div>
              <div className="col-sm-3">
              <p>
                1,195
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Đèn tự động bật/tắt
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              Có
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              Có
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Động cơ
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               K15B + ISG
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               K15B + ISG
                </p>
              </div>
            </div>

          </div> <hr/>
          <div className="ProductDetails_3_1">

            <h4>
              Các tính năng chính
            </h4>
            <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Cụm đèn hậu
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              LED với đèn chỉ dẫn
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              LED với đèn chỉ dẫn
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Giải trí và kết nối
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Màn hình cảm ứng 10" hỗ trợ kết nối USB + Bluetooth
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Màn hình cảm ứng 10" hỗ trợ kết nối USB + Bluetooth
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Gương chiếu hậu bên ngoài
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Chỉnh điện + Gập tự động + Tích hợp đèn báo rẽ
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Chỉnh điện + Gập tự động + Tích hợp đèn báo rẽ
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Hộc đựng ly
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               2 hộc giữ mát (trung tâm)
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               2 hộc giữ mát (trung tâm)
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Màn hình hiển thị đa thông tin
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Vận hành của hệ thống Hybrid
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Vận hành của hệ thống Hybrid
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Âm thanh
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              6 loa
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              6 loa
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Điều hòa
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              Tự động
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              Tự động
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Điều khiển hành trình
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              Có
                </p>
              </div>
              <div className="col-sm-3">
              <p>
              Có
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Đèn ban ngày
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Có
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Có
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Đèn hướng dẫn
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Có
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               Có
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <p>
                Đèn pha
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               LED
                </p>
              </div>
              <div className="col-sm-3">
              <p>
               LED
                </p>
              </div>
            </div>
            <hr/>
          </div>
        </div>

        <div className="ProductDetails_4 m-5">
        <div className="row">
              <h1>
              Trải nghiệm XL7 HYBRID ngay
              </h1>
            </div>
          <div className="container-fluid">
            <div className="row p-5">
              <div className="col-md-2"></div>
              <div className="col-md-3">
              <i class='bx bx-map'></i>
                <p>tìm đại lý</p>
              </div>
              <div className="col-md-3">
              <i class='bx bx-car' ></i>
               <p>
               đăng kí lái thử
               </p>
              </div>
              <div className="col-md-3">
              <i class='bx bxs-book-open' ></i>
                <p>
                máy tính tài chính
                </p>
              </div>

              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductDetails_test;
