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
		//调用获取url中参数的方法：
		var args = new Object();
	    args = GetUrlParms();
	    //获取referurl值
	    var referurl = args.referurl;
	    //如果从登录页面直接进入，登录成功后跳转到index.html
	    if(!referurl){
	    	referurl = "./index.html";
	    }
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
					localStorage.setItem("token",res.data.info.token);
					localStorage.setItem("name",res.data.info.name);
					localStorage.setItem("phone",res.data.info.phone);
					alert("登录成功!");
					//回到上一个页面
					location.href=referurl;
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