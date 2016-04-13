// Fade in Main content when window is loaded ----------------------
$('header').attr('id', 'reveal');
var fadeInElement = $('#main .container > div');

fadeInElement.each( function(i){
	setTimeout(function(){
	fadeInElement.eq(i).attr('id','reveal');
	}, 300 * (i + 1));
});

$('#skills ul li').hover(function(){
	var $fadeInPaths = $('#filled-layer path', this);
	$(this).find('#filled-layer path', this).each(function(i){
		setTimeout(function(){
			$fadeInPaths.eq(i).css('opacity', 1);
		}, 50 * (i + 1));
	});
	}, function(){
	var $fadeInPaths = $('#filled-layer path', this);
	$(this).find('#filled-layer path', this).each(function(i){
		setTimeout(function(){
			$fadeInPaths.eq(i).css('opacity','');
		}, 50 * (i + 1));
	});
});

// ALL SCROLL functions----------------------------------------
$(window).on('scroll', function(){

var wScroll = $(this).scrollTop();

	// Header reveal after 500px below the window top 
	if(wScroll > 50 && wScroll < 500) {

		$('header').css('opacity',0);

	}else if (wScroll > 500) {			
		$('header').addClass('reveal-header');
		$('header').css('opacity', 1);
	
	}else {
		$('header').removeClass('reveal-header').css('opacity', '1');
	}
});

// Open Projects on click --------------------------------------
// $('#projects').on('click', '.card', function(){
// 		var $this = $(this);
// 		var flag = false;
// 		$this.addClass('card-active')
// 		.one("webkitTransitionEnd transitionEnd", function() { 	// wait till the width transition ends then add expand content height
// 	 		var totalHeight = $('.content', this).outerHeight();
// 			$this.find('article').css('height', totalHeight + 'px');
// 		}),
// 		$('#projects').off('click','.card'), // unbind so no multiple clicks
// 		$('.card').not(this).addClass('fade'),
// 		$(this).find('.close-btn').addClass('unfade');

// 	// Close current open Project .card with .close-btn --------
// 	$(this).on('click','.close-btn',function(e){
// 		e.stopPropagation();
// 		$(this).removeClass('unfade'),
// 		$(this).siblings('article').css('height', '')
// 			.one("webkitTransitionEnd transitionEnd", function() { 	// wait till the height transition ends then remove content height
// 				$('.card').not(this).removeClass('fade'), // Bring back the sibling li's
// 				$(this).parents('.card').removeClass('card-active');
// 			});
		
// 	});


// });

function card_clicked() {
	var $this = $(this);

	$('#projects').off('click', card_clicked),
	$this.addClass('card-active').one("webkitTransitionEnd transitionEnd", function() { // wait till the width transition ends then add expand content height
		var contentHeight = $('.content', this).outerHeight(),
			sectionHeight = $('#projects').height();
		$('article', $this).css('height', '100%'),
		$('#projects').css('height', sectionHeight + contentHeight + 'px');

	}),
	$('.card').not(this).addClass('fade'),
	$this.find('.close-btn').addClass('unfade');
}

function close_card(e) {
	e.stopPropagation();
	var $this = $(this);
	$(this).removeClass('unfade'),
	$('#projects').css('height',''),
	$(this).siblings('article').css('height', '')
		.one("webkitTransitionEnd transitionEnd", function() { 	// wait till the height transition ends then remove content height
			$('.card').not(this).removeClass('fade'), // Bring back the sibling li's
			$(this).parents('.card').removeClass('card-active');
		});
	$('#projects').on('click','.card', card_clicked);
}

$("#projects").on("click",".card", card_clicked);

$("#projects").on("click",".close-btn", close_card);