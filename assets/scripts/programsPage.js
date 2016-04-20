$(document).ready(function(){
	//hiding content except for overview
	$('.trContent').hide();
	$('#overview').show();
	
	//getting the header that was clicked on
	$('.trHeader').click(function(){
		//getting the id of the header
		header=$(this).attr('id');
		//looping through each header to slide up the ones that were not clicked on
		$('.trHeader').each(function(){
			if($(this).attr('id') !== header){
				$(this).next('.trContent').slideUp('slow');
			}
		});
		//sliding downt the content of the header that was clicked on
		$(this).next('.trContent').slideToggle('slow');
	});
});