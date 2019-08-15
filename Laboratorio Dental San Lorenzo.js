$(document).ready(principal);

var contador = 1;

function principal () {
	$('.desplegable').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left:'0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
	
	$('.submenu').click(function(){
		$(this).children('.opciones').slideToggle();
	});
}