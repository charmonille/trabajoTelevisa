function getStage(){
	$( "#arrow1" ).css('display','block');	
var flagPosition=$("#wrapperStage").css('margin-left');
var widthContainer=$("#wrapperStage").css('width');

var myString = 'abc';
var n = widthContainer.replace('px','');
var n1 = flagPosition.replace('px','');
nf=(n1*100)/n;
alert(nf);
switch(nf){
	
	case 0: //PRIMER ESCENARIO
	
		//sale el escenario actual	
		setTimeout(
	    function() 
 				 {
					inicialStage2();//SE SACA DE ESCENA EL PRIMER ESCENARIO

				}, 100);
	
	    //avanza la escena
		setTimeout(
  		function() 
  				 {
		 			$( "#wrapperStage" ).animate({						
													"margin-left": "+=-100%",				
												}, 50, function() {
												//COMPLETO
												});
				}, 1000);
		//carga siguiente escenario
		setTimeout(
  		function() 
  				 {
					firstStage1();//SE INSERTA EL SIGUIENTE ESCENARIO
				 }, 1000);

	
	break;

/*______________________________*/
	case -10: //PRIMER ESCENARIO
	
		//sale el escenario actual	
		setTimeout(
	    function() 
 				 {
					firstStage2();//SE SACA DE ESCENA EL PRIMER ESCENARIO

				}, 100);
	
	    //avanza la escena
		setTimeout(
  		function() 
  				 {
		 			$( "#wrapperStage" ).animate({						
													"margin-left": "+=-100%",				
												}, 50, function() {
												//COMPLETO
												});
				}, 1000);
		//carga siguiente escenario
		setTimeout(
  		function() 
  				 {
					secondStage1();//SE INSERTA EL SIGUIENTE ESCENARIO
				 }, 1000);

	
	break;	
	
}

}
