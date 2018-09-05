
//Check for movile devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
}
else {

//Active cinema mode when the user has scrolled past a certain trigger point

	var isOn = false;

	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = $('#trigger').offset();          

		if(y_scroll_pos > scroll_pos_test.top && isOn==false) {



			$('#video').cinema();

			isOn = true;

		}

		if(y_scroll_pos < scroll_pos_test.top && isOn==true) {
			$('#video').uncinema();
			isOn = false;
		}
	});

}