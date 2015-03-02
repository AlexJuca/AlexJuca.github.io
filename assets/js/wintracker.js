/***
Date: 4/11/2014
Author: Alexandre Antonio Juca 

*/

$(document).ready(function(){
	
	$(window).scroll(function(event){
		var yPos = window.scrollY; // The current Y Position in window
		//alert(yPos);
		if (yPos > 830 & yPos < 1200)
		{
			
			animateElements();
			$('.menu-holder > ul > li').css('background','#FFF');


		}
		if (yPos > 1700 & yPos < 2400)
		{
			
			$('.menu-holder > ul > li').css('background','#F17C72');

		}

		if (yPos > 2400 & yPos < 3130)
		{
			
			$('.menu-holder > ul > li').css('background','#4E4C4C');

		}
		if (yPos > 3130 & yPos < 3800)
		{
			
			animateSocialIcons();
			$('.menu-holder > ul > li').css('background','#FFF');

		}
		

		
	});

	function animateSocialIcons()
	{
		$('.opacSocial').css('transition','opacity 0.1s ease-in').css('opacity','1');
		$('#github').addClass('animated fadeInUp');
		$('#twitter').addClass('animated fadeInLeftBig');
		$('#facebook').addClass('animated fadeInRightBig');
	
	}

	function animateElements()
	{
		$('.opac').css('transition','opacity 0.1s ease-in').css('opacity','1');
  		$('#web-design').addClass('animated lightSpeedIn');
		$('#ux-design').addClass('animated bounceIn');
		$('#web-dev').addClass('animated bounceInLeft');
		$('#desktop-dev').addClass('animated bounceInRight');
		$('#android-dev').addClass('animated bounceInDown');
		$('#git').addClass('animated fadeIn');

	}
});
