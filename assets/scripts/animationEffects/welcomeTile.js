//constant



//global variables
var appointments = [[]];
var interval=10000;
var check=false;

//function to reset check variable
function resetVariables(){
	check=false;	
}
function time(){
	var curDate=new Date();
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
	
//ajax function to pull CSV
var acquireCSV = function(){
	$.ajax({
    	type: "GET",
        url: "assets/scripts/animationEffects/welcomeSchedule.csv",
        async: false,
    	success: function (csvd) {
        appointments = $.csv.toArrays(csvd);
		processData(appointments);
    },
    dataType: "text",
    complete: function () {
      
    }
	

	});
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


//function to pull the data from the CSV and breaking the lines apart and then display the proper message
function processData(allText) {
	//looping through the lines of the CSV file
	for(var i = 0; i < allText.length; i++) {
    	var cube = allText[i];
    	for(var j = 0; j < allText.length; j++) {
			//pulling apart the lines of the CSV file	
			var line=allText[j] + " ";
			var splitArray=line.split(",");
			var aptMonth=splitArray[0];
			var aptDay=splitArray[1];
			var aptYear=splitArray[2];
			var aptHour=splitArray[3];
			var aptMin=splitArray[4];
			var am_pm=splitArray[5];
			var aptFirstName=splitArray[6];
			var aptLastName=splitArray[7];
			//calling function to check appoointment times
			check=checkTime(aptMonth, aptDay, aptYear, aptHour, aptMin, am_pm);
			//getting current time
			var curTime=time();
			//what to do if someone has an appointment in the time window
			if(check==true){
				$('#aptMarquee').text(curTime+" Welcome, " + aptFirstName + " " + aptLastName);
				break;
			}
			//default mesasge if no one has an appointment
			else{
			$('#aptMarquee').text(curTime+" Welcome, to South Hills!");
			}	
		}
	}
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
				 acquireCSV();
				 //reseting the check variable
				 resetVariables();
	
                },interval);
                //1000 = 1sec 10000 = 10sec 60000= 1min 600000 = 10min
            }
    }
    welcomeRotator.init();
    });
 