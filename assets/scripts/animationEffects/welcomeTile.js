//constant



//global
var count=0;
var appointments = [[]];
var lasttime= 0;
var splitArray=[];
var line;
var aptMonth;
var aptDay;
var aptYear;
var aptHour;
var aptMin;
var am_pm;
var aptFirstName;
var aptLastName;
var currentDate;
var currentYear;
var currentMonth;
var currentDay;
var currentHour;
var currentMinute;
var lowerHour;
var lowerMinute;
var upperHour;
var upperMinute;
var loweram_pm;
var upperam_pm;
var ampm;
var scheduledDate;
var scheduledTime;
var welcomeTimeLoop;
var welcomeRotator;
var interval=10000;
var check=true;


var test;

function resetVariables(){
check=true;	
}
	
//ajax function 
var acquireCSV = function(){
	
    $.ajax({
        type: "GET",
        url: "assets/scripts/animationEffects/welcomeSchedule.csv",
       async: false,
    	success: function (csvd) {
        data = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
        appointments=data;
		processData(appointments);
    }
	

});
}
function checkTime(chkMonth, chkDay, chkYear,chkHour, chkMin, chkampm){
	//getting the current time
	 currentDate = new Date();
	 currentYear = currentDate.getFullYear();
	 currentMonth = currentDate.getMonth()+1;
	 currentDay = currentDate.getDate();
     currentHour = currentDate.getHours();
     currentMinute = currentDate.getMinutes();
   
	 var timeCheck = true;
	
	 
	 
	 
      //checking in 20min window for times ending in 50-59
	if (currentMinute >= 50)
    {
      lowerHour = currentHour;
      upperHour = currentHour + 1;
      upperMinute = ((currentMinute+10)%60);
      lowerMinute = (currentMinute-10);
     }
    //check in 20min window for times ending in 0-10
     else if (currentMinute <= 9)
     {
     lowerHour = currentHour - 1;
     upperHour = currentHour;
      lowerMinute = Math.abs(currentMinute-60);
      upperMinute = currentMinute+10;
	}
     else
     {
    lowerHour = currentHour;
    upperHour = currentHour;
    lowerMinute = currentMinute-10;
    upperMinute = currentMinute+10;
	 }
	// alert();
	// alert(upperMinute);
	 
	 
	
      if (currentDay == chkDay && currentMonth == chkMonth && currentYear == chkYear)
      {
		  
      if (chkHour >= lowerHour && chkHour <= upperHour)
      {
		 
       if (chkMin > lowerMinute && chkMin < upperMinute)
       {
		
      	
		timeCheck=false;
		
		
		
		
        }
		
		
                               
        }
		
		}

		
	return timeCheck;
	
}



function processData(allText) {
	for(var i = 0; i < allText.length; i++) {
    var cube = allText[i];
	
    for(var j = 0; j < allText.length; j++) {
		
		line=allText[j] + " ";
		//alert(line);
		splitArray=line.split(",");
		aptMonth=splitArray[0];
		aptDay=splitArray[1];
		aptYear=splitArray[2];
		aptHour=splitArray[3];
		aptMin=splitArray[4];
		am_pm=splitArray[5];
		aptFirstName=splitArray[6];
		aptLastName=splitArray[7];
		//check = true;
		check=checkTime(aptMonth, aptDay, aptYear, aptHour, aptMin, am_pm);
		
		if(check==false){
			//$('#welcomecontent').fadeOut('slow','swing',function()
                //{	
					$('#aptMarquee').text("Welcome, " + aptFirstName + " " + aptLastName);
					break;
                    
               // });
			
		}
		else{
			//alert("Here");
			$('#aptMarquee').text("Welcome, to South Hills!");
		/*	$('#welcomecontent').fadeOut('slow','swing',function()
                {
					//formatting time
                if (currentMinute < 10) {
                    currentMinute = "0" + currentMinute;
                }
                //am's & pm's
                var loweram_pm = lowerHour < 12 ? "am" : "pm";
                var upperam_pm = upperHour < 12 ? "am" : "pm";
                var ampm = currentHour < 12 ? "am" : "pm";

                //formatting all hours to 12hr time
                upperHour = (upperHour%12);
                upperHour = (upperHour == 0 ? 12 : upperHour);
                lowerHour = (lowerHour%12);
                lowerHour = (lowerHour == 0 ? 12 : lowerHour);
                currentHour = (currentHour%12);
                currentHour = (currentHour == 0 ? 12 : currentHour);
                var scheduledDate = currentYear +"/"+currentMonth+"/"+currentDay;
                var scheduledTime = currentHour +":"+currentMinute+":"+" "+ampm;	
					//$('#welcomecontent').html("Welcome, " + aptFirstName + " " + aptLastName).show();
                    $('#welcomecontent').html("The current time is " + scheduledTime).show();
                });*/
		}
		
		
	}
}
}
		






