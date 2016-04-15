$(document).ready(function() {
	//testing links
	var programs = document.getElementById('programs');
	$(programs).click(function(){
		window.location="programs/index.html";
	});
	
	//Natalie Programs Slider 
/*	(function(){
        var imgLength = document.getElementById('programs');
        var images = imgLength.getElementsByTagName('img');
        var counter = 1;

        if(counter <= images.length){
            setInterval(function(){
                images[0].src = images[counter].src;
                console.log(images[counter].src);
                counter++;

                if(counter === images.length){
                    counter = 1;
                }
            },3000);
        }
})();*/
});

$(window).load(function() { //start after HTML, images have loaded
    var ProgramRotator =
    {
        init: function()
        {
            //interval between items (in milliseconds)
            var itemInterval = 5000;
            //cross-fade time (in milliseconds)
            var fadeTime = 2000;
            //count number of items
            var numberOfItems = $('.program-rotate').length;
            //set current item
            var currentItem = 0;
            //show first item
            $('.program-rotate').eq(currentItem)
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.program-rotate').eq(currentItem).fadeOut(fadeTime);
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.program-rotate').eq(currentItem).fadeIn(fadeTime);
            }, itemInterval);
        }
    };
    ProgramRotator.init();
});

