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
                goodsInfo += "<div class='p-list clearfix'><img src='"+g.image+"'><div class='p-intrp'><div class='p-intrp-a'>"+g.title+"</div><div class='p-intrp-b'>￥"+g.price/100+"</div><div class='p-intrp-c'>满 ￥88 包邮 </div><div class='p-intrp-d'>已选 “森林绿” </div></div></div><div class='p-choice'><p>款式:</p><div>森林绿</div></div><div class='p-num'><p>数量:</p><div class='p-jiajian clearfix'><div class='jian'>-</div><div class='num'>1</div><div class='jia'>+</div></div></div>";
                $(".list").append(goodsInfo);
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
            goodsInfo += "<div class='p-list clearfix'><img src='"+g.image+"'><div class='p-intrp'><div class='p-intrp-a'>"+g.title+"</div><div class='p-intrp-b'>￥"+g.price/100+"</div><div class='p-intrp-c'>满 ￥88 包邮 </div><div class='p-intrp-d'>已选 “森林绿” </div></div></div><div class='p-choice'><p>款式:</p><div>森林绿</div></div><div class='p-num'><p>数量:</p><div class='p-jiajian clearfix'><div class='jian'>-</div><div class='num'>1</div><div class='jia'>+</div></div></div>";
            $(".list").append(goodsInfo);
    	}
    })
})