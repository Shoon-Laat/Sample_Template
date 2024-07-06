
$('.burger-menu,.menu-link-detail').on('click', function () {
	$(this).addClass('change');
	if ($(this).hasClass("change")) {
		$(".menu").toggleClass('active');
		if ($(".menu").hasClass('active')) {
			$(this).addClass('change');
		}
		else {
			$(".burger-menu").removeClass('change');
		}
	} else {
		$(".menu").removeClass('active');
		$(".burger-menu").removeClass('change');
	}
});