function exportProduct() {
	function dateString() {
		var month = ''
		var day = ''
		var year = ''
		if ( $('.js-age-month').val() ) {
			month = $('.js-age-month').val().toString();
		}
		if ( $('.js-age-day').val() ) {
			day = $('.js-age-day').val().toString();
		}
		if ( $('.js-age-year').val() ) {
			year = $('.js-age-year').val().toString();
		}
		var final_string = month + ' ' + day + ', ' + year;
		return final_string
	}

	function updateDate() {
		$('.js-age-month').change(function(){
			var new_string = dateString();
			$('.js-date-value').val(new_string);
		});
		$('.js-age-day').change(function(){
			var new_string = dateString();
			$('.js-date-value').val(new_string);
		});
		$('.js-age-year').change(function(){
			var new_string = dateString();
			$('.js-date-value').val(new_string);
		});
	}

	function updateRange() {
		$('.js-range-selector').change(function(){
			var new_string = $(this).val();
			$('.js-date-value').val(new_string);
		});
	}

	updateDate();
	updateRange();

	$('.child-gender .input-wrapper img').click(function(){
		$(this).closest('.input-wrapper').find('input').trigger('click');
	});

	$('.js-date-select').click(function(){
		// RESET ALL VALUES
		$('.js-date-value').prop('value','').val('');
		$('.js-birthday-wrapper .input-wrapper select').each(function(){
			$(this).val($(this).find('option:first')).val();
		});
		$('.js-range-wrapper .input-wrapper select').each(function(){
			$(this).val($(this).find('option:first')).val();
		});

		// CONDITIONALLY HIDE/SHOW AND EXECUTE UPDATES
		if ( $(this).hasClass('js-birthday') ) {
			$('.js-birthday-wrapper').removeClass('visually-hidden');
			$('.js-range-wrapper').addClass('visually-hidden');
			
		} else if ( $(this).hasClass('js-range') ) {
			$('.js-range-wrapper').removeClass('visually-hidden');
			$('.js-birthday-wrapper').addClass('visually-hidden');
		}
	});

	$('#AddToCart').click(function(e){
		e.preventDefault();
		$('.js-toggle-age-options .js-error').text('').addClass('visually-hidden');
		if ($('.js-date-value').val() == '') {
			var error = "Please include a birthday or age range so we can create the perfect Skip and Play box!"
			var scrollTo = $('.js-toggle-age-options').offset().top - ($(window).height()/2 - 80);
			$('.js-toggle-age-options .js-error').text(error).removeClass('visually-hidden');

			$('body').animate({scrollTop:scrollTo}, 500, 'swing');

			$('.js-birthday-wrapper .input-wrapper select').each(function(){
				$(this).addClass('error-state');
			});
		} else {
			$('#AddToCartForm').submit();
		}
	});
}

module.exports = exportProduct();