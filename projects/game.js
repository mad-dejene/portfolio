$(document).ready(function() {
    $('#one').click(function(){
        if ($(this).hasClass('one')) {
            $(this).removeClass('one').addClass('pen1');
        }
        else {
            $(this).removeClass('pen1').addClass('one');
        }
    });
	
	 $('#two').click(function(){
        if ($(this).hasClass('two')) {
            $(this).removeClass('two').addClass('pen2');
        }
        else {
            $(this).removeClass('pen2').addClass('two');
        }
    });
	 $('#three').click(function(){
        if ($(this).hasClass('three')) {
            $(this).removeClass('three').addClass('pen3');
        }
        else {
            $(this).removeClass('pen3').addClass('three');
        }
    });
	 $('#four').click(function(){
        if ($(this).hasClass('four')) {
            $(this).removeClass('four').addClass('pen4');
        }
        else {
            $(this).removeClass('pen4').addClass('four');
        }
    });
	 $('#five').click(function(){
        if ($(this).hasClass('five')) {
            $(this).removeClass('five').addClass('pen5');
        }
        else {
            $(this).removeClass('pen5').addClass('five');
        }
    });
	 $('#six').click(function(){
        if ($(this).hasClass('six')) {
            $(this).removeClass('six').addClass('pen6');
        }
        else {
            $(this).removeClass('pen6').addClass('six');
        }
    });
	 $('#seven').click(function(){
        if ($(this).hasClass('seven')) {
            $(this).removeClass('seven').addClass('pen7');
        }
        else {
            $(this).removeClass('pen7').addClass('seven');
        }
    });
	 $('#eight').click(function(){
        if ($(this).hasClass('eight')) {
            $(this).removeClass('eight').addClass('pen8');
        }
        else {
            $(this).removeClass('pen8').addClass('eight');
        }
    });
	
	 $('#nine').click(function(){ 
        $(this).removeClass('nine').addClass('yeti');
		$('#one').removeClass('pen1').addClass('one');
		$('#two').removeClass('pen2').addClass('two');
		$('#three').removeClass('pen3').addClass('three');
		$('#four').removeClass('pen4').addClass('four');
		$('#five').removeClass('pen5').addClass('five');
		$('#six').removeClass('pen6').addClass('six');
		$('#seven').removeClass('pen7').addClass('seven');
		$('#eight').removeClass('pen8').addClass('eight');
		
		alert("Yaaaaaaaaaaaaaarrrrrrrrrr");
		alert("The yeti scared all the penguins! Game Over!");
		var answer = prompt("Play again? (Yes/No)").toLowerCase();
		switch(answer){
			case 'yes':
				$(this).removeClass('yeti').addClass('nine');
				break;
			default:
				alert("Goodbye");
				$(this).removeClass('nine').addClass('yeti');
		}
	 });
	 
	
});
	 