//constant
const TESTIMONIALS = [

/*this is the first testimonial*/
'<p>"I saw the curriculum for graphic arts, and I thought, wow, there'+"'"+'s no filler.</p><p class="bluetestimonialtext"> Everything is to the point.</p><p>It'+"'"+'s a lot of hands-on study, very practical."-LUCIANO SORMANI',

/*this is the second testimonial*/
'<br/><p>"I stopped in for an Interview at Continental Real Estate. About 15 minues later, I had <span class="bluetestimonialtext">an internship AND a job</span>."<br />-JODI CROSSON</p>',

/*this is the third testimonial*/
'<p>"I love that I can more <span class="bluetestimonialtext">specifically target</span> what I want to do.</p><p>I think my SouthHills degree can <label class="bluetestimonialtext">open a lot of doors</label> for me." -DANIELLE MEADOWS'

];//This is the closing TESTIMONIALS bracket

//global
var count=1;

$(document).ready(function() {
	//Programs Tile Rotator
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
				$('.program-rotate').eq(currentItem).effect( "fade", "slow" );
                if(currentItem == numberOfItems-1){		 
                    currentItem = 0;
					$('.program-rotate').eq(currentItem).effect("fade", "slow");
                }else{
						currentItem++;
						$('.program-rotate').eq(currentItem).effect("fade", "slow");
				}
            }, itemInterval);
        }
    };
    ProgramRotator.init();
	


    //Testimonial Tile Rotator
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
	
    //Welcome Tile Code
    var welcomeRotator=
    {
        init: function()
        {
            var welcomeTimeLoop = setInterval(function(){
                var currentDate = new Date();
                var currentHour = currentDate.getHours();
                var currentMinute = currentDate.getMinutes();
                if (currentMinute < 10) {
                    currentMinute = "0" + currentMinute;
                }
                var currentSeconds = currentDate.getSeconds();
                var ampm = currentHour < 12 ? "am" : "pm";
                currentHour = (currentHour%12);
                currentHour = (currentHour == 0 ? 12 : currentHour);
                var scheduledTime = currentHour +":"+currentMinute+":"+currentSeconds+" "+ampm;
                
                $('#welcomecontent').fadeOut('slow','swing',function()
                {
                    $('#welcomecontent').html(scheduledTime).show();
                });

                },10000)
            }
    }
    welcomeRotator.init();

	//Comminity Tile Rotator
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
            //loop through the items
            var infiniteCommLoop = setInterval(function(){
                $('.community-rotate').eq(commItem).hide( "slide", "slow" );
                if(commItem == commItemLength-1){
                    commItem = 0;
                    $('.community-rotate').eq(commItem).show("slide", "slow");
                }else{
                   commItem++;
                    $('.community-rotate').eq(commItem).show("slide", "slow");
                }
              
            }, commInterval);
        }
    };
    communityRotator.init();




	
	//Main Slider Code
	var slider=$('.bxslider').bxSlider({
  		auto: true,
  		autoControls: false
	});
	
	//Starting the auto on clicks and swipe
	$('.bx-prev').click(function(){
		slider.startAuto();
	
	});
	$('.bx-next').click(function(){
		slider.startAuto();
	
	});
	
	$('#rotator').on("swipe",function(){
  	slider.startAuto();
	});
	
	
	});

	
	 



