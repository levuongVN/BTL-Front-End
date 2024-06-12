var arrIdea = [
  "phụ kiện điện thoại",
  "macbook",
  "tay cầm xbox",
  "pc",
  "laptop",
  "imac",
];
var a;
var dataSearch = document.getElementById("IdeaSearch");

document.getElementById("searchValue").addEventListener("input", () => {
  var b = document.getElementById("searchValue").value;
  takeValue(b);
});

function takeValue(a) {
  a.toLowerCase();
  dataSearch.innerHTML = "";
  dataSearch.style.display = "none";
  if (a == "" || a == " ") {
    dataSearch.style.display = "none";
    return;
  } else {
    for (var i = 0; i < arrIdea.length; i++) {
      if (arrIdea[i].includes(a) == true) {
        var makeTags_a = document.createElement("a");
        var makeTags_br = document.createElement("br");
        makeTags_a.innerHTML = arrIdea[i];
        makeTags_a.href = "#";
        dataSearch.style.display = "block";
        dataSearch.appendChild(makeTags_a);
        dataSearch.appendChild(makeTags_br);
      }
    }
  }
}
document.getElementById("white").addEventListener("click", function () {
  var anh = document.getElementById("anhSP1_gr1");
  anh.src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2E3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1626468075000";
  document.getElementById("white").style.border = "4px solid gray";
  document.getElementById("black").style.border = "none";
});
document.getElementById("black").addEventListener("click", () => {
  var anh = document.getElementById("anhSP1_gr1");
  anh.src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMMQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645138486301";
  document.getElementById("black").style.border = "4px solid gray";
  document.getElementById("white").style.border = "none";
});

document.getElementById("black_OF_Mac").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_MacbookPro14");
  anh.src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200";
  document.getElementById("black_OF_Mac").style.border = "4px solid gray";
  document.getElementById("silver_OF_Mac").style.border = "none";
});
document.getElementById("silver_OF_Mac").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_MacbookPro14");
  anh.src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200";
  document.getElementById("silver_OF_Mac").style.border = "4px solid gray";
  document.getElementById("black_OF_Mac").style.border = "none";
});

document.getElementById("black_OF_Xbox").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_XboxOne");
  anh.src =
    "https://thereal.buydig.com/get_pimage100.phtml?source=1&typeid=650174&sku=MSQAT00001";
  document.getElementById("black_OF_Xbox").style.border = "4px solid gray";
  document.getElementById("red_OF_Xbox").style.border = "none";
  document.getElementById("blue_OF_Xbox").style.border = "none";
});
document.getElementById("red_OF_Xbox").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_XboxOne");
  anh.src =
    "https://thereal.buydig.com/get_pimage100.phtml?source=1&typeid=658739&sku=MSQAU00011";
  document.getElementById("red_OF_Xbox").style.border = "4px solid gray";
  document.getElementById("black_OF_Xbox").style.border = "none";
  document.getElementById("blue_OF_Xbox").style.border = "none";
});
document.getElementById("blue_OF_Xbox").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_XboxOne");
  anh.src =
    "https://thereal.buydig.com/get_pimage100.phtml?source=1&typeid=650188&sku=MSQAU00001";
  document.getElementById("blue_OF_Xbox").style.border = "4px solid gray";
  document.getElementById("black_OF_Xbox").style.border = "none";
  document.getElementById("red_OF_Xbox").style.border = "none";
});

document.getElementById("ocean_OF_Imac").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_Imac");
  anh.src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618";
  document.getElementById("ocean_OF_Imac").style.border = "4px solid gray";
  document.getElementById("green_OF_Imac").style.border = "none";
  document.getElementById("pink_OF_Imac").style.border = "none";
});
document.getElementById("green_OF_Imac").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_Imac");
  anh.src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-green-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618";
  document.getElementById("green_OF_Imac").style.border = "4px solid gray";
  document.getElementById("ocean_OF_Imac").style.border = "none";
  document.getElementById("pink_OF_Imac").style.border = "none";
});
document.getElementById("pink_OF_Imac").addEventListener("click", function () {
  var anh = document.getElementById("img_OF_Imac");
  anh.src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-pink-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101617";
  document.getElementById("pink_OF_Imac").style.border = "4px solid gray";
  document.getElementById("green_OF_Imac").style.border = "none";
  document.getElementById("ocean_OF_Imac").style.border = "none";
});



