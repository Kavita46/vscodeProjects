$(function () {


    // 加入购物车按钮 cart 
    $(".cart").click(function () {
        // console.log(this);
        let li = $(this).closest("li");
        let data_img = li.find(".pic").attr("src");
        let data_id = li.attr("data-id");
        let data_price = li.find(".price").html();
        let data_name = li.find(".goodsname").html();

        // console.log(data_img, data_id, data_price, data_name);
        let data_num = 1;
        let data_size = li.find(".size").val();
        let data_color = li.find(".color").val();
        let data_total = data_price * data_num;
        let data_size_color = data_size + " " + data_color;
        let data_size_color_num = data_size_color + " " + data_num;

        // console.log(data_id,data_name,data_price,data_img,data_num,data_size,data_color,data_total,data_size_color,data_size_color_num);
        // 判断是否已经存在购物车

// console.log(data_id)        ;
        const oldItem = $(`.cart-tbody[data-id=${data_id}]`);
        if (oldItem.length == 0) {
            let goodsItem = `   
    <div data-id ="${data_id}"  class="cart-tbody">
                    <div class="cell">
                        <input type="checkbox">
                    </div>
                    <div class="cell">
                        <a href="" class="p-img">
                            <img src="${data_img}" alt="" width="100%">
                        </a>
                        <div class="p-introduce">
                            <a href="" class="introduce-goods">
                                <span>${data_name}</span>
                            </a>
                            <div class="item"></div>
                            <a href="">选服务</a>

                        </div>
                    </div>
                    <div class="cell">
                        <span class="">店长推荐 经典款AR1764</span>
                    </div>
                    <div class="cell">
                        <span class="p-price-cont">${data_price}</span>
                    </div>
                    <div class="cell">
                        <div class="quantity-box">
                            <button>-</button>
                            <input type="text" value="1">
                            <button>+</button>
                        </div>
                        <p>有货</p>
                    </div>
                    <div class="cell">
                        <span>${data_price}</span>
                    </div>
                    <div class="cell">
                        <a href="">删除</a>
                        <a href="">移入关注</a>
                    </div>
                </div> `;

            $(".goods-list").append(goodsItem);
        }
        else {
            // 这个时候存在该条目
            // console.log("已经有商品");
            let num = oldItem.find(".quantity-box input").val();
            num++;
            oldItem.find(".quantity-box input").val(num);
            // console.log(num);
        }


        // 单选框 unbind是什么函数?

        $(".singleton").unbind("click");
    })
});