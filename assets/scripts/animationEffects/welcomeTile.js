//constant
const APPOINTMENTS = [

4,23,2016,2,15,'am',Hello there Bryan

/*APPOINTMENT 1*/
//Month,Day,Year,Hour,Minute,am/pm,message

];//This is the closing APPOINTMENTS bracket

//global
var count=0;

$(document).ready(function() {
//Welcome Screen Tile Time Action
    var welcomeRotator=
    {
        init: function()
        {	//setting the interval to check the time
            var welcomeTimeLoop = setInterval(function() {
				//getting the current time
                var currentDate = new Date();
				var currentYear = currentDate.getFullYear();
				var currentMonth = currentDate.getMonth()+1;
				var currentDay = currentDate.getDate();
                var currentHour = currentDate.getHours();
                var currentMinute = currentDate.getMinutes();
				//var currentSeconds = currentDate.getSeconds();
				
				
				
				
				//formatting time
                if (currentMinute < 10) {
                    currentMinute = "0" + currentMinute;
                }
                
                var ampm = currentHour < 12 ? "am" : "pm";
                currentHour = (currentHour%12);
                currentHour = (currentHour == 0 ? 12 : currentHour);
				var scheduledDate = currentYear +"/"+currentMonth+"/"+currentDay;
                var scheduledTime = currentHour +":"+currentMinute+":"+" "+ampm;
				//end time formatting
				
				
				
				
				
				
				
				
				
                //animating content
                $('#welcomecontent').fadeOut('slow','swing',function()
                {	//showing the time
					$('#welcomecontent').html(scheduledDate).show();
                  //  $('#welcomecontent').html(scheduledTime).show();
                });

                },1000)
            }
    }
    welcomeRotator.init();
    });
 