window.addEventListener("scroll", function(){
  var element = document.getElementById("TextColoriMac");
  var elementPosition = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  var dem =5;
  if(elementPosition.top < windowHeight && elementPosition.bottom>=0){
    var dem = 1;
    this.setInterval(()=>{
      if(dem==1){
        document.getElementById("ListTextColor1").style.transition = "0.3s";
        document.getElementById("ListTextColor1").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor2").style.transition = "0.3s";
        document.getElementById("ListTextColor2").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor3").style.transition = "0.3s";
        document.getElementById("ListTextColor3").style.transform=`translateY(${dem*-110}%)`;
        document.getElementById("ListTextColor4").style.transition = "0.3s";
        document.getElementById("ListTextColor4").style.transform=`translateY(${dem*-110}%)`;
        document.getElementById("ListTextColor5").style.transition = "0.3s";
        document.getElementById("ListTextColor5").style.transform=`translateY(${dem*-110}%)`;
        dem++;
      }else if(dem==2){
        document.getElementById("ListTextColor1").style.transition = "0.3s";
        document.getElementById("ListTextColor1").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor2").style.transition = "0.3s";
        document.getElementById("ListTextColor2").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor3").style.transition = "0.3s";
        document.getElementById("ListTextColor3").style.transform=`translateY(${dem*-120}%)`;
        document.getElementById("ListTextColor4").style.transition = "0.3s";
        document.getElementById("ListTextColor4").style.transform=`translateY(${dem*-110}%)`;
        document.getElementById("ListTextColor5").style.transition = "0.3s";
        document.getElementById("ListTextColor5").style.transform=`translateY(${dem*-110}%)`;
        dem++;
      }else if(dem==3){
        document.getElementById("ListTextColor1").style.transition = "0.3s";
        document.getElementById("ListTextColor1").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor2").style.transition = "0.3s";
        document.getElementById("ListTextColor2").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor3").style.transition = "0.3s";
        document.getElementById("ListTextColor3").style.transform=`translateY(${dem*-120}%)`;
        document.getElementById("ListTextColor4").style.transition = "0.3s";
        document.getElementById("ListTextColor4").style.transform=`translateY(${dem*-120}%)`;
        document.getElementById("ListTextColor5").style.transition = "0.3s";
        document.getElementById("ListTextColor5").style.transform=`translateY(${dem*-110}%)`;
        dem++;
      }else if(dem==4){
        document.getElementById("ListTextColor1").style.transition = "0.3s";
        document.getElementById("ListTextColor1").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor2").style.transition = "0.3s";
        document.getElementById("ListTextColor2").style.transform=`translateY(${dem*-115}%)`;
        document.getElementById("ListTextColor3").style.transition = "0.3s";
        document.getElementById("ListTextColor3").style.transform=`translateY(${dem*-120}%)`;
        document.getElementById("ListTextColor4").style.transition = "0.3s";
        document.getElementById("ListTextColor4").style.transform=`translateY(${dem*-120}%)`;
        document.getElementById("ListTextColor5").style.transition = "0.3s";
        document.getElementById("ListTextColor5").style.transform=`translateY(${dem*-120}%)`;
        dem++;
      }else{
        this.clearInterval(this.window);
      }
    },2000)
  }
});
function ChooseColoriMac(){
  document.getElementById("circleGreen").addEventListener("click",()=>{
    document.getElementById("Greenimac").style.display="block";
    document.getElementById("circleGreen").style.width="35px";
    document.getElementById("circleGreen").style.height="35px";
    document.getElementById("circleGreen").style.border="4px solid gray";
  
    document.getElementById("PinkiMac").style.display="none";
    document.getElementById("circlePink").style.width="27px";
    document.getElementById("circlePink").style.height="27px";
    document.getElementById("circlePink").style.border="none";
  
    document.getElementById("GoldiMac").style.display="none";
    document.getElementById("circleGold").style.width="27px";
    document.getElementById("circleGold").style.height="27px";
    document.getElementById("circleGold").style.border="none";
  
  
    document.getElementById("OceaniMac").style.display="none";
    document.getElementById("circleOcean").style.width="27px";
    document.getElementById("circleOcean").style.height="27px";
    document.getElementById("circleOcean").style.border="none";
  
    document.getElementById("imgImac1").style.marginLeft = "25%"
    document.getElementById("imgImac1").src="https://www.apple.com/v/imac/p/images/overview/color_side_green__bjxhwofb06b6_large_2x.jpg";
    document.getElementById("imgImac2").src="https://www.apple.com/v/imac/p/images/overview/color_front_green__eb8qbnemmre6_large_2x.jpg";
    document.getElementById("imgImac3").src="https://www.apple.com/v/imac/p/images/overview/color_back_green__buxxfjccqjzm_large_2x.jpg";

  });
  document.getElementById("circleOcean").addEventListener("click",()=>{
    document.getElementById("OceaniMac").style.display="block";
    document.getElementById("circleOcean").style.width="35px";
    document.getElementById("circleOcean").style.height="35px";
    document.getElementById("circleOcean").style.border="4px solid gray";
  
    document.getElementById("Greenimac").style.display="none";
    document.getElementById("circleGreen").style.width="27px";
    document.getElementById("circleGreen").style.height="27px";
    document.getElementById("circleGreen").style.border="none";
  
    document.getElementById("PinkiMac").style.display="none";
    document.getElementById("circlePink").style.width="27px";
    document.getElementById("circlePink").style.height="27px";
    document.getElementById("circlePink").style.border="none";
  
    document.getElementById("GoldiMac").style.display="none";
    document.getElementById("circleGold").style.width="27px";
    document.getElementById("circleGold").style.height="27px";
    document.getElementById("circleGold").style.border="none";
  
    document.getElementById("imgImac1").style.marginLeft = "18.7%";
    document.getElementById("imgImac1").src="https://www.apple.com/v/imac/p/images/overview/color_side_blue__db9cbvh5i9g2_large_2x.jpg";
    document.getElementById("imgImac2").src="https://www.apple.com/v/imac/p/images/overview/color_front_blue__x3psx2ttezmi_large_2x.jpg";
    document.getElementById("imgImac3").src="https://www.apple.com/v/imac/p/images/overview/color_back_blue__drupb0dshcmu_large_2x.jpg";

  });
  document.getElementById("circlePink").addEventListener("click",()=>{
      document.getElementById("PinkiMac").style.display="block";
    document.getElementById("circlePink").style.width="35px";
    document.getElementById("circlePink").style.height="35px";
    document.getElementById("circlePink").style.border="4px solid gray";
  
    document.getElementById("Greenimac").style.display="none";
    document.getElementById("circleGreen").style.width="27px";
    document.getElementById("circleGreen").style.height="27px";
    document.getElementById("circleGreen").style.border="none";
  
    document.getElementById("OceaniMac").style.display="none";
    document.getElementById("circleOcean").style.width="27px";
    document.getElementById("circleOcean").style.height="27px";
  document.getElementById("circleOcean").style.border="none";
    
    document.getElementById("GoldiMac").style.display="none";
    document.getElementById("circleGold").style.width="27px";
    document.getElementById("circleGold").style.height="27px";
    document.getElementById("circleGold").style.border="none";
  
    document.getElementById("imgImac1").style.marginLeft = "24.8%"
    document.getElementById("imgImac1").src="https://www.apple.com/v/imac/p/images/overview/color_side_pink__ci9ldbch42fm_large_2x.jpg";
    document.getElementById("imgImac2").src="https://www.apple.com/v/imac/p/images/overview/color_front_pink__ewotg63rfmie_large_2x.jpg";
    document.getElementById("imgImac3").src="https://www.apple.com/v/imac/p/images/overview/color_back_pink__f9bmifakmlm6_large_2x.jpg";
  });
  document.getElementById("circleGold").addEventListener("click",()=>{
    document.getElementById("GoldiMac").style.display="block";
    document.getElementById("circleGold").style.width="35px";
    document.getElementById("circleGold").style.height="35px";
    document.getElementById("circleGold").style.border="4px solid gray";
  
    document.getElementById("Greenimac").style.display="none";
    document.getElementById("circleGreen").style.width="27px";
    document.getElementById("circleGreen").style.height="27px";
    document.getElementById("circleGreen").style.border="none";
  
    document.getElementById("OceaniMac").style.display="none";
    document.getElementById("circleOcean").style.width="27px";
    document.getElementById("circleOcean").style.height="27px";
    document.getElementById("circleOcean").style.border="none";
    
    document.getElementById("PinkiMac").style.display="none";
    document.getElementById("circlePink").style.width="27px";
    document.getElementById("circlePink").style.height="27px";
    document.getElementById("circlePink").style.border="none";
  
    document.getElementById("imgImac1").style.marginLeft = "25%"
    document.getElementById("imgImac1").src="https://www.apple.com/v/imac/p/images/overview/color_side_yellow__f4a0s12fqj2a_large_2x.jpg";
    document.getElementById("imgImac2").src="https://www.apple.com/v/imac/p/images/overview/color_front_yellow__cja2t2hwgcty_large_2x.jpg";
    document.getElementById("imgImac3").src="https://www.apple.com/v/imac/p/images/overview/color_back_yellow__fmx5q8ntpj6m_large_2x.jpg";
  });
}
ChooseColoriMac();

