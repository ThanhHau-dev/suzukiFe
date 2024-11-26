import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./ProductDetails.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";




const ProductDetails = () => {
  const { id } = useParams(); // Nhận id từ URL
  const location = useLocation(); // Lấy thông tin route hiện tại
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Xác định API dựa vào route, validate đường link bằng react
    const apiEndpoint = location.pathname.includes("SUV")
      ? `http://14.225.198.48:3000/productsSUV/${id}`
      : `http://14.225.198.48:3000/productsBEN/${id}`;

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
      <CallButton/>
      <PopupEmail/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <img
              src={product.imgBanner}
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
                src= {product.imgProductDetails_1}
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
            {product.content_1_ProductDetails_1}
            </p>
          </div>
        </div>
      </div>

      <div className="ProductDetails_2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 ">
              <img
                src={product.imgProductDetails_2}
                alt="hình"
              />
            </div>
            <div className="col-md-4">
              <h1>{product.title_1_ProductDetails_2}</h1>
            </div>
          </div>

          <div className="row ProductDetails_2_more">
            <div className="col-md-6">
              <h1>{product.title_2_ProductDetails_2}</h1>
            </div>
            <div className="col-md-6">
              <p>
               {product.content_1_ProductDetails_2}
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
              src={product.imgProductDetails_2_1}
              alt="hình"
            />
          </div>

          <div className="row ProductDetails_2_2">
            <div className="col-md-6">
              <h1>{product.title_1_ProductDetails_2_2}</h1>
            </div>

            <div className="col-md-6">
              <p>
                {product.content_1_ProductDetails_2_2}
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
                src={product.imgProductDetails_2_3}
                alt="hình"
              />
            </div>

            <div className="col-md-4">
              <h2>{product.title_1_ProductDetails_2_3}</h2>
              <p>
                {product.content_1_ProductDetails_2_3}
              </p>
            </div>
          </div>

          <div className="row ProductDetails_2_4">
            <div className="col-md-4">
              <h2>{product.title_1_ProductDetails_2_4}</h2>
              <p>
                {product.content_1_ProductDetails_2_4}
              </p>
            </div>
            <div className="col-md-8">
              <img
                src={product.imgProductDetails_2_4}
                alt="hình"
              />
            </div>
          </div>

          <div className="row ProductDetails_2_5">
            <div className="col-md-6">
              <img
                src={product.imgProductDetails_2_5}
                alt="hình"
              />
            </div>

            <div className="col-md-6">
              <h2>{product.title_1_ProductDetails_2_5}</h2>
              <p>
                {product.content_1_ProductDetails_2_5}
              </p>
            </div>
          </div>
          <div className="row ProductDetails_2_6">
            <div className="col-sm-12">
              <img
                src= {product.imgProductDetails_2_6}
                alt="hình"
              />
            </div>
          </div>

          <div className="row ProductDetails_2_7">
            <div className="col-sm-6">
              <h2>{product.title_1_ProductDetails_2_7}</h2>
            </div>
            <div className="col-sm-6">
              <p>
               {product.content_1_ProductDetails_2_7}
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
                  {product.performance_title_1_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_1_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.performance_value_1_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_2_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_2_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.performance_value_2_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_3_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.performance_value_3_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.performance_value_3_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_4_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.performance_value_4_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_4_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.performance_title_5_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_5_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_5_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_6_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_6_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_6_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_7_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_7_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_7_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_8_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_8_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_8_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_9_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.performance_value_9_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.performance_value_9_ProductDetails_3}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                {product.performance_title_10_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.performance_value_10_ProductDetails_3}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.performance_value_10_ProductDetails_3}
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
                  {product.functionKey_title_1_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.functionKey_value_1_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.functionKey_value_1_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_2_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.functionKey_value_2_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_2_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_3_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.functionKey_value_3_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_3_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_4_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                  {product.functionKey_value_4_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_4_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_5_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.functionKey_value_5_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_5_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_6_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.functionKey_value_6_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
             {product.functionKey_value_6_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_7_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.functionKey_value_7_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.functionKey_value_7_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_8_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.functionKey_value_8_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
              {product.functionKey_value_8_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_9_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_9_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_9_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_10_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_10_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
                {product.functionKey_value_10_ProductDetails_3_1}
                </p>
              </div>
            </div> <hr/>

            <div className="row">
              <div className="col-sm-3">
                <p>
                  {product.functionKey_title_11_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_11_ProductDetails_3_1}
                </p>
              </div>
              <div className="col-sm-3 col-6 fw-bold">
              <p>
               {product.functionKey_value_11_ProductDetails_3_1}
                </p>
              </div>
            </div>
            <hr/>
          </div>
        </div>

        <div className="ProductDetails_4 m-5">
        <div className="row">
              <h1>
              Trải nghiệm {product.nameCar} ngay
              </h1>
            </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-3 col-6">
              <i class='bx bx-map'></i>
                <a href="/Dai_ly">
                <p>tìm đại lý
                </p>
                </a>
              </div>
              <div className="col-md-3 col-6">
              <i class='bx bx-car' ></i>
               <p>
               đăng kí lái thử
               </p>
              </div>
              <div className="col-md-3 col-6">
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
}

export default ProductDetails;
