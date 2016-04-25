

$(document).ready(function() {
	
	//Main Slider Actions
	var slider=$('.bxslider').bxSlider({
		speed: 5000,
		//making it auto rotate
  		auto: true,
		//turning off the auto controls
  		autoControls: false,
		//starting auto again after swipe
		onSlideAfter: function() {
        slider.startAuto();
    }
	});
	//starting auto again after next/prev button clicks
	$('.bx-prev').click(function(){
		slider.startAuto();
	
	});
	$('.bx-next').click(function(){
		slider.startAuto();
	
	});
	
});
	
