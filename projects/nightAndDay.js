$(document).ready(function() {
    $('#orb').click(function(){
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        }
        else {
            $(this).removeClass('moon').addClass('sun');
        }
		if ($('#moonspot1').hasClass('visible')) {
			$('#moonspot1').removeClass('visible');
			$('#moonspot2').removeClass('visible');
			$('#moonspot3').removeClass('visible');
		} 
		else {
			$('#moonspot1').addClass('visible');
			$('#moonspot2').addClass('visible');
			$('#moonspot3').addClass('visible');
			}
			
		if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        }
        else {
            $('#sky').removeClass('night').addClass('day');
        }
    });
});