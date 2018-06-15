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
    };
    //从localStorage里获得对应商品的id
    // var id_no = localStorage.getItem("id")
    //将主页传过来的id取出来，调详情页接口时传给后端
    // var id_no = location.href.split("=")[1]; //以"="分割成数组，去第二个([1])
    var args = new Object();
    //调用获取url中参数的方法：
    args = GetUrlParms();
    //从url获取参数id
    var id_no = args.id;
    //从localStorage里取出用户id
    var userId = localStorage.getItem("token");
    $.ajax({
    	url: 'http://dbshop.com/index.php/Api/goods/info',
    	type: 'get',
    	dataType: 'json',
    	data:{
    		id : id_no,
            token: userId,
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
                //如果登录，购物车显示总数
                if(userId){
                    $.ajax({
                        url: 'http://dbshop.com/index.php/Api/index/index', 
                        dataType:'json',
                        type:'post',
                        data: {
                            token: userId,
                        },
                        success: function(res){
                            if (res.error_no == 0) {
                                var num = res.data.cart_num;
                                $(".numAll").append(num);
                            }else{
                                alert(res.msg);
                            }
                        },
                        error: function(){
                            alert("网络错误!");
                        }
                    });
                }else{
                    $(".numAll").html("");
                }
    		}else{
    			alert(res.msg);
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
    });
    //点击加入购物车
    $(".p-buy-b").click(function(){
        //从localStorage里取出用户id
        var userId = localStorage.getItem("token");
        //判断用户id存不存在，即用户是否登录
        if(!userId){
            var currentUrl = "./detail.html?id="+id_no;
            //encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
            currentUrl = encodeURIComponent(currentUrl);
            //如果未登录，跳转到登录界面
            location.href="./login.html?referurl="+currentUrl;
        }else{
            //如果登录，则将商品加入到购物车
            //获得商品数量
            var goodsNum = parseInt($(".num").text());            
            $.ajax({
                url: 'http://dbshop.com/index.php/Api/cart/addcart',
                type: 'post',
                dataType: 'json',
                data: {
                    goods_id: id_no,
                    goods_num: goodsNum,
                    token:userId,
                },
                success: function(res){
                    if(res.error_no == 0){
                        alert("成功加入到购物车！");
                    }else{
                        alert(res.msg);
                    }
                },
                error:function(){
                    alert("网络错误!");
                }
            });
            $.ajax({
                url: 'http://dbshop.com/index.php/Api/index/index', 
                dataType:'json',
                type:'post',
                data: {
                    token: userId,
                },
                success: function(res){
                    if (res.error_no == 0) {
                        var num = res.data.cart_num;
                        $(".numAll").html(num);
                    }else{
                        alert(res.msg);
                    }
                },
                error: function(){
                    alert("网络错误!");
                }
            });
                
        }
    });
    //点击立即购买
    $(".p-buy-a").click(function(){
        //从localStorage里取出用户id
        var userId = localStorage.getItem("token");
        //判断用户id存不存在，即用户是否登录
        if(!userId){
            //如果未登录，跳转到登录界面
            location.href="./login.html";
        }else{//如果登录，则跳转到确认订单页面
            // var goodsNum = parseInt($(".num").text()); 
            // $.ajax({
            //     url: 'http://dbshop.com/index.php/Api/order/ordertmp',
            //     type: 'post',
            //     dataType: 'json',
            //     data: {
            //         // token: userId;
            //         goods_id: id_no,
            //         count: goodsNum,
            //     },
            //     success: function(res){
            //         if(res.error_no == 0){
            //             location.href = "./ordertmp.html";
            //         }else{
            //             alert(res.msg);
            //         }
            //     },
            //     error: function(){
            //         alert("网络错误!");
            //     }
            // });
        }
    });
})
//javascript获取url中参数的方法：
function GetUrlParms()    
{
    var args=new Object();   
    var query=location.search.substring(1);//获取查询串   
    var pairs=query.split("&");//在逗号处断开   
    for(var   i=0;i<pairs.length;i++)   
    {   
        var pos=pairs[i].indexOf('=');//查找name=value   
        if(pos==-1)   continue;//如果没有找到就跳过   
        var argname=pairs[i].substring(0,pos);//提取name   
        var value=pairs[i].substring(pos+1);//提取value   
        args[argname]=unescape(value);//存为属性   
    }
    return args;
}