const main_1_renderProduct = document.querySelector(".main_1_renderProduct");
const imgBanner = document.querySelector(".imgBanner");
const main_1_menu_car = document.querySelectorAll(".main_1_menu_car");
const line = document.querySelector(".main_1_menu__line");

// API data
const urlApiProductBEN = "http://14.225.198.48:3000/productsBEN"; // api sản phẩm xe BEN
const urlApiProduct = "http://14.225.198.48:3000/productsSUV"; // api sản phẩm xe SUV
const urlApiBanner = "http://14.225.198.48:3000/banner";
const urlApiNews = "http://14.225.198.48:3000/news";

// Hiện cửa sổ popup nhận thông tin. Đang test tạm thời
const popUpInput = document.querySelector(".popUpInput");
setTimeout(() => {
  popUpInput.style.display = "block";
}, 3000);

document.querySelector(".inputEmail i").addEventListener("click", () => {
  popUpInput.style.display = "none";
});

// Hàm hoạt ảnh menu ở main_1

// Dùng vòng lặp forEch
// car sẽ chứa phần tử của main_1_menu_car
main_1_menu_car.forEach((car, index) => {
  // thêm sự kiện click cho car
  car.addEventListener("click", () => {
    // dom class main_1_menu_Action về và xóa nó
    document
      .querySelector(".main_1_menu_car.main_1_menu_Action")
      .classList.remove("main_1_menu_Action");
    // set thanh line phía dưới bằng khoảng cách main_1_menu_car đang được chọn
    line.style.width = car.offsetWidth + "px";
    line.style.left = car.offsetLeft + "px";

    // thêm class main_1_menu_Action vô phần tử được nhấn
    car.classList.add("main_1_menu_Action");
  });
});

/*----------------------------------------------------------------------------------*/
// Hàm callApi hiển thị toàn bộ sản phẩm phần main
function callAPIRenderProduct() {
  fetch(urlApiProduct)
    .then((dataApi) => dataApi.json())

    .then((dataApiList1) => {
      // Bắt đầu gọi data của list 2
      return fetch(urlApiProductBEN)
        .then((dataApiList2) => dataApiList2.json())
        .then((dataApiList2Js) => {
          // sử dụng cú pháp gộp mảng spread
          const dataRenderTest = [...dataApiList1, ...dataApiList2Js];
          return dataRenderTest;
        })
        .catch((errorurlApiProductBEN) => {
          console.log(
            "Đã xảy ra lỗi trong quá trình callApi urlApiProductBEN: " +
              errorurlApiProductBEN
          );
        });
    })

    .then((dataRender) => {
      let htmls = dataRender.map((dataRenderHtml) => {
        return `
                 <div class="col-md-3 col-6">
                <div class="card" id="${dataRenderHtml.id}" onclick="viewProductDetails(this)" data-CarType="${dataRenderHtml.dataCarType}">
                  <img class="card-img-top" src="${dataRenderHtml.img}">
                  <h3 class="card-title">
                    ${dataRenderHtml.nameCar}
                  </h3>
                  <div class="main_1_renderProduct_Action d-flex align-items-center">
                    <span class="card-title">
                     Từ ${dataRenderHtml.price} VND
                    </span>
                    <button class="justify-content-end card_button">
                    <i class='bx bx-right-arrow-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
             `;
      });

      main_1_renderProduct.innerHTML = htmls.join("");
    })

    .catch((error) => {
      console.log("Đã có lỗi khi gọi api urlApiProduct: " + error);
    })
    .finally((done) => {
      console.log("Đã kết thúc quá trình callApi");
    });
}
callAPIRenderProduct();

// gọi hàm thêm lần nữa nếu khi bấm vô phần tất cả ở menu main
document.querySelector("#main_1_menu_All").addEventListener("click", () => {
  callAPIRenderProduct();
});

/*---------------------------------------------------------------------------------------------*/

