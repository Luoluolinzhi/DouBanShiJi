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
		//获得用户输入的用户账号、密码
		var name = $(".name").val();
		var passwordInfo = $(".pas").val();
		$.ajax({
			url: 'http://dbshop.com/index.php/Api/user/dologin',
			type: 'post',
			dataType: 'json',
			data: {
				password: passwordInfo,
				phone: name, 
			},
			success: function(res){
				console.log(res);
				if (res.error_no == 0) {
					//用户登录成功后，将用户id、用户昵称、用户账号存入localStorage
					localStorage.setItem("token",res.data.info.id);
					localStorage.setItem("name",res.data.info.name);
					localStorage.setItem("phone",res.data.info.phone);
					alert("登录成功!");
					//跳转到index界面
					location.href="./index.html";
				}else{
					alert(res.msg);
				}
			},
			error: function(){
				alert("网络错误!");
			}
		})
	})
})