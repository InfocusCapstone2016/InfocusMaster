///global variables
var state;
$(document).ready(function(){
	slidingContent();
	$('.blueButton').click(function(){
		sessionStorage.openDiv=$(this).closest('div.trContent').attr('id');

	});
	
});