// Hàm callApi hiển thị mỗi xe SUV
function callApiRennderProductSUV() {
  fetch(urlApiProduct)
    .then((dataProductSUV) => dataProductSUV.json())
    .then((dataProductSUVJs) => {
      let htmlRenderdataProductSUVJs = dataProductSUVJs.map(
        (htmlDataRenderdataProductSUVJs) => {
          return `
                 <div class="col-md-3">
                <div class="card" id="${htmlDataRenderdataProductSUVJs.id}" onclick="viewProductDetails(this)" data-CarType="${htmlDataRenderdataProductSUVJs.dataCarType}">
                  <img class="card-img-top" src="${htmlDataRenderdataProductSUVJs.img}">
                  <h3 class="card-title">
                    ${htmlDataRenderdataProductSUVJs.nameCar}
                  </h3>
                  <div class="main_1_renderProduct_Action d-flex align-items-center">
                    <span class="card-title">
                     Từ ${htmlDataRenderdataProductSUVJs.price} VND
                    </span>
                    <button class="justify-content-end card_button">
                    <i class='bx bx-right-arrow-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
             `;
        }
      );
      main_1_renderProduct.innerHTML = htmlRenderdataProductSUVJs.join("");
    })
    .catch((errordataProductSUVJs) => {
      console.log(
        "Đã xảy ra lỗi khi callapi cho xe SUV: " + errordataProductSUVJs
      );
    })
    .finally((donedataProductSUVJs) => {
      console.log(
        "Quá trình callapi cho SUV kết thúc: " + donedataProductSUVJs
      );
    });
}
// gọi hàm khi ấn vào phần SUV trên menu ở main
document.querySelector("#main_1_menu_SUV").addEventListener("click", () => {
  callApiRennderProductSUV();
});
/*--------------------------------------------------------------------------------*/

// Hàm callApi hiển thị xe ben ở main
function callApiRennderProductBEN() {
  fetch(urlApiProductBEN)
    .then((dataProductBEN) => dataProductBEN.json())
    .then((dataProductBENJs) => {
      let htmlRenderdataProductBENJs = dataProductBENJs.map(
        (htmlDataRenderdataProductBENJs) => {
          return `
                 <div class="col-md-3">
                <div class="card" id="${htmlDataRenderdataProductBENJs.id}" onclick="viewProductDetails(this)" data-CarType="${htmlDataRenderdataProductBENJs.dataCarType}">
                  <img class="card-img-top" src="${htmlDataRenderdataProductBENJs.img}">
                  <h3 class="card-title">
                    ${htmlDataRenderdataProductBENJs.nameCar}
                  </h3>
                  <div class="main_1_renderProduct_Action d-flex align-items-center">
                    <span class="card-title">
                     Từ ${htmlDataRenderdataProductBENJs.price} VND
                    </span>
                    <button class="justify-content-end card_button">
                    <i class='bx bx-right-arrow-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
             `;
        }
      );
      main_1_renderProduct.innerHTML = htmlRenderdataProductBENJs.join("");
    })
    .catch((errordataProductBENJs) => {
      console.log(
        "Đã xảy ra lỗi khi callapi cho xe ben: " + errordataProductBENJs
      );
    })
    .finally((donedataProductBENJs) => {
      console.log("Quá trình callapi xe ben kết thúc: " + donedataProductBENJs);
    });
}
// gọi hàm khi ấn vào phần BEN trên menu ở main
document.querySelector("#main_1_menu_BEN").addEventListener("click", () => {
  callApiRennderProductBEN();
});

/*------------------------------------------------------------------------------------*/

// Hàm callApi hiển thị banner ở main
function callAPIRenderBanner() {
  fetch(urlApiBanner)
    .then((dataBannerJs) => dataBannerJs.json())
    .then((dataBanner) => {
      // Hiển thị ở banner main_2
      let htmlBanner = dataBanner.map((dataBanner) => {
        return `
             <img src="${dataBanner.imgBanner}" alt=".">
                `;
      });
      imgBanner.innerHTML = htmlBanner.join("");

      // Hiển thị banner ở main_3
      let htmlBanner3 = dataBanner.map((dataBanner) => {
        return `
             <img src="${dataBanner.imgBanner_3}" alt=".">
                `;
      });
      document.querySelector(".imgBanner_3").innerHTML = htmlBanner3.join("");
    })

    .catch((errorBanner) => {
      console.log("đã xảy ra lỗi khi gọi urlApiBanner: " + errorBanner);
    })
    .finally((doneBanner) => {
      console.log("Đã kết thúc quá trình call api urlApiBanner");
    });
}
callAPIRenderBanner();

/*-----------------------------------------------------------------------------------------------*/