window.addEventListener("scroll", function(){
  var GetElm = document.getElementById("title_scrollShop");
  var CheckElm = GetElm.getBoundingClientRect();
  var HeightOFWindow = window.innerHeight;
  if(CheckElm.top < HeightOFWindow && CheckElm.bottom >=0){
    GetElm.style.transition=" 1.5s";
    GetElm.style.opacity = "1";
  }else{
    GetElm.style.transition=" 1.5s";
    GetElm.style.opacity = "0";
  }
})

window.addEventListener("scroll", function(){
  var GetElm=[
    document.getElementById("text1_ChinhHang"),
    document.getElementById("text2_ChinhHang"),
    document.getElementById("text3_ChinhHang"),
    document.getElementById("text4_ChinhHang"),
    document.getElementById("text5_ChinhHang"),
    document.getElementById("text6_ChinhHang"),
    document.getElementById("text7_ChinhHang")
  ]
  for(var i=0; i<GetElm.length; i++){
    var CheckElm = GetElm[i].getBoundingClientRect();
    var HeightOFWindow = window.innerHeight;
    if(CheckElm.top < HeightOFWindow && CheckElm.bottom >=0){
      GetElm[i].style.transition=" 1.5s";
      GetElm[i].style.opacity = "1";
    }else{
      GetElm[i].style.transition=" 1.5s";
      GetElm[i].style.opacity = "0";
    }
  }
})
document.getElementById("BuyFirstProduct1").addEventListener("click", function(){
    window.open("FirstPrdGr1.html");
})

