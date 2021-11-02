function addShopping (a){
const li = a.parentNode.parentNode;
let goodsId = li.getAttribute("data-id");
let goodsName = li.querySelector(".goodsname").innerHTML;
let img = li.querySelector(".pic").getAttribute("src");

console.log(goodsId, goodsName, price, img);

}