$(document).ready(function() {
	
//Welcome Screen Tile Time Action



//ajax function to acquire CSV schedule   
  //acquireCSV();
  //alert(data);
   //processData(data);
//end of the ajax call to import times






   welcomeRotator=
    {
        init: function()

        {





        	//setting the interval to check the time
            var welcomeTimeLoop = setInterval(function() {
				 acquireCSV();
				 resetVariables();
				 //resetVariables();
				// timeCheck=true;
				//getting the current time
               /* var currentDate = new Date();
				var currentYear = currentDate.getFullYear();
				var currentMonth = currentDate.getMonth()+1;
				var currentDay = currentDate.getDate();
                var currentHour = currentDate.getHours();
                var currentMinute = currentDate.getMinutes();
                var lowerHour=0;
                var lowerMinute=0;
                var upperHour=0;
                var upperMinute= 0;
				//var currentSeconds = currentDate.getSeconds();

                //checking in 20min window for times ending in 50-59
				if (currentMinute >= 50)
                {
                    lowerHour = currentHour;
                    upperHour = currentHour + 1;
                    upperMinute = ((currentMinute+10)%60);
                    lowerMinute = (currentMinute-10);
                }
                //check in 20min window for times ending in 0-10
                else if (currentMinute <= 9)
                {
                    lowerHour = currentHour - 1;
                    upperHour = currentHour;
                    lowerMinute = Math.abs(currentMinute-60);
                    upperMinute = currentMinute+10;

                }
                else
                {
                    lowerHour = currentHour;
                    upperHour = currentHour;
                    lowerMinute = currentMinute-10;
                    upperMinute = currentMinute+10;
                }
				*/

				/*
				//formatting time
                if (currentMinute < 10) {
                    currentMinute = "0" + currentMinute;
                }
                //am's & pm's
                var loweram_pm = lowerHour < 12 ? "am" : "pm";
                var upperam_pm = upperHour < 12 ? "am" : "pm";
                var ampm = currentHour < 12 ? "am" : "pm";

                //formatting all hours to 12hr time
                upperHour = (upperHour%12);
                upperHour = (upperHour == 0 ? 12 : upperHour);
                lowerHour = (lowerHour%12);
                lowerHour = (lowerHour == 0 ? 12 : lowerHour);
                currentHour = (currentHour%12);
                currentHour = (currentHour == 0 ? 12 : currentHour);
                var scheduledDate = currentYear +"/"+currentMonth+"/"+currentDay;
                var scheduledTime = currentHour +":"+currentMinute+":"+" "+ampm;
				*/
				

                
				//end time formatting
				
             /*   
              for(j=1; j < appointments.length; j++)
               {
                    if (currentDay == aptDay && currentMonth == aptMonth && currentYear == aptYear)
                    {
                        if (aptHour > lowerHour && aptHour < upperHour)
                        {
                            if (aptMin > lowerMinute && aptMin < upperMinute)
                            {
                                firstapptname = aptFirstName;
                                secondapptname = aptLastName;
                            }
                                //display logic goes here
                        }
                    }



               }
                
//
			
				
				
				
	
				
                //animating content
                $('#welcomecontent').fadeOut('slow','swing',function()
                {	
					$('#welcomecontent').html(firstapptname + secondapptname).show();
                    //$('#welcomecontent').html(scheduledTime).show();
                });
				*/

                },interval);
                //1000 = 1sec 10000 = 10sec 60000= 1min 600000 = 10min
            }
    }
    welcomeRotator.init();
    });
 