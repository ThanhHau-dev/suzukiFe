// cú pháp mẫu để viết html rồi xuất ra thành compunent trong react
import React from 'react';
import "./Header.css";

function Header() {
  return (
    <header>
    <div class="header">
    <div class="header_menu">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-3 col-xxl-6">
                <a href="/">
                  <img
                    src="https://doftr40680fkg.cloudfront.net/assets/images/logo.svg"
                    alt="Mô tả hình ảnh"
                  />
                </a>
                </div>

                <div class="col-lg-9 col-xxl-6">
                  <nav class="navbar">
                    <div class="dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Ô tô
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="/productsSUV/234"
                            >XL7 Hybrid</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="/productsSUV/8667"
                            >Jimny</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="/productsBEN/2348247"
                            >SUPER CARRY PRO</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="/productsBEN/1234"
                            >SUPER CARRY Van</a
                          >
                        </li>
                      </ul>
                    </div>

                    <a href="/Bang_gia" class="nav-link">Bảng giá</a>
                    <a href="/Dai_ly" class="nav-link">Đại lý</a>
                    <a href="/Khuyen_mai" class="nav-link">Khuyến mãi</a>
                    <a href="#" class="nav-link">Hậu mãi</a>
                    <a href="/Contact" class="nav-link">Liên hệ</a>
                    <i class="bx bx-search"></i>
                  </nav>
                </div>
              </div>
            </div>
          </div>

      <div class="container-fluid">
        <div class="header_banner">
          <div className="container-fluid"></div>
        </div>
      </div>
    </div>

    <div class="menuMobile">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-6">
              <a href="/">
                  <img
                    src="https://doftr40680fkg.cloudfront.net/assets/images/logo.svg"
                    alt="Mô tả hình ảnh"
                  />
                </a>
              </div>
              <div class="col-6">
                <div class="dropdown">
                  <i class='bx bx-list-ul'data-bs-toggle="dropdown"></i>
                  <ul class="dropdown-menu">
                   <li> <a href="/#otoAll" class="nav-link">ô tô</a> </li>
                   <li> <a href="/Bang_gia" class="dropdown-item nav-link">Bảng giá</a> </li>
                   <li> <a href="/Dai_ly" class="dropdown-item nav-link">Đại lý</a> </li>
                   <li> <a href="/Khuyen_mai" class="dropdown-item nav-link">Khuyến mãi</a> </li>
                   <li> <a class="dropdown-item nav-link">Hậu mãi</a> </li>
                   <li> <a href="/Contact" class="nav-link">Liên hệ</a> </li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
        </div>
    
  </header>

  );
}

export default Header;
