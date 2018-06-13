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
			// //勾选
				// $(".checkIconSpan").click(function(){
				// 	// $(this).toggleClass("checkedIcon");
				// 	if($(this).hasClass("checkedIcon")){
				// 		$(this).removeClass("checkedIcon");
				// 		$(".all").removeClass("checkedIcon");
				// 	}else{
				// 		$(this).addClass("checkedIcon");
				// 	}
				// });
				// //全选
				// $(".all").click(function(){
				// 	// $(this).toggleClass("checkedIcon");
				// 	// $(".checkIcon").toggleClass("checkedIcon");if($(this).hasClass("checkedIcon")){
				// 	if($(this).hasClass("checkedIcon")){
				// 		$(this).removeClass("checkedIcon");
				// 		$(".checkIconSpan").removeClass("checkedIcon");
				// 		$(".all").removeClass("checkedIcon");
				// 	}else{
				// 		$(this).addClass("checkedIcon");
				// 		$(".checkIconSpan").addClass("checkedIcon");
				// 		$(".all").addClass("checkedIcon");
				// 	}
			// });
			//勾选单个商品
				var goodsNum = 0;
				var allPrice = 0;
				$(".checkIconSpan").click(function(){
					if(!$(this).hasClass("checkedIcon")){
						$(this).addClass("checkedIcon");
						if(goodsNum >= res.data.cart.length){
							goodsNum = res.data.cart.length;
						}else{
							goodsNum = goodsNum + 1;
						}
						if(goodsNum == res.data.cart.length){
							$(".all").addClass("checkedIcon");
						}else{
							$(".all").removeClass("checkedIcon");
						}
						$(".moneyCount p").text("结算");
						$(".moneyCount").css({'background-color':'#f05f50'});
						var onePrice = Number($(this).siblings(".goodsInfo").children(".numChange").siblings(".num").text());
						var oneNum = Number($(this).siblings(".goodsInfo").children(".del").siblings("span").text());
						console.log(oneNum)
						console.log(oneNum)
						allPrice = allPrice + oneNum * onePrice;
						$(".allPrice").text("￥"+allPrice+".00");
					}else{
						$(this).removeClass("checkedIcon");
						if(goodsNum<0){
							goodsNum = 0;
						}else{
							goodsNum = goodsNum - 1;
						}
						$(".all").removeClass("checkedIcon");
					}
				});
				//全选
				$(".all").click(function(){
					if($(".moneyCount p").text()=="请选择"){
						$(".all").addClass("checkedIcon");
						$(".checkIconSpan").addClass("checkedIcon");
						$(".allTap").text("取消");
						$(".moneyCount p").text("结算");
						$(".moneyCount").css({'background-color':'#f05f50'});
						//结算全部金额
						for(var i = 0; i <res.data.cart.length; i++){
							allPrice += g[i].goods_num*(g[i].goods_price/100);
						}
						$(".allPrice").text("￥"+allPrice+".00");
						goodsNum = res.data.cart.length;
					}else{
						$(".all").removeClass("checkedIcon");
						$(".checkIconSpan").removeClass("checkedIcon");
						$(".allTap").text("全选");
						$(".moneyCount p").text("请选择");
						$(".moneyCount").css({'background-color':'#9a9a9a'});
						$(".allPrice").text("￥0.00");
						goodsNum = 0;
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
			// //勾选
			// $(".checkIconSpan").click(function(){
			// 	// $(this).toggleClass("checkedIcon");
			// 	if($(this).hasClass("checkedIcon")){
			// 		$(this).removeClass("checkedIcon");
			// 		$(".all").removeClass("checkedIcon");
			// 	}else{
			// 		$(this).addClass("checkedIcon");
			// 	}
			// });
			// //全选
			// $(".all").click(function(){
			// 	// $(this).toggleClass("checkedIcon");
			// 	// $(".checkIcon").toggleClass("checkedIcon");if($(this).hasClass("checkedIcon")){
			// 	if($(this).hasClass("checkedIcon")){
			// 		$(this).removeClass("checkedIcon");
			// 		$(".checkIconSpan").removeClass("checkedIcon");
			// 		$(".all").removeClass("checkedIcon");
			// 	}else{
			// 		$(this).addClass("checkedIcon");
			// 		$(".checkIconSpan").addClass("checkedIcon");
			// 		$(".all").addClass("checkedIcon");
			// 	}
			// });
		}
	})
	
})