// Hàm callapi hiển thị tin tức main_5_news
function callAPIRenderNews() {
  fetch(urlApiNews)
    .then((dataNewsJson) => dataNewsJson.json())
    .then((dataNewsJs) => {
      let htmlsNews = dataNewsJs.map((dataNewsJsHtml) => {
        return `
            <div class="col-md-3">
                <div id="${dataNewsJsHtml.id}" class="card" onclick="viewNewsDetails(this)">
                  <img
                    class="card-img-top"
                    src="${dataNewsJsHtml.img}"
                  />
                  <p class="card-text">
                    ${dataNewsJsHtml.describe_news}
                  </p>
                </div>
                   <a id="${dataNewsJsHtml.id}" class="describe_a" onclick="viewNewsDetails(this)">
                  <span>Xem chi tiết</span>
                  <button class="describe_button">
                    <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </a>
              </div>
  
        `;
      });

      document.querySelector(".main_5_news").innerHTML = htmlsNews.join("");
    })
    .catch((errorNews) => {
      console.log(
        "Đã có lỗi xảy ra khi callapi callAPIRenderNews: " + errorNews
      );
    })
    .finally((doneNews) => {
      console.log("Đã kết thúc quá trình callapi callAPIRenderNews");
    });
}
callAPIRenderNews();

/*----------------------------------------------------------------------------------------------------------*/

// Sự kiện đổi màu thanh menu khi cuộn

// window là đối tượng có sẵn của js, đại diện cho cửa sổ của browser
window.addEventListener("scroll", () => {
  const bg_header_menu = document.querySelector(".header_menu");
  if (scrollY === 0) {
    bg_header_menu.style.backgroundColor = "#ffffff99";
  } else {
    bg_header_menu.style.backgroundColor = "white";
  }
});

// dòng này dành cho mobile
window.addEventListener("scroll", () => {
  const bg_header_menu_mobile = document.querySelector(".menuMobile");
    if (scrollY === 0){
        bg_header_menu_mobile.style.backgroundColor = "#ffffff99";
    }
    else {
      bg_header_menu_mobile.style.backgroundColor = "white";
    }
})


/*-----------------------------------------------------------------------------------------------*/

//điều hướng về react khi nhấn vô sản phẩm
function viewProductDetails(productDiv) {
  const productId = productDiv.id; // Lấy ID từ phần tử cha của nút
  const dataCarType = productDiv.getAttribute("data-CarType");

  console.log("id sản phẩm: " + productId);

  // Nếu SUV thì sẽ điều hướng link về SUV
  // Nếu BEN thì sẽ điêu hướng link về BEN
  if (dataCarType === "SUV") {
    window.location.href = `/productsSUV/${productId}`; // Chuyển hướng đến trang chi tiết sản phẩm SUV
  } else if (dataCarType === "BEN") {
    window.location.href = `/productsBEN/${productId}`; // Chuyển hướng đến trang chi tiết sản phẩm BEN
  }
}

/*-----------------------------------------------------------------------------------------------*/

// Điều hướng về react khi nhấn mục tin tức
function viewNewsDetails(newsDiv){
    const newsId = newsDiv.id;
    console.log("id tin tức: " + newsId);
    window.location.href = `/news/${newsId}`// chuyển hướng đến trang chi tiết tin tức News
}

/*----------------------------------------------------------------------------------------------*/

// Email Js

const btnEmailAction = document.querySelector(".btn-EmailAction");
// emailjs.init("w15JVV1AB96-f0lko");

btnEmailAction.addEventListener("click", ()=> {


  let pay_method = document.querySelector('input[name="payment"]:checked').value;

  const name = document.querySelector("#name").value;
  const tel = document.querySelector("#tel").value;
  const car = document.getElementById("carList").value;

  
  resultUser = {
    name: name,
    tel: tel,
    pay_method: pay_method,
    car: car
  };

  emailjs.send('service_s4c6u7k', 'template_nnkuw0h', resultUser)
  .then((result) => {
    console.log('Email đã được gửi thành công!', result.text);
    alert('Cảm ơn bạn nhiều nhé, chúng tôi sẽ sớm liên hệ lại !');

    // cái này dùng để điều hướng trang, sau khi thực hiện hàng động trên
    window.location.href = '#';
  })
  .catch((error) => {
    console.error('Lỗi khi gửi email:', error);
    alert('Có lỗi xảy ra khi gửi. Vui lòng thử lại sau hoặc liên hệ với chúng tôi. Qua tel: 0862 701 467');
    window.location.href = '#';
  });

})
/*-------------------------------------------------------------------------*/ 



