// REQUIRE ALL SCSS FROM APP.SCSS
require("!style!css!swiper/dist/css/swiper.min.css");
require("./../scss/app.scss");

// REQUIRE EACH JS MODULE
$(document).ready(function(){
	if ( $('body').hasClass('template-collection') ) {
		require("./collection.js");
	}

	if ( $('body').hasClass('template-product') ) {
		require("./product.js");
	}
});