document.getElementById("BuySecondProduct1").addEventListener("click", function(){
  window.open("SecondPrdGr1.html");
})

document.getElementById("iconShopNav").addEventListener("click", function(){
  window.open("Gio_Hang.html");
})
document.getElementById("BuyThirdProduct1").addEventListener("click", function(){
  window.open("ThirdPrdGr1.html");
});
document.getElementById("ColorsMac1").addEventListener("mouseenter", function(){
  document.getElementById("img_Mac").src = "MacbookAir.png";
  document.getElementById("ColorsMac1").style.border = "1px solid black";
});
document.getElementById("ColorsMac1").addEventListener("mouseleave", function(){
  document.getElementById("ColorsMac1").style.border = "none";
  document.getElementById("img_Mac").src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1634145607000";
})
document.getElementById("ColorsMac2").addEventListener("mouseenter", function(){
  document.getElementById("img_Mac").src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-m2-midnight-202208?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1659114484307";
  document.getElementById("ColorsMac2").style.border = "1px solid black";
});
document.getElementById("ColorsMac2").addEventListener("mouseleave", function(){
  document.getElementById("ColorsMac2").style.border = "none";
  document.getElementById("img_Mac").src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1634145607000";
})

window.addEventListener("scroll",()=>{
  var GetElm = [document.getElementById("imgMac_Detail"), document.getElementById("textMacDetail2"), document.getElementById("imgMac_Detail1"), document.getElementById("Thunderbolt"), document.querySelector(".imgMac_Detail2")];
  var getElm = [document.getElementById("textMacDetail1"), document.getElementById("RechargeText"), document.getElementById("MagText"), document.querySelector(".TextDetailMac")]
  
  var CheckElm=[];
  for(var i=0; i<GetElm.length; i++){
    CheckElm[i] = GetElm[i].getBoundingClientRect();
  }
  var WindowHeight = window.innerHeight;
  for(var i=0;i<GetElm.length;i++){
    if(CheckElm[i].top < WindowHeight && CheckElm[i].bottom >= 0){
      GetElm[i].style.transform = "translateX(0%)";
      GetElm[i].style.opacity = "1";
    }else{
      GetElm[i].style.transform = "translateX(-200%)";
      GetElm[i].style.opacity = "0";
    }
  }
  for(var i=0; i<getElm.length; i++){
    CheckElm[i] = getElm[i].getBoundingClientRect();
  }
  for(var i=0;i<getElm.length;i++){
    if(CheckElm[i].top < WindowHeight && CheckElm[i].bottom >= 0){
      getElm[i].style.transform = "translateX(0%)";
      getElm[i].style.opacity = "1";
    }else{
      getElm[i].style.transform = "translateX(200%)";
      getElm[i].style.opacity = "0";
    }
  }
})

