function NavButtons() {
	const navButton = $('.container header nav ul li'),
		  menuButton = $('.container header nav .menu-button'),
		  nav = $('.container header nav ul');


	menuButton.on('click', function() {
		nav.stop().slideToggle();
	});

	navButton.on('click', function() {
		let buttonData = $(this).attr('data-goto');
		$("html, body").animate({
			scrollTop: $(buttonData).offset().top 
		}, 400);
	});
}

function NavSticky() {
	const nav = $('.container header nav');

	$(window).bind('scroll', function() {
		var winHeight = 40,
			winWidth = $(window).width();

		if(winWidth > 40) nav.fadeIn();

		if($(window).scrollTop() > winHeight) $('nav').addClass('fixed');
		else $('nav').removeClass('fixed');
	});
}

function Menu() {
	const menuButton = $('.container .menus .wrapper .available-menus button'),
		  wrapper = $('.container .menus .wrapper');

	menuButton.on('click', function() {
		let menuid = $(this).attr('data-menuid'),
			menu = $('.container .menus .wrapper #' + menuid);

		wrapper.find('.active').stop().fadeOut(200);

		menu.addClass('active');
		menu.stop().delay(200).fadeIn(200);

	});
}

$(document).ready(function() {
	NavButtons();
	NavSticky();
	Menu();
});