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
}

module.exports = exportProduct();