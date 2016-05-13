
//4 Second Fade Effect
   var FadeEffect =
    {
        init: function()
        {
            //interval between items (in milliseconds)
            var itemInterval = 4000;
            //count number of items
            var numberOfItems = $('.fade-effect').length;
            //set current item
            var currentItem = 0;
            //loop through the items and animate each one
            var infiniteLoop = setInterval(function(){
				$('.fade-effect').eq(currentItem).hide( "puff");
                if(currentItem == numberOfItems-1){		 
                    currentItem = 0;
					$('.fade-effect').eq(currentItem).show("puff");
                }else{
						currentItem++;
						$('.fade-effect').eq(currentItem).show("puff");
				}
            }, itemInterval);
        }
    };
    
 //Longer 5 Second Fade Animation Effect
    var longerFadeEffect=
    {
    init: function()
        {
            //interval between items (in milliseconds)
            var commInterval = 5000;
            //count number of items
            var commItemLength = $('.long-fade').length;
            //set current item
            var commItem = 0;
            //loop through the items and animate each one
            var infiniteCommLoop = setInterval(function(){
                $('.long-fade').eq(commItem).hide( "fade", "slow" );
                if(commItem == commItemLength-1){
                    commItem = 0;
                    $('.long-fade').eq(commItem).show("fade", "slow");
                }else{
                   commItem++;
                    $('.long-fade').eq(commItem).show("fade", "slow");
                }
              
            }, commInterval);
        }
    };

    //function for sliding page content
    var slidingContent=function (){
    //hiding content except for overview
	if(sessionStorage.openDiv!=null){
		$('.trContent').hide();
    	$("#"+sessionStorage.openDiv).show();
	}
	else{
    	$('.trContent').hide();
    	$('#overview').show();
	}
	
	//global variables to check for open divs
	var openCheck=0;
	var tabCount=0;
    //getting the header that was clicked on
    $('.trHeader').click(function(){
		openCheck=0;
		tabCount=0;
        //getting the id of the header
        var header=$(this).attr('id');
		//getting the iframe that needs to be loaded
		var clickFrame=$(this).next('div.trContent').children('iframe').attr('id');
		//creating the page name that needs to be loaded
		var srcName=clickFrame+'.html';
		//changing the source to the correct page for the iframe
		var frame='#'+clickFrame;
		$(frame).attr('src', srcName);
		if(clickFrame !== 'iOverview'){
			$('#iOverview').attr('src', '');
		}
		
        //looping through each header to slide up the ones that were not clicked on
        $('.trHeader').each(function(){
            if($(this).attr('id') !== header){
                $(this).next('.trContent').slideUp('slow');	
            }
			
			
        });
		
        //sliding down the content and checking to make sure all the tabs are not closed and opening the overview section if they are
		
        	$(this).next('.trContent').slideToggle('slow', function(){
				$('.trHeader').each(function(){	
					tabCount++;
					if($(this).next('.trContent').is(':hidden')){	
						openCheck++;					
					}
				});
				if(openCheck===tabCount){
					$('#overview').slideToggle('slow');
					$('#iOverview').attr('src', 'iOverview.html');
				}	
			});
				
		
    });
	
		
    
}


