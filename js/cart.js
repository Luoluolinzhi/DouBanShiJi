$(function(){
	$(".checkIcon").click(function(){
		$(this).toggleClass("checkedIcon");
	})
	$(".all").click(function(){
		$(this).toggleClass("checkedIcon");
		$(".checkIcon").toggleClass("checkedIcon");
	})
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
		url: "",
		type: "post",
		dataType: "json",
		data: {
			goods_id: 1,
			goods_num: 1,
		},
		success: function(res){
			if (error_no == 0) {

			}else{
				alert(message);
			}
		},
		error: function(){
			var goodsStr = "";
			var g = res.data.carts;
			for(var i=0; i<g.length; i++){
				goodsStr += "<div class='goodsList'><span class='checkIcon'></span><div class='goodsInfo clearfix'><img src='./image/"+g[i].goods_image+"'><div class='info'><h6>"+g[i].goods_title+"</h6><p>玫瑰乌龙+玫瑰红茶</p><div class='numChange'><span class='numJian'>-</span><span class='num'>3</span><span class='numJia'>+</span></div></div><div class='del'><h6>删除</h6><span>"+g[i].goods_price+"</span></div></div></div>"
			}
			$(".goodsLists").html(goodsStr);
		}
	})
})
