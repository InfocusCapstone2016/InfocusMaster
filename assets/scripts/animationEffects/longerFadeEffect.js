$(document).ready(function() {
	//Longer Fade Animation Effect
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
    longerFadeEffect.init();
});