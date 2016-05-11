//constant



//global variables
var appointments = ["4/30/2016/8/20/pm/Bryan/Butler", "5/5/2016/11/20/am/Natalie/Torretti", "5/6/2016/11/10/am/Natalie/Torretti"];
var interval=10000;
var check=false;

//function to reset check variable
function resetVariables(){
	check=false;	
}

//function to check if device is connected to the internet
function checkConnection() {
	var status = navigator.onLine;
	var check=false;
	if (status) {
		check=true;
	} 
	else {
		check=false;
	}
	return check;
}

function time(){
	//checking the network connection
	var connectCheck=checkConnection();
	var noTime=false;
	
	if(connectCheck==true){
		
	//getting the current time
	 var curDate = new Date();
     var curHour = curDate.getHours();
     var curMinute = curDate.getMinutes();
	 
	//formatting time
      if (curMinute < 10) {
     curMinute = "0" + curMinute;
    }
     //am's & pm's
     var ampm = curHour < 12 ? "am" : "pm";
	 
     //formatting all hours to 12hr time
     curHour = (curHour%12);
     curHour = (curHour == 0 ? 12 : curHour);
     var scheduledTime = curHour +":"+curMinute+ampm;
	 return scheduledTime;
	}
	else{
	return noTime;
		
	}
}

var checkAppointments=function(){
	//creating array variables
	var splitArray=[];
	//looping through the appointments array
	for(var j = 0; j < appointments.length; j++) {
		//breaking the different appointments into variables
		splitArray=appointments[j].split('/');
		var aptMonth=splitArray[0];
		var aptDay=splitArray[1];
		var aptYear=splitArray[2];
		var aptHour=splitArray[3];
		var aptMin=splitArray[4];
		var am_pm=splitArray[5];
		var aptFirstName=splitArray[6];
		var aptLastName=splitArray[7];
		//checking to see if the appointments are in the time window
		check=checkTime(aptMonth, aptDay, aptYear, aptHour, aptMin, am_pm);
		//getting the current time
		var curTime=time();
		if(curTime!=false){
			//display the messages in the welcome tile
			if(check==true){
				$('#aptMarquee').text("WELCOME, " + aptFirstName + " " + aptLastName + " " + curTime);
				break;
			}
			//default mesasge if no one has an appointment
			else{
				$('#aptMarquee').text("WELCOME TO SOUTH HILLS");
			}	
		}
		else{
			$('#aptMarquee').text("WELCOME TO SOUTH HILLS");
		}
	}
}
	


//function to check the time against appointment times
function checkTime(chkMonth, chkDay, chkYear,chkHour, chkMin, chkampm){
	//getting the current time
	 var currentDate = new Date();
	 var currentYear = currentDate.getFullYear();
	 var currentMonth = currentDate.getMonth()+1;
	 var currentDay = currentDate.getDate();
     var currentHour = currentDate.getHours();
     var currentMinute = currentDate.getMinutes();
   	 var lowerHour=0;
	 var upperHour=0;
	 var lowerMinute=0;
	 var lowerMinute=0;
	 var timeCheck = false;
	 
	
	 
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
	 lowerHour = (lowerHour%12);
     lowerHour = (lowerHour == 0 ? 12 : lowerHour);
	 upperHour = (upperHour%12);
     upperHour = (upperHour == 0 ? 12 : upperHour);
	//Checking the appointment times against current times
      if (currentDay == chkDay && currentMonth == chkMonth && currentYear == chkYear)
      {

      		if (chkHour >= lowerHour && chkHour <= upperHour)
      		{   
		 
       			if (chkMin > lowerMinute && chkMin < upperMinute)
       			{
					timeCheck=true;
       			}                      
			}
		}
	return timeCheck;
}

		
$(document).ready(function() {
	
//Welcome tile interval to check for appointments
   var welcomeRotator=
    {
        init: function()

        {
        	//setting the interval to check the time
            var welcomeTimeLoop = setInterval(function() {
				//calling the functions to check for appointments
				 checkAppointments();
				 //reseting the check variable
				 resetVariables();
	
                },interval);
                //1000 = 1sec 10000 = 10sec 60000= 1min 600000 = 10min
            }
    }
    welcomeRotator.init();
    });
 