$(
  $('.page').mouseenter( function(event){
 		if( !$(event.target).hasClass('displayed') &&
		$(event.currentTarget).prop("tagName") === "DIV"){
 			$('.page').each(function(pg){
 				if ($(this).hasClass('displayed')){
 					$(this).removeClass('displayed')
 				}
 			})
 		  $(event.currentTarget).addClass('displayed');
 		}
 	})
)