document.getElementById("Submitcontact").addEventListener("click", function(){
  var Email  = document.querySelector("#exampleFormControlInput1").value;
  var text = document.querySelector("#exampleFormControlTextarea1").value;
  var regex = /\S/ // Biểu thức chính quy để kiểm tra xem chuỗi có chứa bất kỳ kí tự nào hay không
  if(Email.includes("@",0)&& regex.test(text) ){ //regex.test(text) Đây là cách kiểm tra, nếu có thì trả về true và ngc lại
    alert("Thanks For Contact!");
  }else{
    alert("Please Enter Your Email and Text");
  }
})
var Theme =true;
document.getElementById("SW-Theme").addEventListener("click",function(){
  var a = document.getElementById("SW-Theme").querySelector("i"); // Lấy phần tử <i> nếu tồn tại
  if(!a){
    a = document.createElement("i");
    document.getElementById("SW-Theme").appendChild(a);
  }
  if(Theme==true){
    a.className="fa-solid fa-cloud-sun";
    a.style.color = "#FFD43B";
    document.getElementById("SW-Theme").appendChild(a);
    document.getElementById("SW-Theme").style.backgroundColor = "white";
  document.body.style.backgroundColor = "#1a1a1a";
  document.body.style.color = "white";
  document.getElementById("Productions").style.color = "black";
  document.getElementById("ProductionsMobile").style.color = "black";
  document.getElementById("iMacPrduct").style.color = "black";
  document.getElementById("MacBookProduct").style.color = "black";
  document.getElementById("scroll_MyShop").style.color = "white";
  document.getElementById("Line").style.backgroundColor = "white";
  document.querySelector(".upToNav").style.color="white";
  document.body.style.transition = "0.5s"
  Theme=false;
  }else{
    a.className="fa-solid fa-moon";
    a.style.color = "black";
    document.getElementById("SW-Theme").appendChild(a);
    document.getElementById("SW-Theme").style.backgroundColor = "white";
    document.body.style.backgroundColor = "#c8ccd4";
    document.body.style.color = "black";
    document.getElementById("scroll_MyShop").style.color = "black";
    document.getElementById("Line").style.backgroundColor = "black";
    document.querySelector(".upToNav").style.color="black";
    document.body.style.transition = "0.5s"
    Theme=true;
  }
});
document.getElementById("LINKtoShop").addEventListener("mouseenter",()=>{
  document.getElementById("LINKtoShop").style.textDecoration="underline";
  document.getElementById("fa-solid").style.marginLeft = "0.5%"
})
document.getElementById("LINKtoShop").addEventListener("mouseleave",()=>{
  document.getElementById("LINKtoShop").style.textDecoration="none";
  document.getElementById("fa-solid").style.marginLeft = "0.2%"
})
document.querySelector(".LINKtoShop").addEventListener("mouseleave",()=>{
  document.querySelector(".LINKtoShop").style.textDecoration="none";
  document.getElementById("fa-solid").style.marginLeft = "0.2%"
})
window.addEventListener("scroll",()=>{
  var GetElm = document.getElementById("EffectXbox1");
  var CheckElm = GetElm.getBoundingClientRect();
  var WindowHeight = window.innerHeight;
  if(CheckElm.top <= WindowHeight && CheckElm.bottom >= 0){
    GetElm.style.marginLeft = "46%";
    GetElm.style.opacity = "1";
  }
});