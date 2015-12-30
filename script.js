 $(document).ready(function(){
  	$('.photos').slick({
		autoplay: true,
		dots: true,
		fade: true
	});

	 $('#img1').click(function(){
            $('#notHide2').addClass('newClass');
     });

     $('#img2').click(function(){
            $('#notHide3').addClass('newClass');
     });
     
     $('#img3').click(function(){
            $('#notHide4').addClass('newClass');
     });

     $('#img4').click(function(){
            $('#notHide5').addClass('newClass');
     });

     $('.exit').click(function(){
        	$('#notHide2').removeClass('newClass');
        	$('#notHide3').removeClass('newClass');
        	$('#notHide4').removeClass('newClass');
            $('#notHide5').removeClass('newClass');
        	
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

	 $('#mainPoetry').click(function(){
            $('#thing').addClass('newClass');
     });
   
	
});