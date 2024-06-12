var a = localStorage.getItem("purchasedProducts");
var b = JSON.parse(a);
var takeElm = document.getElementById("Cart");
b.forEach((keys) => {
    var elm = document.createElement("div");
    elm.innerHTML = `
    <div class="card" style="width: 15rem;">
  <img src="${keys.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${keys.tit}</h5>
    <i class="card-text">${keys.price}</i>
    <br>
    <button href="#" class="btn btn-primary">Remove</button>
  </div>
</div>
        `
        takeElm.appendChild(elm);
});