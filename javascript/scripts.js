//Opacity Nav Bar
function CheckScroll(){
	var y = $('.main-header').height(); 

	if($(window).scrollTop() > y){
		$('.main-header').addClass("notattop");
	}else{
		$('.main-header').removeClass("notattop");
	}
}

//Smooth scrolling
$(document).ready(function(){
	//Link click event.
	$("a").on('click', function(e){
		if(this.hash != ""){
			e.preventDefault();

			var hash = this.hash;
			//animate the scroll
			$('html, body').animate({
				//scrolls to location but keeps space for nav bar too!
				scrollTop: $(hash).offset().top - $('.main-header').height()
			}, 1000);
		}
	});

	$(window).scroll(function() {
    	CheckScroll();
	});
});