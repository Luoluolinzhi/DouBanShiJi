$(function(){
// var listdata = {
	// 	result : {
	// 		"status" : true ,
	// 		"data" : {
	// 			"list" : [
	// 				{
	// 					"id" : "1" ,
	// 					"image" : "e020e63fbde3646.jpg",
	// 					"title" : "豆瓣收藏夹" ,
	// 					"introduce" : "万千票据一本搞定，珍藏你的回忆" ,
	// 					"price" : "￥99" ,
	// 					"type" : "热卖" ,
	// 				},
	// 				{
	// 					"id" : "2" ,
	// 					"image" : "1c8bdf9ec12dee4.jpg" ,
	// 					"title" : "豆瓣心茶" ,
	// 					"introduce" : "联手百年茶庄王德传，精心窖制花茶" ,
	// 					"price" : "￥68" ,
	// 					"type" : "热卖" ,
	// 				},
	// 				{
	// 					"id" : "3" ,
	// 					"image" : "cf603f96874d866.jpg" ,
	// 					"title" : "双肩包·「三刻」" ,
	// 					"introduce" : "双肩斜挎瞬间变形，多仓储存容量大" ,
	// 					"price" : "￥499" ,
	// 					"type" : "新品" ,
	// 				},
	// 				{
	// 					"id" : "4" ,
	// 					"image" : "94610e62b8d7936.jpg" ,
	// 					"title" : "精品挂耳咖啡" ,
	// 					"introduce" : "甄选COE获奖精品咖啡，香浓可口" ,
	// 					"price" : "￥56" ,
	// 					"type" : "新品" ,
	// 				},
	// 				{
	// 					"id" : "5" ,
	// 					"image" : "b5dc77cf3bd7a20.jpg" ,
	// 					"title" : "手机壳·电影畅想系列" ,
	// 					"introduce" : "经典电影元素图案，防磨防刮抗摔打" ,
	// 					"price" : "￥48" ,
	// 					"type" : "新品" ,
	// 				},
	// 				{
	// 					"id" : "6" ,
	// 					"image" : "aa69db404b73b99.jpg" ,
	// 					"title" : "布面精装本" ,
	// 					"introduce" : "落笔顺畅不洇墨，在书写中相遇世界" ,
	// 					"price" : "￥48" ,
	// 					"type" : "热卖" ,
	// 				},
	// 				{
	// 					"id" : "7" ,
	// 					"image" : "4d784545429b759.jpg" ,
	// 					"title" : "帆布包·早餐系列" ,
	// 					"introduce" : "简约版型，多层收纳，清爽文艺百搭" ,
	// 					"price" : "￥149" ,
	// 					"type" : "热卖" ,
	// 				},
	// 				{
	// 					"id" : "8" ,
	// 					"image" : "025756b97d6de64.jpg" ,
	// 					"title" : "豆瓣电影日历" ,
	// 					"introduce" : "高分片单，翻页设计，陪你感受时光" ,
	// 					"price" : "￥98" ,
	// 					"type" : "售罄" ,
	// 				}
				
	// 			]
	// 		}
	// 	}
// }
// $.ajax({
	// 	url : "",
	// 	type : "get",
	// 	dataType : "json",
	// 	success : function(res){
			
	// 	},
	// 	error : function(res){
	// 		var blogStr = "";
	// 		var t = listdata.result.data.list;
	// 		for(var i=0;i<t.length;i++){
	// 			blogStr += "<div class='new-product-list-a'><div class='new-product-list-a-img'><img src='./image/"+t[i].image+"'></div><div class='new-product-list-a-content'> <h4>"+t[i].title+"</h4><p>"+t[i].introduce+"</p><strong>"+t[i].price+"</strong><a>"+t[i].type+"</a></div></div>"			
	// 		}
	// 		$(".new-product-list").html(blogStr);
	// 	}
// })
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
	});


	var res = {
	    "error_no":0,
	    "msg":"",
	    "data":{
	        "goods":[
	            {
	                "id":"1",
	                "goods_name":"豆瓣收藏夹",
	                "goods_info":"万千票据一本搞定，珍藏你的回忆",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/e020e63fbde3646.jpg",
	                "tag_id":"热卖",
	                "createtime":"2018-06-05 15:37:35",
	                "updatetime":"2018-06-05 15:37:35",
	                "status":"1",
	                "price":"9900"
	            },
	            {
	                "id":"2",
	                "goods_name":"豆瓣心茶",
	                "goods_info":"联手百年茶庄王德传，精心窖制花茶",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/1c8bdf9ec12dee4.jpg",
	                "tag_id":"热卖",
	                "createtime":"2018-06-05 15:37:39",
	                "updatetime":"2018-06-05 15:37:39",
	                "status":"1",
	                "price":"6800"
	            },
	            {
	                "id":"3",
	                "goods_name":"双肩包·「三刻」",
	                "goods_info":"双肩斜挎瞬间变形，多仓储存容量大",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/cf603f96874d866.jpg",
	                "tag_id":"新品",
	                "createtime":"2018-06-05 15:37:45",
	                "updatetime":"2018-06-05 15:37:45",
	                "status":"1",
	                "price":"49900"
	            },
	            {
	                "id":"4",
	                "goods_name":"精品挂耳咖啡",
	                "goods_info":"甄选COE获奖精品咖啡，香浓可口",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/94610e62b8d7936.jpg",
	                "tag_id":"新品",
	                "createtime":"2018-06-05 15:37:50",
	                "updatetime":"2018-06-05 15:37:50",
	                "status":"1",
	                "price":"5600"
	            },
	            {
	                "id":"5",
	                "goods_name":"手机壳·电影畅想系列",
	                "goods_info":"经典电影元素图案，防磨防刮抗摔打",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/b5dc77cf3bd7a20.jpg",
	                "tag_id":"新品",
	                "createtime":"2018-06-05 15:37:55",
	                "updatetime":"2018-06-05 15:37:55",
	                "status":"1",
	                "price":"4800"
	            },
	            {
	                "id":"6",
	                "goods_name":"布面精装本",
	                "goods_info":"落笔顺畅不洇墨，在书写中相遇世界",
	                "image":"https://img1.doubanio.com/view/dianpu_page_widget/raw/public/aa69db404b73b99.jpg",
	                "tag_id":"热卖",
	                "createtime":"2018-06-05 15:38:03",
	                "updatetime":"2018-06-05 15:38:03",
	                "status":"1",
	                "price":"4800"
	            },
	            {
	                "id":"7",
	                "goods_name":"帆布包·早餐系列",
	                "goods_info":"简约版型，多层收纳，清爽文艺百搭",
	                "image":"https://img1.doubanio.com/view/dianpu_page_widget/raw/public/4d784545429b759.jpg",
	                "tag_id":"热卖",
	                "createtime":"2018-06-05 15:38:10",
	                "updatetime":"2018-06-05 15:38:10",
	                "status":"1",
	                "price":"14900"
	            },
	            {
	                "id":"8",
	                "goods_name":"豆瓣电影日历",
	                "goods_info":"高分片单，翻页设计，陪你感受时光",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/025756b97d6de64.jpg",
	                "tag_id":"售罄",
	                "createtime":"2018-06-05 15:38:17",
	                "updatetime":"2018-06-05 15:38:17",
	                "status":"1",
	                "price":"9800"
	            }
	        ],
	        "banner":[
	            {
	                "id":"1",
	                "title":"123",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/e020e63fbde3646.jpg",
	                "url":"2",
	                "createtime":"2018-06-05 15:35:58",
	                "updatetime":"2018-06-05 15:35:58",
	                "status":"1"
	            },
	            {
	                "id":"2",
	                "title":"456",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/1c8bdf9ec12dee4.jpg",
	                "url":"3",
	                "createtime":"2018-06-05 15:36:18",
	                "updatetime":"2018-06-05 15:36:18",
	                "status":"1"
	            },
	            {
	                "id":"3",
	                "title":"789",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/cf603f96874d866.jpg",
	                "url":"4",
	                "createtime":"2018-06-05 15:36:28",
	                "updatetime":"2018-06-05 15:36:28",
	                "status":"1"
	            },
	            {
	                "id":"4",
	                "title":"好看",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/94610e62b8d7936.jpg",
	                "url":"www.baidu.com",
	                "createtime":"2018-06-05 15:36:36",
	                "updatetime":"2018-06-05 15:36:36",
	                "status":"1"
	            },
	            {
	                "id":"5",
	                "title":"好玩222",
	                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/b5dc77cf3bd7a20.jpg",
	                "url":"http://www.sina.com",
	                "createtime":"2018-06-05 15:37:25",
	                "updatetime":"2018-06-05 15:37:25",
	                "status":"1"
	            },
	            {
	                "id":"6",
	                "title":"xixi",
	                "image":"/Public/Home/images/16.jpg",
	                "url":"5",
	                "createtime":"2018-06-05 15:19:10",
	                "updatetime":"2018-06-05 15:19:10",
	                "status":"1"
	            }
	        ]
	    }
	}
	$.ajax({
		url: 'http://dbshop.com/index.php/Api/index/index',
		dataType:'json',
		type:'get',
		success: function(res){
			if(error_no == 0){
				var t = res.data.goods;
				var goodsLists = "";
				for(var i=0; i<t.length; i++){
					goodsLists += "<div class='new-product-list-a'><div class='new-product-list-a-img'><img src='"+t[i].image+"'></div><div class='new-product-list-a-content'><h4>"+t[i].goods_name+"</h4><p>"+t[i].goods_info+"</p><strong>"+t[i].price+"</strong><a>"+t[i].tag_id+"</a></div></div>";
				}
				$(".new-product-list").html(goodsLists);
			}else{
				alert(msg);
			}
		},
		error: function(res){
			alert("网络错误!");
		}
	})
});
