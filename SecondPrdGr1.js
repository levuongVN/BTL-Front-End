var startElement = 
[document.getElementById("start1"),
document.getElementById("start2"),
document.getElementById("start3"),
document.getElementById("start4"),
document.getElementById("start5"),
]
startElement[0].addEventListener("click",function(){
    startElement[0].style.color="gold";
})
startElement[1].addEventListener("click",function(){
    startElement[1].style.color="gold";
    startElement[0].style.color="gold";
})
startElement[2].addEventListener("click",function(){
    startElement[2].style.color="gold";
    startElement[1].style.color="gold";
    startElement[0].style.color="gold";
})
startElement[3].addEventListener("click",function(){
    startElement[3].style.color="gold";
    startElement[2].style.color="gold";
    startElement[1].style.color="gold";
    startElement[0].style.color="gold";
})
startElement[4].addEventListener("click",function(){
    startElement[3].style.color="gold";
    startElement[2].style.color="gold";
    startElement[1].style.color="gold";
    startElement[0].style.color="gold";
    startElement[4].style.color="gold";
})

var TakePRD ={
    tit: document.getElementById("Title").textContent,
    price: document.getElementById("Price").textContent,
    img: document.getElementById("imgMouse").getAttribute("src"),
};
document.getElementById("BuyPRD").addEventListener("click",function(){
    var a = document.getElementById("ipTen").value;
    var b = document.getElementById("ipsdt").value;
    var c = document.getElementById("ipadd").value;
    if(a==""|| b==""|| c==""){
        alert("Vui lòng điền đầy đủ thông tin");
    }else{
        alert("Đặt hàng thành công");
        document.getElementById("ipTen").value="";
        document.getElementById("ipsdt").value="";
        document.getElementById("ipadd").value="";

        var arr= JSON.parse(localStorage.getItem("purchasedProducts"))||[];// Nếu có item cũ, sẽ lấy luôn và nếu k có sẽ tạo mảng mới
        arr.push(TakePRD)// Nạp item mới vào mảng
        localStorage.setItem("purchasedProducts",JSON.stringify(arr));
        window.open("HomePage.html");
    }
})