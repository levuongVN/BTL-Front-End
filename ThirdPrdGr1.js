var startElement = [
  document.getElementById("start1"),
  document.getElementById("start2"),
  document.getElementById("start3"),
  document.getElementById("start4"),
  document.getElementById("start5"),
];
startElement[0].addEventListener("click", function () {
  startElement[0].style.color = "gold";
});
startElement[1].addEventListener("click", function () {
  startElement[1].style.color = "gold";
  startElement[0].style.color = "gold";
});
startElement[2].addEventListener("click", function () {
  startElement[2].style.color = "gold";
  startElement[1].style.color = "gold";
  startElement[0].style.color = "gold";
});
startElement[3].addEventListener("click", function () {
  startElement[3].style.color = "gold";
  startElement[2].style.color = "gold";
  startElement[1].style.color = "gold";
  startElement[0].style.color = "gold";
});
startElement[4].addEventListener("click", function () {
  startElement[3].style.color = "gold";
  startElement[2].style.color = "gold";
  startElement[1].style.color = "gold";
  startElement[0].style.color = "gold";
  startElement[4].style.color = "gold";
});

document.getElementById("black").addEventListener("click", function () {
  document.getElementById("imgMacbook").src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200";
  document.getElementById("white").style.border = "none";
  document.getElementById("black").style.border = "4px solid gray";
});
document.getElementById("white").addEventListener("click", function () {
  document.getElementById("imgMacbook").src =
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200";
  document.getElementById("black").style.border = "none";
  document.getElementById("white").style.border = "4px solid gray";
});

var TakePRD = {
  // Lay thong tin cua san pham
  tit: document.getElementById("Title").textContent,
  price: document.getElementById("Price").textContent,
  img: document.getElementById("imgMacbook").getAttribute("src"),
};
document.getElementById("BuyPRD").addEventListener("click", function () {
  var a = document.getElementById("ipTen").value;
  var b = document.getElementById("ipsdt").value;
  var c = document.getElementById("ipadd").value;
  if (a == "" || b == "" || c == "") {
    alert("Vui lòng điền đầy đủ thông tin");
  } else {
    var arr = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
    arr.push(TakePRD);
    localStorage.setItem("purchasedProducts", JSON.stringify(arr));
    alert("Mua hàng thành công!");
    window.open("HomePage.html");
  }
});