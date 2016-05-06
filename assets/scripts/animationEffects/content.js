///global variables
var state;
$(document).ready(function(){
	slidingContent();
	$('.saveDiv').click(function(){
		sessionStorage.openDiv=$(this).closest('div.trContent').attr('id');
	});
	
});