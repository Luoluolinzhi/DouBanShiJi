$(function(){
	var res = {
	    "error_no": 0,
	    "message": "success",
	    "data": {
	    	"cart" : [
	    		{
	    			"id" :1,
	    			"goods_id" : 1,
	    			"goods_name" : "豆瓣新茶",
	    			"goods_num" : 1,
	    			"image" : "./image/p2022708.jpg",
	    			"goods_price" : "6800",
	    		},
	    		{
	    			"id" :2,
	    			"goods_id" : 1,
	    			"goods_name" : "豆瓣新茶",
	    			"goods_num" : 1,
	    			"image" : "./image/p2022708.jpg",
	    			"goods_price" : "6800",
	    		}
	    	]
	    }
	}
	//从localStorage里取出用户id
    var userId = localStorage.getItem("token");
	$.ajax({
		url: "http://dbshop.com/index.php/Api/cart/cartlist",
		type: "post",
		dataType: "json",
		data: {
			token: userId,
		},
		success: function(res){
			if (res.error_no == 0) {
				var goodsStr = "";
				var g = res.data.cart;
				for(var i=0; i<g.length; i++){
					goodsStr += "<div class='goodsList' data-id='"+g[i].id+"'><span class='checkIcon checkIconSpan'></span><div class='goodsInfo clearfix'><img src='"+g[i].image+"'><div class='info'><h6>"+g[i].goods_name+"</h6><p>玫瑰乌龙+玫瑰红茶</p><div class='numChange'><span class='numJian'>-</span><span class='num'>"+g[i].goods_num+"</span><span class='numJia'>+</span></div></div><div class='del'><h6 class='deleteGoods'>删除</h6><span>￥"+g[i].goods_price/100+".00</span></div></div></div>";
				}
				$(".goodsLists").html(goodsStr);
				//数量的增减
			 	$(".numJian").click(function(){
			        var num = parseInt($(this).next(".num").text());
			        var idNo = $(this).closest(".goodsList").data("id");
			        if(num == 1){
			          return false;
			        }else {
			           	$(this).next(".num").text(num-1);
			           	$.ajax({
			           		url:'http://dbshop.com/index.php/Api/cart/edit',
			           		type: 'post',
			           		dataType: 'json',
			           		data: {
			           			id: idNo,
			           			is_add: 2,
			           		},
			           		success: function(res){
			           			if(res.error_no == 0){
			           			}else{
			           				alert(res.msg);
			           			}
			           		},
			           		error: function(){
			           			alert("网络错误!");
			           		}
			           	})
			        }
			    });
			    $(".numJia").click(function(){
			    	var num = parseInt($(this).prev(".num").text());
			    	var idNo = $(this).closest(".goodsList").data("id");
			    	$(this).prev(".num").text(num+1);
			    	$.ajax({
		           		url:'http://dbshop.com/index.php/Api/cart/edit',
		           		type: 'post',
		           		dataType: 'json',
		           		data: {
		           			id: idNo,
		           			is_add: 1,
		           		},
		           		success: function(res){
		           			if(res.error_no == 0){
		           			}else{
		           				alert(res.msg);
		           			}
		           		},
		           		error: function(){
		           			alert("网络错误!");
		           		}
		           	})
			  	});
				//勾选
				$(".checkIconSpan").click(function(){
					// $(this).toggleClass("checkedIcon");
					if($(this).hasClass("checkedIcon")){
						$(this).removeClass("checkedIcon");
						$(".all").removeClass("checkedIcon");
					}else{
						$(this).addClass("checkedIcon");
					}
				});
				//全选
				$(".all").click(function(){
					// $(this).toggleClass("checkedIcon");
					// $(".checkIcon").toggleClass("checkedIcon");if($(this).hasClass("checkedIcon")){
					if($(this).hasClass("checkedIcon")){
						$(this).removeClass("checkedIcon");
						$(".checkIconSpan").removeClass("checkedIcon");
						$(".all").removeClass("checkedIcon");
					}else{
						$(this).addClass("checkedIcon");
						$(".checkIconSpan").addClass("checkedIcon");
						$(".all").addClass("checkedIcon");
					}
				});
				//删除
				$(".deleteGoods").click(function(){
					var idNo = $(this).closest(".goodsList").data("id");
					$.ajax({
						url: 'http://dbshop.com/index.php/Api/cart/del',
						type: 'post',
						dataType: 'json',
						data: {
							id: idNo,
						},
						success: function(res){
							if (res.error_no == 0) {
								alert("删除成功!");
								$.ajax({
									url: "http://dbshop.com/index.php/Api/cart/cartlist",
									type: "post",
									dataType: "json",
									data: {
										token: userId,
									},
									success: function(res){
										if (res.error_no == 0) {
											var goodsStr = "";
											var g = res.data.cart;
											for(var i=0; i<g.length; i++){
												goodsStr += "<div class='goodsList' data-id='"+g[i].id+"'><span class='checkIcon checkIconSpan'></span><div class='goodsInfo clearfix'><img src='"+g[i].image+"'><div class='info'><h6>"+g[i].goods_name+"</h6><p>玫瑰乌龙+玫瑰红茶</p><div class='numChange'><span class='numJian'>-</span><span class='num'>"+g[i].goods_num+"</span><span class='numJia'>+</span></div></div><div class='del'><h6 class='deleteGoods'>删除</h6><span>￥"+g[i].goods_price/100+".00</span></div></div></div>";
											}
											$(".goodsLists").html(goodsStr);
										}else{
											alert(res.msg);
										}
									},
									error: function(){
										alert("网络错误!");
									}
								})
							}else{
								alert(res.msg);
							}
						},
						error:function(){
							alert("网络错误！");
						}
					})
				});
			}else{
				alert(res.msg);
			}
		},
		error: function(){
			// alert("网络错误!");
			var goodsStr = "";
			var g = res.data.cart;
			for(var i=0; i<g.length; i++){
				goodsStr += "<div class='goodsList' data-id='"+g[i].id+"'><span class='checkIcon checkIconSpan'></span><div class='goodsInfo clearfix'><img src='"+g[i].image+"'><div class='info'><h6>"+g[i].goods_name+"</h6><p>玫瑰乌龙+玫瑰红茶</p><div class='numChange'><span class='numJian'>-</span><span class='num'>"+g[i].goods_num+"</span><span class='numJia'>+</span></div></div><div class='del'><h6 class='deleteGoods'>删除</h6><span>￥"+g[i].goods_price/100+".00</span></div></div></div>";
			}
			$(".goodsLists").html(goodsStr);
			//数量的增减
		 	$(".numJian").click(function(){
		        var num = parseInt($(this).next(".num").text());
		        var idNo = $(this).closest(".goodsList").data("id");
		        if(num == 1){
		          return false;
		        }else {
		           	$(this).next(".num").text(num-1);
		        }
		    });
		    $(".numJia").click(function(){
		    	var num = parseInt($(this).prev(".num").text());
		    	var idNo = $(this).closest(".goodsList").data("id");
		    	$(this).prev(".num").text(num+1);
		  	});
			//勾选
			$(".checkIconSpan").click(function(){
				// $(this).toggleClass("checkedIcon");
				if($(this).hasClass("checkedIcon")){
					$(this).removeClass("checkedIcon");
					$(".all").removeClass("checkedIcon");
				}else{
					$(this).addClass("checkedIcon");
				}
			});
			//全选
			$(".all").click(function(){
				// $(this).toggleClass("checkedIcon");
				// $(".checkIcon").toggleClass("checkedIcon");if($(this).hasClass("checkedIcon")){
				if($(this).hasClass("checkedIcon")){
					$(this).removeClass("checkedIcon");
					$(".checkIconSpan").removeClass("checkedIcon");
					$(".all").removeClass("checkedIcon");
				}else{
					$(this).addClass("checkedIcon");
					$(".checkIconSpan").addClass("checkedIcon");
					$(".all").addClass("checkedIcon");
				}
			});
		}
	})
	
})
