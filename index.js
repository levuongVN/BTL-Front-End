 document.getElementById("Register").addEventListener("click", function(){
    document.getElementById("Login").style.display="none";
    document.getElementById("Signup").style.display="block";
})

document.getElementById("btnSign").addEventListener("click", function(){
    var User = document.getElementById("UserSign").value;
    var Pass = document.getElementById("PassSign1").value;
    var rePass = document.getElementById("PassSign2").value;
    var Reg = /[a-zA-Z0-9]/;
    if(!Reg.test(User) || !Reg.test(Pass) || !Reg.test(rePass)){
        alert("Vui lòng điền đầy đủ thông tin");
    }else if(Pass!=rePass){
        alert("Mật khẩu không trùng khớp");
    }else if(Reg.test(User) && Pass==rePass ){
        localStorage.setItem("user", User);
        localStorage.setItem("pass", Pass);
        alert("Đăng ký thành công");
        document.getElementById("Login").style.display="block";
        document.getElementById("Signup").style.display="none";
    }
})
var User = localStorage.getItem("user");
var Pass = localStorage.getItem("pass");
var CheckBox =false;
document.getElementById("exampleCheck1").addEventListener("click", function(){
    CheckBox=true;
})
document.getElementById("btn-Login").addEventListener("click",()=>{
    var A = document.getElementById("User").value;
    var B = document.getElementById("Pass").value;
    if(A==User && B==Pass){
        alert("Đăng nhập thành công");
        document.getElementById("Login").style.display="block";
        document.getElementById("Signup").style.display="none";
        document.getElementById("User").value="";
        document.getElementById("Pass").value="";
        document.getElementById("exampleCheck1").checked=false;
        window.open("HomePage.html")
    }else{
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
})
alert("hello world");