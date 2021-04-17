$(function(){

    $("#category a").mouseover(function(){
        $("#subMenuBG").stop().slideDown(300);
    });

	$("#category a").mouseout(function(){
        $("#subMenuBG").stop().slideUp(300);
    });

	/* 이미지 슬라이드 */
	setInterval(fnSlide, 9000);

	function fnSlide() {
		$("#shuttleFrame").animate({
			"margin-left": "-1160px"
			},
			1000,
			function(){
				$("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
				$("#shuttleFrame").css({"margin-left": "0"});
		});
	}
	/* 이미지 슬라이드 */

});
