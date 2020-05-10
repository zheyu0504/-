$(document).ready(function(){
	$(window).on('scroll',function(){
		if($(window).scrollTop()){
			$('nav').addClass('mini');
		}
		else
		{
			$('nav').removeClass('mini');
		}
	});	  
});
		