$(function(){
	var listdata = {
		result : {
			"status" : true ,
			"data" : {
				"list" : [
					{
						"id" : "1" ,
						"image" : "e020e63fbde3646.jpg",
						"title" : "豆瓣收藏夹" ,
						"introduce" : "万千票据一本搞定，珍藏你的回忆" ,
						"price" : "￥99" ,
						"type" : "热卖" ,
					},
					{
						"id" : "2" ,
						"image" : "1c8bdf9ec12dee4.jpg" ,
						"title" : "豆瓣心茶" ,
						"introduce" : "联手百年茶庄王德传，精心窖制花茶" ,
						"price" : "￥68" ,
						"type" : "热卖" ,
					},
					{
						"id" : "3" ,
						"image" : "cf603f96874d866.jpg" ,
						"title" : "双肩包·「三刻」" ,
						"introduce" : "双肩斜挎瞬间变形，多仓储存容量大" ,
						"price" : "￥499" ,
						"type" : "新品" ,
					},
					{
						"id" : "4" ,
						"image" : "94610e62b8d7936.jpg" ,
						"title" : "精品挂耳咖啡" ,
						"introduce" : "甄选COE获奖精品咖啡，香浓可口" ,
						"price" : "￥56" ,
						"type" : "新品" ,
					},
					{
						"id" : "5" ,
						"image" : "b5dc77cf3bd7a20.jpg" ,
						"title" : "手机壳·电影畅想系列" ,
						"introduce" : "经典电影元素图案，防磨防刮抗摔打" ,
						"price" : "￥48" ,
						"type" : "新品" ,
					},
					{
						"id" : "6" ,
						"image" : "aa69db404b73b99.jpg" ,
						"title" : "布面精装本" ,
						"introduce" : "落笔顺畅不洇墨，在书写中相遇世界" ,
						"price" : "￥48" ,
						"type" : "热卖" ,
					},
					{
						"id" : "7" ,
						"image" : "4d784545429b759.jpg" ,
						"title" : "帆布包·早餐系列" ,
						"introduce" : "简约版型，多层收纳，清爽文艺百搭" ,
						"price" : "￥149" ,
						"type" : "热卖" ,
					},
					{
						"id" : "8" ,
						"image" : "025756b97d6de64.jpg" ,
						"title" : "豆瓣电影日历" ,
						"introduce" : "高分片单，翻页设计，陪你感受时光" ,
						"price" : "￥98" ,
						"type" : "售罄" ,
					}
				
				]
			}
		}
	}
	$.ajax({
		url : "",
		type : "get",
		dataType : "json",
		success : function(res){
			var blogStr = "";
			var t = listdata.result.data.list;
			for(var i=0;i<t.length;i++){
				blogStr += "<div class='new-product-list-a'><div class='new-product-list-a-img'><img src=./image/'"+t[i].image+"'></div><div class='new-product-list-a-content'> <h4>"+t[i].title+"</h4><p>"+t[i].introduce+"</p><strong>"+t[i].price+"</strong><a>"+t[i].type+"</a></div></div>"			
			}
			$(".new-product-list").html(blogStr);
		},
		error : function(res){
			var blogStr = "";
			var t = listdata.result.data.list;
			for(var i=0;i<t.length;i++){
				blogStr += "<div class='new-product-list-a'><div class='new-product-list-a-img'><img src='./image/"+t[i].image+"'></div><div class='new-product-list-a-content'> <h4>"+t[i].title+"</h4><p>"+t[i].introduce+"</p><strong>"+t[i].price+"</strong><a>"+t[i].type+"</a></div></div>"			
			}
			$(".new-product-list").html(blogStr);
		}
	})
	 window.onload = function() {
        var swiper = new Swiper('.swiper-container', {   
            //循环            
            loop:true,
            //滚动速度
            speed:2000,
            //小手形状
            grabCursor : true,
            //自动播放
            autoplay:true,
            //触摸时翻页
            paginationClickable: true,                
            //分页圆点
        	pagination :{
		    	el: '.swiper-pagination',
		    	clickable :true,
		  	}
        })
    }
    //购物说明
    $(".shopinfo").click(function(){
		$(".ceng").show();
		$(".shopInfoAlert").slideDown();
		$("body").addClass("over");
	})
	$(".iKnowm").click(function(){
		$(".shopInfoAlert").slideUp();
		$(".ceng").hide();
		$("body").removeClass("over")
	})
	//商务合作
	 $(".shangwuhezuo").click(function(){
		$(".shangWu").show();
		$(".shangWuAlert").slideDown();
		$("body").addClass("over");
	})
	$(".closeX").click(function(){
		$(".shangWuAlert").slideUp();
		$(".shangWu").hide();
		$("body").removeClass("over");
	})
	// $.ajax({
	// 	url: 'http://dbshop.com/index.php/Api/index/index',
	// 	dataType:'json',
	// 	type:'get',
	// 	success: function(res){
	// 		console.log(res)
	// 	},
	// 	error: function(){
	// 		alert("网络错误")
	// 	}
	// })
});

