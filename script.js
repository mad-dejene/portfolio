 $(document).ready(function(){
  	$('.photos').slick({
		autoplay: true,
		dots: true,
		fade: true
	});

	 $('#img1').click(function(){
            $('#notHide').addClass('newClass');
     });

     $('#img2').click(function(){
            $('#notHide2').addClass('newClass');
     });
     
     $('.exit').click(function(){
        	$('#notHide').removeClass('newClass');
        	$('#notHide2').removeClass('newClass');
     });

     var $root = $('html, body');
    $('a').click(function() {
	  var href = $.attr(this, 'href');

	  $root.stop().animate({
	    scrollTop: $(href).offset().top
	  }, 700);

	  return false;
	});

	$root.bind('scroll mousedown DOMMouseScroll mousewheel keyup touchstart', function(e) {
	  if (e.which > 0 || e.type === 'mousedown' || e.type === 'mousewheel' || e.type === 'touchstart') {
	    $root.stop();
	  }
	});
	
});