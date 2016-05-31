var $heroTitle = $('.hero-description h1');
var heroStyledTitle = function() {
	//return $newTitle;
}

$('#more-info-btn').click(function(event){
	event.preventDefault();
	$('.product-info-popup').fadeIn(250);
});

$('.product-info-popup .icon-x').click(function(event){
	event.preventDefault();
	$('.product-info-popup').fadeOut(250);
});

$('.cart').click(function(){
	$('#shopping-cart').addClass('active');
});

$('#shopping-cart .icon-x').click(function(){
	$('#shopping-cart').removeClass('active');
});

$(document).ready(function(){
    $heroTitle.html(function(_, html) {
	   return html.split('Preorder').join("<span>Preorder</span>");
	});
});