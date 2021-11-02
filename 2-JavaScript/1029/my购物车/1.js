// to-do List  : 数量应该可以自由输入,
// 还有重复校验



window.onload = function() {
    var aData = [{
            "imgUrl": "img/pic1.png",
            "proName": " 阿玛尼(Emporio Armani) 满天星女士手表 ",
            "proPrice": "1999",
            "proComm": "133"
        },
        {
            "imgUrl": "img/pic2.jpg",
            "proName": " 丹尼尔惠灵顿 手表男 ",
            "proPrice": "1300",
            "proComm": "97"
        },
        {
            "imgUrl": "img/pic3.jpg",
            "proName": " Armani阿玛尼手表女士时尚石英腕表银 ",
            "proPrice": "1500",
            "proComm": "255"
        },
        {
            "imgUrl": "img/pic4.jpg",
            "proName": "【明星代言】马克华菲小绿表手表女 ",
            "proPrice": "238",
            "proComm": "1100"
        },
        {
            "imgUrl": "img/pic1.png",
            "proName": "阿玛尼(Emporio Armani) 满天星女士手表  ",
            "proPrice": "750",
            "proComm": "999"
        }
    ];
    // 元素对象
    var oBox = document.getElementById("box");
    console.log(oBox);
    var oCar = document.getElementById("car");
    // 返回的是HTMLCollection, 所以要加下标变成HTMLElement
    var oUl = document.getElementsByTagName("ul")[0];

// 初始化下方的商品列表
    for (var i = 0; i < aData.length; i++) {
        var oLi = document.createElement("li");
        var data = aData[i];

        // 第一种方法:拼接字符串
        //   <div class="pro_img">
    //   <img src="img/2.jpg" title="" style="" width="150" height="150" />
    //   </div>
    //   <h3 id="h3" class="pro_name">
    //     <a rel="nofollow" href="#"> Redmi AirDots真无线蓝牙耳机 </a>
    //   </h3>
    //   <p class="pro_price">99.9元</p>
    //   <p class="pro_rank">9.7万人好评</p>
    //   <div class="add_btn">加入购物车</div>
        oLi.innerHTML += '<div class="pro_img"><img src=" ' + data["imgUrl"] + ' "    width="150" height="150"></div> ';
        oLi.innerHTML += '<h3 id="h3" class="pro_name"><a rel="nofollow" href="#">' + data["proName"] + '</a></h3>';
        oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
        oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '人已购买</p>';
        oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
        oUl.appendChild(oLi);
//  遍历完成
    }

    var aBtn = getClass(oBox, "add_btn");//获取box下的所有添加购物车按钮

    console.log(aBtn);
    var number = 0;//初始化商品数量
    for (var i = 0; i < aBtn.length; i++) {
        number++;
        aBtn[i].index = i;
        aBtn[i].onclick = function() {

            console.log(oCar);
            var oDiv = document.createElement("div");
            var data = aData[this.index];
            // <div class = "row hid">
                // <div class="check left"><i onclick="checkAll()">√</i></div>
                // <div class="img left">全选</div>
                // <div class="name left">商品名称</div>
                // <div class="price left">单价</div>
                // <div class="number left">数量</div>
                // <div class="subtotal left">小计</div>
                // <div class="ctrl left">操作</div>
                // <a rel="nofollow" href="javascript:;">×</a>
            // </div>

            oDiv.className = "row hid";
            oDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >√</i></div>';
            oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" width="80" height="80"></div>';
            oDiv.innerHTML += '<div class="name left"><span>' + data["proName"] + '</span></div>';
            oDiv.innerHTML += '<div class="price left"><span>' + data["proPrice"] + '元</span></div>';
            oDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
            oDiv.innerHTML += '<div class="subtotal left"><span>' + data["proPrice"] + '元</span></div>'
            oDiv.innerHTML += '<div class="ctrl left"><a rel="nofollow" href="javascript:;">×</a></div>';
            oCar.appendChild(oDiv);
            var flag = true;
            var check = oDiv.firstChild.getElementsByTagName("i")[0];
            check.onclick = function() {
                // console.log(check.className);

                // 外面的打钩框框是个类样式,如果有就移除,如果没有就添加
                if (check.className == "i_check i_acity") {
                    check.classList.remove("i_acity");

                } else {
                    check.classList.add("i_acity");
                }
                getAmount();
                
            }

            // 删除按钮有一个hover特效
            var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
            delBtn.onclick = function() {
                var result = confirm("确定删除吗?");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    console.log("number = " + number);
                    getAmount();
                    
                }
            }

            // count_d, c_num, count-d   减号, 数量, 加号
            var i_btn = document.getElementsByClassName("count_i");
            for (var k = 0; k < i_btn.length; k++) {
                i_btn[k].onclick = function() {
                    bt = this;
                    
                    //获取小计节点subtotal
                    at = this.parentElement.parentElement.nextElementSibling;
                    //获取单价节点 price
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //获取数量值c_num
                    node = bt.parentNode.childNodes[1];
                    console.log(node);
                    num = node.innerText;
                    num = parseInt(num);
                    num++;
                    node.innerText = num;
                    //获取单价
                    price = pt.innerText;
                    console.log(typeof(price));
                      // 这个时候是string
                    price = price.substring(0, price.length - 1);
                    console.log(typeof(price));
                    // 这个时候是string
                    //计算小计值,字符串乘以数字,转型为数字
                    at.innerText = price * num + "元";
                    console.log(typeof(at.innerText));         // String
             
                    //计算总计值
                    getAmount();
                    
                }
            }
            //获取所有的数量减号按钮
            var d_btn = document.getElementsByClassName("count_d");
            for (k = 0; k < i_btn.length; k++) {
                d_btn[k].onclick = function() {
                    bt = this;
                    //获取小计节点
                    at = this.parentElement.parentElement.nextElementSibling;
                    //获取单价节点
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //获取c_num节点
                    node = bt.parentNode.childNodes[1];
                    num = node.innerText;
                    num = parseInt(num);
                    if (num > 1) {
                        num--;
                    }
                    // 这里的num就是单品数量,这里的price就是subtotal
                    node.innerText = num;
                    //获取单价
                    price = pt.innerText;
                    price = price.substring(0, price.length - 1);
                    //计算小计值		
                    at.innerText = price * num + "元";
                    //计算总计值
                    getAmount();
                    
                }
            }

            delBtn.onclick = function() {
                var result = confirm("确定删除吗?");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    getAmount();
                    
                }
            }

        }  //onClick函数末尾
    }
    console.log(aBtn);
}

