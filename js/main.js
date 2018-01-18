// delay code from executing until page has loaded
$(function() {
	// show nav when burger is clicked
	$('i').on('click' , function(event) {
	// slide the nav in .main-header	
	$('.main-header nav').slideToggle()
	})

// 
// When the window is resized
$(window).on('resize', function() {
	var win = $(this);
	// if the width is less than or equal to 768px show nav
	if(win.width() >= 768) {
		$('.main-header nav').show();
	}
	// if the window is greater than 768px then hide nav
	if(win.width() < 768) {
		$('.main-header nav').hide();
	}
	// body...
});

	//event.preventDefault();


});
