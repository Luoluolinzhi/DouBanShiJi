$(function(){
    //数量的增减
	$(".jian").click(function(){
        var num = parseInt($(".num").text());
        if(num == 1){
          return false;
        }else {
           	$(".num").text(num-1)
        }
      })
    $(".jia").click(function(){
    	var num = parseInt($(".num").text());
    	$(".num").text(num+1)
  	})
    // 点击立即购买
    $(".buyit").click(function(){
    	$(".product-list").show();
    	$(".ceng").show();
    	$("body").addClass("over");
    })
    //关闭立即购买
    $(".p-close p").click(function(){
    	$(".product-list").hide();
    	$(".ceng").hide();
    	$("body").removeClass("over")
    })
    //假数据渲染
    var res ={
        "error_no":0,
        "msg":"",
        "data":{
            "info":{
                "id":"1",
                "title":"豆瓣收藏夹",
                "price":"9900",
                "desc":"万千票据一本搞定，珍藏你的回忆",
                "image":"https://img3.doubanio.com/view/dianpu_page_widget/raw/public/e020e63fbde3646.jpg"
            }
        }
    }
    //从localStorage里获得对应商品的id
    var id_no = localStorage.getItem("id")
    $.ajax({
    	url: 'http://dbshop.com/index.php/Api/goods/info',
    	type: 'get',
    	dataType: 'json',
    	data:{
    		id : id_no
    	},
    	success: function(res){
    		if (res.error_no ==0) {
                //详情页图片
    			var imageList = "";
                var g = res.data.info;
    			imageList += "<img src='"+g.image+"'>";
    			$(".topImage").html(imageList);
                //点击"立即购买"对应的商品信息
                var goodsInfo = "";
                goodsInfo += "<div class='p-list clearfix'><img src='"+g.image+"'><div class='p-intrp'><div class='p-intrp-a'>"+g.title+"</div><div class='p-intrp-b'>￥"+g.price/100+"</div><div class='p-intrp-c'>满 ￥88 包邮 </div><div class='p-intrp-d'>已选 “森林绿” </div></div></div><div class='p-choice'><p>款式:</p><div>森林绿</div></div></div>";
                $(".goodsInfo").append(goodsInfo);
    		}else{
    			alert(res.msg)
    		}
    	},
    	error: function(){
    		// alert("网络错误!")
            //详情页图片
            var imageList = "";
            var g = res.data.info;
            imageList += "<img src='"+g.image+"'>";
            $(".topImage").html(imageList);
            //点击"立即购买"对应的商品信息
            var goodsInfo = "";
            goodsInfo += "<div class='p-list clearfix'><img src='"+g.image+"'><div class='p-intrp'><div class='p-intrp-a'>"+g.title+"</div><div class='p-intrp-b'>￥"+g.price/100+"</div><div class='p-intrp-c'>满 ￥88 包邮 </div><div class='p-intrp-d'>已选 “森林绿” </div></div></div><div class='p-choice'><p>款式:</p><div>森林绿</div></div></div>";
            $(".goodsInfo").append(goodsInfo);
    	}
    })
     //详情弹出层
    //点击立即购买
    $(".p-buy-a").click(function(){
        location.href = "./ordertmp.html"
    })
    //点击加入购物车
    $(".p-buy-b").click(function(){
        
    })
})