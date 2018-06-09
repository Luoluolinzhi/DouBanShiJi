$(function(){  
	//banner图片swiper轮播	
    var swiper = new Swiper('.swiper-container', {  
    	observer:true, 
    	observeParents:true,
        //循环            
        loop:true,
        //滚动速度
        speed:1000,
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
	//假数据渲染
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
	                "image":"https://img3.doubanio.com/img/files/file-1527764147-0.jpg",
	                "url":"2",
	                "createtime":"2018-06-05 15:42:36",
	                "updatetime":"2018-06-05 15:42:36",
	                "status":"1"
	            },
	            {
	                "id":"2",
	                "title":"456",
	                "image":"https://img3.doubanio.com/img/files/file-1525686721-1.jpg",
	                "url":"3",
	                "createtime":"2018-06-05 15:42:42",
	                "updatetime":"2018-06-05 15:42:42",
	                "status":"1"
	            },
	            {
	                "id":"3",
	                "title":"789",
	                "image":"https://img3.doubanio.com/img/files/file-1524881486-0.jpg",
	                "url":"4",
	                "createtime":"2018-06-05 15:42:47",
	                "updatetime":"2018-06-05 15:42:47",
	                "status":"1"
	            },
	            {
	                "id":"4",
	                "title":"好看",
	                "image":"https://img3.doubanio.com/img/files/file-1524122635-0.jpg",
	                "url":"www.baidu.com",
	                "createtime":"2018-06-05 15:42:53",
	                "updatetime":"2018-06-05 15:42:53",
	                "status":"1"
	            },
	            {
	                "id":"5",
	                "title":"好玩222",
	                "image":"https://img3.doubanio.com/img/files/file-1524199263-0.jpg",
	                "url":"http://www.sina.com",
	                "createtime":"2018-06-05 15:43:00",
	                "updatetime":"2018-06-05 15:43:00",
	                "status":"1"
	            },
	            {
	                "id":"6",
	                "title":"xixi",
	                "image":"https://img3.doubanio.com/img/files/file-1527764147-0.jpg",
	                "url":"5",
	                "createtime":"2018-06-05 15:43:01",
	                "updatetime":"2018-06-05 15:43:01",
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
			if(res.error_no == 0){
				//头部轮播图
				var g = res.data.banner;
				var imagesLists = "";
				for (var j = 0; j < g.length; j++){
					imagesLists += "<div class='swiper-slide'><img src='"+g[j].image+"'></div>";
				}
				$(".swiper-wrapper").html(imagesLists);
				//商品列表
				var t = res.data.goods;
				var goodsLists = "";
				for(var i = 0; i < t.length; i++){
					goodsLists += "<div class='new-product-list-a' data-id='"+t[i].id+"'><div class='new-product-list-a-img'><img src='"+t[i].image+"'></div><div class='new-product-list-a-content'><h4>"+t[i].goods_name+"</h4><p>"+t[i].goods_info+"</p><strong>￥"+t[i].price/100+"</strong><a>"+t[i].tag_id+"</a></div></div>";
				}
				$(".new-product-list").html(goodsLists);
				//点击商品进入到对应商品详情页
				$(".new-product-list-a").click(function(){
					//商品id存在localStorage
			        // localStorage.setItem("id",$(this).data("id"));
			        //商品id在链接跳转时拼上去
			        location.href = "./detail.html?id="+$(this).data("id");
				})
			}else{
				alert(res.msg);
			}
		},
		error: function(){
			alert("网络错误!");
			//头部轮播图
			var g = res.data.banner;
			var imagesLists = "";
			for (var j = 0; j < g.length; j++){
				imagesLists += "<div class='swiper-slide'><img src='"+g[j].image+"'></div>";
			}
			$(".swiper-wrapper").html(imagesLists);
			//商品列表
			var t = res.data.goods;
			var goodsLists = "";
			for(var i = 0; i < t.length; i++){
				goodsLists += "<div class='new-product-list-a' data-id='"+t[i].id+"'><div class='new-product-list-a-img'><img src='"+t[i].image+"'></div><div class='new-product-list-a-content'><h4>"+t[i].goods_name+"</h4><p>"+t[i].goods_info+"</p><strong>￥"+t[i].price/100+"</strong><a>"+t[i].tag_id+"</a></div></div>";
			}
			$(".new-product-list").html(goodsLists);
			//点击商品进入到对应商品详情页
			$(".new-product-list-a").click(function(){
				//商品id存在localStorage
		        // localStorage.setItem("id",$(this).data("id"));
		        //商品id在链接跳转时拼上去
		        location.href = "./detail.html?id="+$(this).data("id");
			})
		}
	})
       //点击底部"购物说明"
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
	//点击底部"商务合作"
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
    //点击"购物车",如果未登录，则跳转到登录界面，如果已经登录，则跳转到购物车界面
    // $(".cart").click(function(){
    // 	$.ajax({
    // 		url: 'http://dbshop.com/index.php/Api/cart/cartlist',
    // 		type: 'post',
    // 		dataType: 'json',
    // 		success: function(res){
    // 			if (res.error_no == 0) {
    // 				location.href = "./cart.html"
    // 			}else if(res.error_no == 2){
    // 				location.href = "./login.html"
    // 			}else{
    // 				alert(res.msg)
    // 			}
    // 		},
    // 		error: function(){
    // 			alert("网络错误!")
    // 		}
    // 	})
    // })
});