//获得oBox标签下的所有tagName 种类的标签, 比如 button,比如a 
function getClass(oBox, tagname) {
    var aTag = oBox.getElementsByTagName("*");
    var aBox = [];
    // 对所有tag遍历
    for (var i = 0; i < aTag.length; i++) {
        if (aTag[i].className == tagname) {
            aBox.push(aTag[i]);
        }
    }
    return aBox;
}


var index = false;
function checkAll() {
    var choose = document.getElementById("car").getElementsByTagName("i");
    // 获得伪check框的数量,大于1就能全选
    // console.log(choose);
    if (choose.length > 1) {
        for (i = 1; i < choose.length; i++) {
            if (!index) {
                choose[0].classList.add("i_acity2")
                choose[i].classList.add("i_acity");
            } else {
                choose[i].classList.remove("i_acity");
                choose[0].classList.remove("i_acity2")
            }
        }
        index = !index;
    }
    getAmount();
    
}



//进行单件商品小计,每次点击之后会刷新



// tio-do:重复校验,  总价计算
function getAmount() {
    // console.log(ys);
    // 获得所有选中的,然后遍历累计
    ns = document.getElementsByClassName("i_acity");
    console.log(ns);
    sum = 0;
    //选中框
    document.getElementById("price_num").innerText = sum;
    for (y = 0; y < ns.length; y++) {
        //小计
        amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
        num = parseInt(amount_info.innerText);
        sum += num;
        
        document.getElementById("price_num").innerText = sum;
    
    }
    
}


