$(document).ready(function()
{
	$(window).scroll(function(event){

		var yPos = window.scrollY; 
		if(yPos > 400)
		{
			$('#nav-profile').css('opacity','1').css('transition','all 0.3s ease-in-out');
		}
		
		if(yPos < 400)
		{
			$('#nav-profile').css('opacity','0').css('transition','all 0.3s ease-in-out');
		}

	});
});