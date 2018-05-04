(function(){
  'use strict';
  
  $(document).ready(function(){

  	let form = $('.bootstrap-form');

  	// On form submit take action, like an AJAX call
    $(form).submit(function(e){
    	e.preventDefault();

    });

    // Reset form and remove validation messages
    $(':reset').click(function(){
    	$(':input').removeClass('is-valid is-invalid');
    });

    // On every :input focusout validate if empty
    $(':input').focusout(function(){

		let fieldValue = $(this).val();

		(fieldValue) ? $(this).addClass('is-valid') : $(this).addClass('is-invalid');

	});

	// On every :input focusin remove existing validation messages if any
    $(':input').focusin(function(){

    	$(this).removeClass('is-valid is-invalid');

	});

  });

})();
