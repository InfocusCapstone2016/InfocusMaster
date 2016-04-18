$(document).ready(function() {
	//testing links
	
	
	
});

$(window).load(function() { //start after HTML, images have loaded
    var ProgramRotator =
    {
        init: function()
        {
            //interval between items (in milliseconds)
            var itemInterval = 4000;
            //count number of items
            var numberOfItems = $('.program-rotate').length;
            //set current item
            var currentItem = 0;
         	
            //loop through the items
            var infiniteLoop = setInterval(function(){
				$('.program-rotate').eq(currentItem).hide( "fade", "slow" );
                if(currentItem == numberOfItems-1){		 
                    currentItem = 0;
					$('.program-rotate').eq(currentItem).show("fade", "slow");
                }else{
						currentItem++;
						$('.program-rotate').eq(currentItem).show("fade", "slow");
				}
            }, itemInterval);
        }
    };
    ProgramRotator.init();
	
	var testimonialRotator=
	{
	init: function()
        {
            //interval between items (in milliseconds)
            var testInterval = 5000;
            //count number of items
            var testItemLength = $('.testimonial-rotate').length;
            //set current item
            var testimonialItem = 0;
            //loop through the items
            var infiniteTestLoop = setInterval(function(){
                if(testimonialItem == testItemLength-1){
					 $('.testimonial-rotate').eq(testimonialItem).hide();
                    testimonialItem = 0;
					$('.testimonial-rotate').eq(testimonialItem).effect("slide", "slow");
                }else{
					 $('.testimonial-rotate').eq(testimonialItem).hide();
                    testimonialItem++;
					$('.testimonial-rotate').eq(testimonialItem).effect("slide", "slow");
                }
              
            }, testInterval);
        }
    };
    testimonialRotator.init();
	
	
	//main slider
	$('.bxslider').bxSlider({
  		auto: true,
  		autoControls: false
	});

});    



