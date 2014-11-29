jQuery(function($) {

	$('a[name=login]').click(function(e){
		e.preventDefault();
		$('#mask').fadeIn('fast');
		$('#loginformwrapper').show();
	});
	$('a[name=registration]').click(function(e){
		e.preventDefault();
		$('#mask').fadeIn('fast');
		$('#regformwrapper').show();
	});
	$('.allforms .popup_close').click(function(e){
		e.preventDefault();
		$('#mask, .allforms').hide();
	}); 
	$('#mask').click(function () {
		$(this).hide();
		$('.allforms').hide();
	}); 


		// var id = $(this).attr('href');
		// var maskHeight = $(document).height();
		// var maskWidth = $(window).width();
		// $('#mask').css({'width':maskWidth,'height':maskHeight});
		// $('#mask').fadeIn(800); 
		// $('#mask').fadeTo("slow",0.75);
		// var winH = $(window).height();
		// var winW = $(window).width();
		// $(id).css('top', winH/2-$(id).height()/2);
		// $(id).css('left', winW/2-$(id).width()/2);
		// $(id).fadeIn(2000);

	// $('.window .close').click(function (e) { 
	// e.preventDefault();
	// $('#mask, .window').hide();
	// }); 
	// $('#mask').click(function () {
	// $(this).hide();
	// $('.window').hide();
	// }); 




});

(function($) {
	$(function() {

		$('input, select, text, textarea').styler();

	});
})(jQuery);