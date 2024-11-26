
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./News.css";
import CallButton from "../components/CallButton";
import PopupEmail from "../components/PopupEmail";




function News() {

  const { id } = useParams(); // Nhận id từ URL
  const location = useLocation(); // Lấy thông tin route hiện tại
  const [newsfeed, setProduct] = useState(null);

  useEffect(() => {
    // Xác định API dựa vào route, validate đường link bằng react
    const apiEndpointNews = `http://localhost:3000/news/${id}`

    // Gọi API dựa vào endpoint được chọn
    fetch(apiEndpointNews)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Lỗi khi lấy chi tiết bản tin:", error));
  }, [id, location.pathname]);

  if (!newsfeed) return <p>Đang tải bản tin...</p>;

  // newsfeed là biến đại diện cho kết quả để truy xuất

  return (
    <div className="News">
      <CallButton/>
      <PopupEmail/>
      <div className="container-fluid">
        <img className="News_Banner"
          src={newsfeed.News_Banner}
          alt="hình"
        />

        <div className="row News_1">
          <h1 className="New_1_Title_1">
          {newsfeed.New_1_Title_1}
          </h1>

          <p className="New_1_Content_1">
            {newsfeed.New_1_Content_1}
          </p>

          <img className="New_1_Banner_1"
            src={newsfeed.New_1_Banner_1}
            alt="hình"
          />

          <p className="New_1_Content_2">
            {newsfeed.New_1_Content_2}
          </p>

          <h5 className="New_1_Title_2">{newsfeed.New_1_Title_2}</h5>

          <p className="New_1_Content_3">
            {newsfeed.New_1_Content_3}
          </p>

          <img className="New_1_Banner_2"
            src={newsfeed.New_1_Banner_2}
            alt="hình"
          />

          <p className="New_1_Content_4">
              {newsfeed.New_1_Content_4}
          </p>

          <h5 className="New_1_Title_3">
              {newsfeed.New_1_Title_3}
          </h5>

          <img className="New_1_Banner_3"
            src={newsfeed.New_1_Banner_3}
            alt="hình"
          />

          <p className="New_1_Content_5">
              {newsfeed.New_1_Content_5}
          </p>

          <img className="New_1_Banner_4"
            src={newsfeed.New_1_Banner_4}
            alt="hình"
          />

          <p className="New_1_Content_6">
              {newsfeed.New_1_Content_6}
          </p>

          <img className="New_1_Banner_5"
            src={newsfeed.New_1_Banner_5}
            alt="hình"
          />

          <p className="New_1_Content_7">
              {newsfeed.New_1_Content_7}
          </p>

          <img className="New_1_Banner_6"
            src={newsfeed.New_1_Banner_6}
            alt="hình"
          />

          <p className="New_1_Content_8">
           {newsfeed.New_1_Content_8}
          </p>

          <img className="New_1_Banner_7"
            src={newsfeed.New_1_Banner_7}
            alt="hình"
          />

          <p className="New_1_Content_9">
           {newsfeed.New_1_Content_9}
          </p>

          <p className="New_1_infor">
            Thông tin chi tiết vui lòng liên hệ: <br/>Lô D, đường D1, KCN Cát Lái,
            Phường Thạnh Mỹ Lợi, TP.Thủ Đức, TP.HCM <br/>
            Hotline: 0964 060 153
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
