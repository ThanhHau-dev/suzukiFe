import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Khuyen_mai from "./pages/Khuyen_mai";
import Cong_nghe from "./pages/Cong_nghe";
import News from "./pages/News";
import Bang_gia from "./pages/Bang_gia";
import Dai_ly from "./pages/Dai_ly";
import ProductDetails_SUV_XL7 from "./pages/ProductDetails_SUV_XL7";
import ProductDetails_SUV_JIMNY from "./pages/ProductDetails_SUV_JIMNY";
import ProductDetails_BEN_PRO from "./pages/ProductDetails_BEN_PRO";
import ProductDetails_BEN_VAN from "./pages/ProductDetails_BEN_VAN";
import News_1 from "./pages/News_1";

function App() {
  return (
    <>
      <Header />


      <Routes>
        {/* đường dẫn vào file nào thì Element chính là tên Compunent tương ứng đã export */}
        {/* <Route path="/ProductDetails" element={<ProductDetails/>} /> */}

        {/* Thiết lập đường đi cho trang thông tin chi tiết để callapi */}
        <Route path="/ProductDetails" element={<ProductDetails />} />

        {/* Route này sẽ render ProductDetail khi URL có dạng /productsSUV/:id */}
        <Route path="/productsSUV/:id" element={<ProductDetails />} />

        {/* Route này sẽ render ProductDetail khi URL có dạng /productsBEN/:id */}
        <Route path="/productsBEN/:id" element={<ProductDetails />} />

        {/* Đường dẫn tới trang khuyến mãi */}
        <Route path="/Khuyen_mai" element={<Khuyen_mai />} />

        {/* Đường dẫn tới trang công nghệ */}
        <Route path="/Cong_nghe" element={<Cong_nghe />} />

        {/* Đường dẫn tới trang News tin tức */}
        <Route path="/News/:id" element={<News />} />

        {/* Đường dẫn tới trang Contact liên hệ */}
        <Route path="/Contact" element={<Contact />} />

        {/* Đường dẫn tới trang bảng giá */}
        <Route path="/Bang_gia" element={<Bang_gia />} />

        {/* Đường tới trang đại lý */}
        <Route path="/Dai_ly" element={<Dai_ly />} />

        {/* Đường tới chi tiết xe SUV xl7 */}
        <Route path="/ProductDetails_SUV_XL7" element={<ProductDetails_SUV_XL7 />} />

        {/* Đường dẫn tới chi tiết xe SUV JIMNY */}
        <Route path="/ProductDetails_SUV_JIMNY" element={<ProductDetails_SUV_JIMNY />} />

        {/* Đường dẫn tới chi tiết xe BEN PRO */}
        <Route path="/ProductDetails_BEN_PRO" element={<ProductDetails_BEN_PRO />} />

        {/* Đường dẫn tới chi tiết xe VAN */}
        <Route path="/ProductDetails_BEN_VAN" element={<ProductDetails_BEN_VAN />} />

        {/* Đường tới new1 */}
        <Route path="/News_1" element={<News_1 />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;

// nói là điều hướng kiểu SPA, không cần load lại trang

// App.js chưá tất cả các compunet con
// Sắp xếp các compunent con sao thì layout của app sẽ như vậy. Cấu trúc hiển thị cuối cùng
