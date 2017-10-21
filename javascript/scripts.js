function CheckScroll(){
	var y = $('.main-header').height() * 2; 

	if($(window).scrollTop() > y){
		$('.main-header').addClass("notattop");
	}else{
		$('.main-header').removeClass("notattop");
	}
}

$(window).scroll(function() {
    CheckScroll();
});