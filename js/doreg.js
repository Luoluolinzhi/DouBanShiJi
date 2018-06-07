$(function(){
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
	//点击"下一步"
	$(".next").click(function(){
		localStorage.setItem("phone",$(".phone").val());
		localStorage.setItem("password",$(".pas").val());
		localStorage.setItem("name",$(".name").val());
		var phoneInfo = localStorage.getItem("phone");
		var passwordInfo = localStorage.getItem("password");
		var nameInfo = localStorage.getItem("name");
		$.ajax({
			url: 'http://dbshop.com/index.php/Api/user/doreg',
			type: 'post',
			dataType: 'json',
			data: {
				phone: phoneInfo,
				password: passwordInfo,
				username: nameInfo,
			},
			success: function(res){
				if(res.error_no == 0){
					//跳转到login界面
					location.href="./login.html"
				}else{
					alert(res.msg)
				}
			},
			error: function(){
				alert("网络错误!");
			}
		})
	})
})