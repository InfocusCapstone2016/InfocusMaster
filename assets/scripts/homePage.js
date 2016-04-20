//constant
const TESTIMONIALS = [

/*Testimonial 1*/
'<p>"I saw the curriculum for graphic arts, and I thought, wow, there'+"'"+'s no filler.<br />'
+'<span class="bluetestimonialtext"> Everything is to the point.</span> It'+"'"+'s a lot of hands-on study, very practical." -LUCIANO SORMANI</p>',

/*Testimonial 2*/
'<p>"I stopped in for an Interview at Continental Real Estate. About 15 minues later, I had <span class="bluetestimonialtext">an internship AND a job</span>."<br />'
+'-JODI CROSSON</p>',

/*Testimonial 3*/
'<p>"I love that I can more <span class="bluetestimonialtext">specifically target</span> what I want to do.<br />'+
'I think my SouthHills degree can <span class="bluetestimonialtext">open a lot of doors</span> for me." -DANIELLE MEADOWS'

];//This is the closing TESTIMONIALS bracket

//global
var count=1;

$(document).ready(function() {
	//Program Fade Tile
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
            //loop through the items and animate each one
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
	


    //Testimonial Tile Switch Text Action
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
            //loop through the items, switch out the text, and animate each one
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
	
    //Welcome Screen Tile Time Action
    var welcomeRotator=
    {
        init: function()
        {	//setting the interval to check the time
            var welcomeTimeLoop = setInterval(function(){
				//getting the current time
                var currentDate = new Date();
                var currentHour = currentDate.getHours();
                var currentMinute = currentDate.getMinutes();
				//formatting time
                if (currentMinute < 10) {
                    currentMinute = "0" + currentMinute;
                }
                var currentSeconds = currentDate.getSeconds();
                var ampm = currentHour < 12 ? "am" : "pm";
                currentHour = (currentHour%12);
                currentHour = (currentHour == 0 ? 12 : currentHour);
                var scheduledTime = currentHour +":"+currentMinute+":"+currentSeconds+" "+ampm;
                //animating content
                $('#welcomecontent').fadeOut('slow','swing',function()
                {	//showing the time
                    $('#welcomecontent').html(scheduledTime).show();
                });

                },10000)
            }
    }
    welcomeRotator.init();

	//Community Rotator Tile Fade Action
    var communityRotator=
    {
    init: function()
        {
            //interval between items (in milliseconds)
            var commInterval = 5000;
            //count number of items
            var commItemLength = $('.community-rotate').length;
            //set current item
            var commItem = 0;
            //loop through the items and animate each one
            var infiniteCommLoop = setInterval(function(){
                $('.community-rotate').eq(commItem).hide( "fade", "slow" );
                if(commItem == commItemLength-1){
                    commItem = 0;
                    $('.community-rotate').eq(commItem).show("fade", "slow");
                }else{
                   commItem++;
                    $('.community-rotate').eq(commItem).show("fade", "slow");
                }
              
            }, commInterval);
        }
    };
    communityRotator.init();

	//Main Slider Actions
	var slider=$('.bxslider').bxSlider({
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
	
