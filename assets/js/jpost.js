$(document).ready(function(e)
{
	$('#drop-to-post').addClass('animated zoomInRight');
	$(window).scroll(function(event){
		var yPos = window.scrollY; // The current Y Position in window
		//alert(yPos);
		if (yPos > 0 & yPos < 1800)
		{
			
		
			$('#drop-to-post').css('transition', 'all 0.2s ease-in').css('opacity','0');
			$('#drop-to-post').css('webkit-transition', 'all 0.2s ease-in').css('opacity','0');


		}

		else
		{
			
		
			$('#drop-to-post').css('transition', 'all 0.2s ease-in').css('opacity','1');


		}

	});

});