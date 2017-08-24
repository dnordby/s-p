function exportCollection() {
	require('swiper');

	function slidesPerView() {
		var windowWidth = $(window).width();
		if (windowWidth > 1199) {
			return 5
		} else if (windowWidth <= 1199 && windowWidth > 991) {
			return 5
		} else if (windowWidth <= 991 && windowWidth > 767) {
			return 5
		} else {
			return 1
		}
	}

	var slidesPerView = slidesPerView();

	console.log($(window).width());

	var heroSlider = new Swiper('.swiper-container',{
    keyboardControl: true,
    loop: true,
    speed: 300,
    updateOnImagesReady: true,
    slidesPerView: slidesPerView,
    spaceBetween: 24
  });
}

module.exports = exportCollection();
