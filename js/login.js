$(function () {
	//密码可见or不可见
	$(".a").click(function(){
		$(".pas").attr("type","text");
		$(".a").hide()
		$(".b").show()
	})
	$(".b").click(function(){
		$(".pas").attr("type","password");
		$(".b").hide()
		$(".a").show()
	})
	//登录
	$(".next").click(function(){
		localStorage.setItem("name",$(".name").val());
		localStorage.setItem("password",$(".pas").val());
		var passwordInfo = localStorage.getItem("password");
		var name = localStorage.getItem("name");
		$.ajax({
			url: 'http://dbshop.com/index.php/Api/user/dologin',
			type: 'post',
			dataType: 'json',
			data: {
				password: passwordInfo,
				phone: name,
			},
			success: function(res){
				if (res.error_no == 0) {
					//跳转到index界面
					location.href="./index.html"
				}else{
					alert(res.msg)
				}
			},
			error: function(){
				alert("网络错误!")
			}
		})
	})
})