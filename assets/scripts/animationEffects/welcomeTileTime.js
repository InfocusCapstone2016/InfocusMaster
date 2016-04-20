$(document).ready(function() {
	
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
});