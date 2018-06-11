$(function(){
	//从localStorage里取出用户id
    var userId = localStorage.getItem("token");
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
})