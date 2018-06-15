$(function(){
	// var oidNo = localStorage.getItem("oid");
	// $.ajax({
	// 	url: 'http://dbshop.com/index.php/Api/order/confirm',
	// 	type: 'get',
	// 	dataType: 'json',
	// 	data:{
	// 		oid: oidNo,
	// 	},
	// 	success:function(res){
	// 		if(res.error_no == 0){
	// 			var a = res.data.goods_lists;
	// 			var goodsStr = "";
	// 			for(var i = 0; i < a.length; i ++){
	// 				goodsStr += "<div class='goosInfo'><div class='tit'>"+a[i].title+"</div><div class='info'><img src='"+a[i].image+"'><div class='infoList'><h6>"+a[i].desc+"</h6><p>森林绿</p><span>数量："+a[i].num+"</span><strong>￥"+a[i].price+"</strong></div></div></div>";
	// 			}
	// 			$(".goosAll").html(goodsStr);
	// 		}else{
	// 			alert(res.msg);
	// 		}
	// 	},
	// 	error: function(){
	// 		alert("网络错误!");
	// 	}
	// });
	//新建地址
	$('.address').click(function(){
		location.href = "./addAddress.html"
	});
})