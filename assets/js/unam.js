$(document).ready(function(){
	$('.item, .closeX').click(function(e){
		e.preventDefault();
		$('.lightbox').toggleClass('show');
	});
});