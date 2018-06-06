$(function(){
	$(".a").click(function(){
		$(".passHide").hide();
		$(".passSee").show()
	})
	$(".b").click(function(){
		$(".passHide").show();
		$(".passSee").hide()
	})
	function seeBlur(){
		$(".passHide").val($(".passSee").val());
	}
	function passBlur(){
		$(".passSee").val($(".passHide").val());
	}
})