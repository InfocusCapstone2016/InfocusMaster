$(document).ready(function() {
	//Fade Effect
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
				$('.fade-effect').eq(currentItem).hide( "fade", "slow" );
                if(currentItem == numberOfItems-1){		 
                    currentItem = 0;
					$('.fade-effect').eq(currentItem).show("fade", "slow");
                }else{
						currentItem++;
						$('.fade-effect').eq(currentItem).show("fade", "slow");
				}
            }, itemInterval);
        }
    };
    FadeEffect.init();
	
});