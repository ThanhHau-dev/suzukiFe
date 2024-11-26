const main_1_renderProduct = document.querySelector(".main_1_renderProduct");
const imgBanner = document.querySelector(".imgBanner");
const main_1_menu_car = document.querySelectorAll(".main_1_menu_car");
const line = document.querySelector(".main_1_menu__line");


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

// ẩn hiện các xe ở main theo menu
const main_1_menu_All = document.querySelector("#main_1_menu_All");
const main_1_menu_SUV = document.querySelector("#main_1_menu_SUV");
const main_1_menu_BEN = document.querySelector("#main_1_menu_BEN");
const SUV_XL7 = document.querySelector("#SUV_XL7");
const SUV_JIMNY = document.querySelector("#SUV_JIMNY");
const BEN_PRO = document.querySelector("#BEN_PRO");
const BEN_VAN = document.querySelector("#BEN_VAN");

// Khi ấn vô phần main_1_menu_SUV thì xe BEN sẽ ẩn

main_1_menu_SUV.addEventListener("click", ()=> {
    BEN_PRO.style.display = "none";
    BEN_VAN.style.display = "none";

    SUV_JIMNY.style.display = "block";
    SUV_XL7.style.display = "block";

});


// Khi ấn vô phần BEN thì các xe ở SUV ẩn

main_1_menu_BEN.addEventListener("click", () => {
    SUV_JIMNY.style.display = "none";
    SUV_XL7.style.display = "none";

    BEN_PRO.style.display = "block";
    BEN_VAN.style.display = "block";
    BEN_PRO.style.textAlign = "center";
    BEN_VAN.style.textAlign = "center";
});

// Bấm vô tất cả 
main_1_menu_All.addEventListener("click", ()=> {
  BEN_PRO.style.display = "block";
  BEN_VAN.style.display = "block";
  SUV_JIMNY.style.display = "block";
  SUV_XL7.style.display = "block";
})

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



