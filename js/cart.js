$(function(){
	var res = {
	    "error_no": 0,
	    "message": "success",
	    "data": {
	    	"carts" : [
	    		{
	    			"id" :1,
	    			"goods_id" : 1,
	    			"goods_title" : "豆瓣新茶",
	    			"goods_num" : 1,
	    			"goods_image" : "p2022708.jpg",
	    			"goods_price" : "￥68.00",
	    		},
	    		{
	    			"id" :2,
	    			"goods_id" : 1,
	    			"goods_title" : "豆瓣新茶",
	    			"goods_num" : 1,
	    			"goods_image" : "p2022708.jpg",
	    			"goods_price" : "￥68.00",
	    		}
	    	]
	    }
	}
	$.ajax({
		url: "http://dbshop.com/index.php/Api/cart/cartlist",
		type: "post",
		dataType: "json",
		data: {
			goods_id: 1,
			goods_num: 1,
		},
		success: function(res){
			if (res.error_no == 0) {
				var goodsStr = "";
				var g = res.data.carts;
				for(var i=0; i<g.length; i++){
					goodsStr += "<div class='goodsList'><span class='checkIcon'></span><div class='goodsInfo clearfix'><img src='./image/"+g[i].goods_image+"'><div class='info'><h6>"+g[i].goods_title+"</h6><p>玫瑰乌龙+玫瑰红茶</p><div class='numChange'><span class='numJian'>-</span><span class='num'>1</span><span class='numJia'>+</span></div></div><div class='del'><h6>删除</h6><span>"+g[i].goods_price+"</span></div></div></div>"
				}
				$(".goodsLists").html(goodsStr);
			}else if(res.error_no==2){
				alert("未登录！");
				// location.href = "./login.html"
			}else{
				alert(res.msg)
			}
		},
		error: function(){
			// alert("网络错误!");
			var goodsStr = "";
			var g = res.data.carts;
			for(var i=0; i<g.length; i++){
				goodsStr += "<div class='goodsList'><span class='checkIcon'></span><div class='goodsInfo clearfix'><img src='./image/"+g[i].goods_image+"'><div class='info'><h6>"+g[i].goods_title+"</h6><p>玫瑰乌龙+玫瑰红茶</p><div class='numChange'><span class='numJian'>-</span><span class='num'>1</span><span class='numJia'>+</span></div></div><div class='del'><h6>删除</h6><span>"+g[i].goods_price+"</span></div></div></div>"
			}
			$(".goodsLists").html(goodsStr);
		}
	})
	//勾选
	$(".checkIcon").click(function(){
		$(this).toggleClass("checkedIcon");
	})
	//全选
	$(".all").click(function(){
		$(this).toggleClass("checkedIcon");
		$(".checkIcon").toggleClass("checkedIcon");
	})
	//数量的增减
 	$(".numJian").click(function(){
        var num = parseInt($(this).next(".num").text())
        if(num == 1){
          return false;
        }else {
           	$(this).next(".num").text(num-1)
        }
    })
    $(".numJia").click(function(){
    	var num = parseInt($(this).prev(".num").text())
    	$(this).prev(".num").text(num+1)
  	})
})
