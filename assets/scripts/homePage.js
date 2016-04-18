//constant
const TESTIMONIALS = [

/*this is the first testimonial*/
'<p>"I saw the curriculum for graphic arts, and I thought, wow, there'+"'"+'s no filler.</p><p class="bluetestimonialtext"> Everything is to the point.</p><p>It'+"'"+'s a lot of hands-on study, very practical."-LUCIANO SORMANI',

/*this is the second testimonial*/
'<br/><p>"I stopped in for an Interview at Continental Real Estate. About 15 minues later, I had <span class="bluetestimonialtext">an internship AND a job</span>."-JODI CROSSON</p>',

/*this is the third testimonial*/
'<p>"I love that I can more <span class="bluetestimonialtext">specifically target</span> what I want to do.</p><p>I think my SouthHills degree can <label class="bluetestimonialtext">open a lot of doors</label> for me." -DANIELLE MEADOWS'

];//This is the closing TESTIMONIALS bracket

//global
var count=1;

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
            $('#testimonials-text').html(TESTIMONIALS[0]);
            //interval between items (in milliseconds)
            var testInterval = 7000;
            //count number of items
            var numTestimonials = TESTIMONIALS.length;
            //set current item
            var testimonialItem = 0;
            
            //loop through the items
            var infiniteTestLoop = setInterval(function(){
                
                
                
                var HTML = TESTIMONIALS[count];
                $('#testimonials-text').fadeOut('slow','swing',function(){
                    $('#testimonials-text').html(HTML);
                    $('#testimonials-text').show();
                    if (++count==numTestimonials)
                        count=0;
                });
                
              
            }, testInterval);
        }
    };
    testimonialRotator.init();
	/*var testimonialRotator=
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
    testimonialRotator.init();*/
	
	
	//main slider
	$('.bxslider').bxSlider({
  		auto: true,
  		autoControls: false
	});
	
	
	
});    



