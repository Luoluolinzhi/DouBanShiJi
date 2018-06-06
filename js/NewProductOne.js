$(function(){
	// 点击立即购买
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

    $(".buyit").click(function(){
    	$(".product-list").show();
    	$(".ceng").show();
    	$("body").addClass("over");
    })
    $(".p-close p").click(function(){
    	$(".product-list").hide();
    	$(".ceng").hide();
    	$("body").removeClass("over")
    })
    //详情页图片
    $.ajax({
    	url: 'http://dbshop.com/index.php/Api/goods/info',
    	type: 'get',
    	dataType: 'json',
    	data:{
    		id : 1
    	},
    	success: function(res){
    		if (res.error_no ==0) {
    			var imageList = "";
    			imageList += "<img src='"+res.data.info.image+"'>";
    			$(".topImage").html(imageList)
    		}else{
    			alert(res.msg)
    		}
    	},
    	error: function(){
    		alert("网络错误!")
    	}
    })
})