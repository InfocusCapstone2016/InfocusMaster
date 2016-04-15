$(document).ready(function() {
	//testing links
	var programsArea=document.getElementById('programs');
	$(programsArea).click(function(){
		window.location="programs/index.html";
	});
	
	//programs slider
	(function(){
        var imgLen = document.getElementById('programs');
        var images = imgLen.getElementsByTagName('img');
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
})();

});    

