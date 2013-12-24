/*FUNCIONES*/
function firstAnimation(){
	
		var firstStage = document.getElementById("firstStage");
	TweenLite.to(firstStage,.4, {top:"0%",
                       ease:Elastic.easeInOut});
                       
	

/*EDIFICIOS*/
	var firstBgSecond=document.getElementById("firstBgSecond");
	
                        TweenLite.to(firstBgSecond, .0009, {top:"14%",delay:0.5});
                       
	TweenLite.to(firstStage,.4, {top:"0%",
                       ease:Elastic.easeInOut});
 /*PASTO*/
var firstBgElement2=document.getElementById("firstBgElement2");
                       TweenLite.to(firstBgElement2, .3, {bottom:"0%",delay:0.5});
   
 /*TORTAS*/
 
var firstMiddleElement1=document.getElementById("firstMiddleElement1");
                       TweenLite.to(firstMiddleElement1, .1, {bottom:"25%",delay:0.8});
   
/*TACOS CANASTA*/
var firstMiddleElement3=document.getElementById("firstMiddleElement3");
                       TweenLite.to(firstMiddleElement3, .1, {bottom:"25%",delay:0.9});
  
/*TACOS PEPE*/
var firstMiddleElement4=document.getElementById("firstMiddleElement4");
                       TweenLite.to(firstMiddleElement4, .1, {bottom:"30%",delay:0.7});
  
/*---*/  
/*PADRE*/                    
	var firstMiddleElement2=document.getElementById("firstMiddleElement2");
    TweenLite.to(firstMiddleElement2,2.1, {top:"44%",
                       ease:Elastic.easeInOut});
  
  
  
    var logo = document.getElementById("firstMiddleElement4");
    TweenLite.to(logo, 1, {opacity:"1"});



    
/*PANTALLA*/
  var mainVideo = document.getElementById("firstMiddleElement5");
TweenLite.to(mainVideo,3, {top:"0%", ease:Elastic.easeInOut});

	
}


function firstAnimationBack(){
	
		var firstStage = document.getElementById("firstStage");
	TweenLite.to(firstStage,.4, {top:"-100%",
                       ease:Elastic.easeInOut});
                       
	

/*EDIFICIOS*/
	var firstBgSecond=document.getElementById("firstBgSecond");
	
                        TweenLite.to(firstBgSecond, .0009, {top:"-100%",delay:0.5});
                       
	TweenLite.to(firstStage,.4, {top:"0%",
                       ease:Elastic.easeInOut});
 /*PASTO*/
var firstBgElement2=document.getElementById("firstBgElement2");
                       TweenLite.to(firstBgElement2, .3, {bottom:"-100%",delay:0.5});
   
 /*TORTAS*/
 
var firstMiddleElement1=document.getElementById("firstMiddleElement1");
                       TweenLite.to(firstMiddleElement1, .1, {bottom:"-100%",delay:0.8});
   
/*TACOS CANASTA*/
var firstMiddleElement3=document.getElementById("firstMiddleElement3");
                       TweenLite.to(firstMiddleElement3, .1, {bottom:"-100%",delay:0.9});
  
/*TACOS PEPE*/
var firstMiddleElement4=document.getElementById("firstMiddleElement4");
                       TweenLite.to(firstMiddleElement4, .1, {bottom:"-100%",delay:0.7});
  
/*---*/  
/*PADRE*/                    
	var firstMiddleElement2=document.getElementById("firstMiddleElement2");
    TweenLite.to(firstMiddleElement2,2.1, {top:"-100%",
                       ease:Elastic.easeInOut});
  
  
  
    var logo = document.getElementById("firstMiddleElement4");
    TweenLite.to(logo, 1, {opacity:".1"});



    
/*PANTALLA*/
  var mainVideo = document.getElementById("firstMiddleElement5");
TweenLite.to(mainVideo,3, {top:"-100%", ease:Elastic.easeInOut});

}
function secondAnimation(){
	
                   
	/*BACKGROUND*/
	var secondStage = document.getElementById("secondStage");
	TweenLite.to(secondStage,.4, {top:"0%",delay:.4,
                       ease:Elastic.easeInOut});
    /*VIDEO*/
   var secondMiddleElementVideo = document.getElementById("secondMiddleElementVideo");
	TweenLite.to(secondMiddleElementVideo,.4, {top:"0%",delay:.4,
                       ease:Elastic.easeInOut});


/*LIGHT*/
    var light = document.getElementById("secondMiddleElement1");
    TweenLite.to(light, 14, {opacity:"1",delay:.4});    
    

   document.getElementById("secondMiddleElementVideo").onclick=function(){ 
 var mainVideo = document.getElementById("secondMiddleElementVideo");
	TweenLite.to(mainVideo, .4, {scale:2.0,top:"10%"});		
	};
	
	
    /*LAMPARA*/
                    
	var secondMiddleElement2 = document.getElementById("secondMiddleElement2");
	TweenLite.to(secondMiddleElement2,.4, {top:"0%",delay:1});	


    /*CUADROS1*/
                    
	var secondMiddleElement8 = document.getElementById("secondMiddleElement8");
	TweenLite.to(secondMiddleElement8,.4, {left:"12%",delay:1.2});	


    /*CUADROS2*/
                    
	var secondMiddleElement9 = document.getElementById("secondMiddleElement9");
	TweenLite.to(secondMiddleElement9,.4, {left:"24%",delay:1.7});	

    /*TV*/
                    
	var secondMiddleElement5 = document.getElementById("secondMiddleElement5");
	TweenLite.to(secondMiddleElement5,.4, {bottom:"28%",delay:1.8});	

    /*MESA*/
                    
	var secondMiddleElement4 = document.getElementById("secondMiddleElement4");
	TweenLite.to(secondMiddleElement4,.4, {bottom:"21%",delay:2});	


    /*VENTANA*/
                    
	var secondMiddleElement3 = document.getElementById("secondMiddleElement3");
	TweenLite.to(secondMiddleElement3,.4, {top:"20%",delay:2});	


    /*PASTO*/
                    
	var secondMiddleElement2 = document.getElementById("secondMiddleElement2");
	TweenLite.to(secondMiddleElement2,.4, {top:"0%",delay:2});	

/*PERRITO*/

	var secondMiddleElement7 = document.getElementById("secondMiddleElement7");
	TweenLite.to(secondMiddleElement7,.4, {top:"66%",delay:2});	

/*alimento PERRITO*/

	var secondMiddleElement6 = document.getElementById("secondMiddleElement6");
	TweenLite.to(secondMiddleElement6,.4, {bottom:"20%",delay:2});		
}


/*second animation back*/
function secondAnimationBack(){

/*LIGHT*/
    var light = document.getElementById("secondMiddleElement1");
    TweenLite.to(light, 1, {opacity:".1",delay:.4});    
 
   /*VIDEO*/

                       	var secondMiddleElementVideo = document.getElementById("secondMiddleElementVideo");
	TweenLite.to(secondMiddleElementVideo,.4, {top:"-166%",delay:2});

/*PERRITO*/

	var secondMiddleElement7 = document.getElementById("secondMiddleElement7");
	TweenLite.to(secondMiddleElement7,.4, {top:"-166%",delay:2});	

/*alimento PERRITO*/

	var secondMiddleElement6 = document.getElementById("secondMiddleElement6");
	TweenLite.to(secondMiddleElement6,.4, {top:"-129%",delay:2});		


   /*LAMPARA*/
                    
	var secondMiddleElement2 = document.getElementById("secondMiddleElement2");
	TweenLite.to(secondMiddleElement2,.4, {top:"-100%",delay:3});	


    /*CUADROS1*/
                    
	var secondMiddleElement8 = document.getElementById("secondMiddleElement8");
	TweenLite.to(secondMiddleElement8,.4, {left:"-50%",delay:1.2});	


    /*CUADROS2*/
                    
	var secondMiddleElement9 = document.getElementById("secondMiddleElement9");
	TweenLite.to(secondMiddleElement9,.4, {left:"-50%",delay:1.7});	

    /*TV*/
                    
	var secondMiddleElement5 = document.getElementById("secondMiddleElement5");
	TweenLite.to(secondMiddleElement5,.4, {bottom:"-448%",delay:1.8});	

    /*MESA*/
                    
	var secondMiddleElement4 = document.getElementById("secondMiddleElement4");
	TweenLite.to(secondMiddleElement4,.4, {bottom:"-421%",delay:2});	


    /*VENTANA*/
                    
	var secondMiddleElement3 = document.getElementById("secondMiddleElement3");
	TweenLite.to(secondMiddleElement3,.4, {top:"-50%",delay:2});	


    /*PASTO*/
                    
	var secondMiddleElement2 = document.getElementById("secondMiddleElement2");
	TweenLite.to(secondMiddleElement2,.4, {top:"-50%",delay:2});	

	/*BACKGROUND*/
	var secondStage = document.getElementById("secondStage");
	TweenLite.to(secondStage,.4, {top:"-100%",delay:.4,
                       ease:Elastic.easeInOut});
 }


/*PRINCIPAL*/
window.onload = function(){
	
	
	
	var firstStage = document.getElementById("firstStage");
	TweenLite.to(firstStage,.4, {top:"0%",
                       ease:Elastic.easeInOut});
                       
	

/*EDIFICIOS*/
	var firstBgSecond=document.getElementById("firstBgSecond");
	
                        TweenLite.to(firstBgSecond, .0009, {top:"14%",delay:0.5});
                       
	TweenLite.to(firstStage,.4, {top:"0%",
                       ease:Elastic.easeInOut});
 /*PASTO*/
var firstBgElement2=document.getElementById("firstBgElement2");
                       TweenLite.to(firstBgElement2, .3, {bottom:"0%",delay:0.5});
   
 /*TORTAS*/
 
var firstMiddleElement1=document.getElementById("firstMiddleElement1");
                       TweenLite.to(firstMiddleElement1, .1, {bottom:"25%",delay:0.8});
   
/*TACOS CANASTA*/
var firstMiddleElement3=document.getElementById("firstMiddleElement3");
                       TweenLite.to(firstMiddleElement3, .1, {bottom:"25%",delay:0.9});
  
/*TACOS PEPE*/
var firstMiddleElement4=document.getElementById("firstMiddleElement4");
                       TweenLite.to(firstMiddleElement4, .1, {bottom:"30%",delay:0.7});
  
/*---*/  
/*PADRE*/                    
	var firstMiddleElement2=document.getElementById("firstMiddleElement2");
    TweenLite.to(firstMiddleElement2,2.1, {top:"44%",
                       ease:Elastic.easeInOut});
  
  
  
    var logo = document.getElementById("firstMiddleElement4");
    TweenLite.to(logo, 1, {opacity:"1"});



    
/*PANTALLA*/
  var mainVideo = document.getElementById("firstMiddleElement5");
TweenLite.to(mainVideo,3, {top:"0%", ease:Elastic.easeInOut});


$( "#firstMiddleElement2" ).mouseover(function() {


  var mainVideo = document.getElementById("firstMiddleElement2");

TweenMax.to(mainVideo, 1, {left:"21%",
                       repeat:1, yoyo:true});

});



$( "#firstBgElement3" ).mouseover(function() {


  var shining = document.getElementById("firstBgElement3");

  TweenLite.to(shining, 1, {opacity:".4"});

});

$( "#firstBgElement3" ).mouseout(function() {


  var shining = document.getElementById("firstBgElement3");

  TweenLite.to(shining, 1, {opacity:"0"});

});




$( "#firstMiddleElement2" ).mouseout(function() {


  var mainVideo = document.getElementById("firstMiddleElement2");

TweenMax.to(mainVideo, 1, {left:"22%",
                       repeat:1, yoyo:true});

});


$( "#arrow2" ).click(function() {

	$( "#arrow1" ).css('display','block');	
var flagPosition=$("#wrapperStage").css('margin-left');



if(flagPosition=='-3445.75px'){
	
	$( "#arrow2" ).css('display','none');
}
else{
	$( "#arrow2" ).css('display','block');	
	
}

						 $( "#wrapperStage" ).animate({
						
						"margin-left": "+=-100%",
				
						}, 50, function() {
						// Animation complete.
						});
                 
switch(flagPosition){
	
	case '0px':
/*SEGUNDO ESCENARIO*/
	$("body").css("background-color","#608f64");
	firstAnimationBack();
	secondAnimation();
	break;
	
}                 

});


$( "#arrow1" ).click(function() {

	$( "#arrow2" ).css('display','block');	
var flagPosition=$("#wrapperStage").css('margin-left');


setTimeout(
  function() 
  {
		switch(flagPosition){
			
			case '-1252.17px':
			$("body").css("background-color","#65d8e2");
			secondAnimationBack();
			firstAnimation();
			break;
		}

		if(flagPosition=='-1148.58px'){
			
			$( "#arrow2" ).css('display','none');
		}
		else{
			$( "#arrow2" ).css('display','block');	
		}




}, 100);

/*RETORNAR*/
setTimeout(
  function() 
  {
   	 $( "#wrapperStage" ).animate({
						
						"margin-left": "+=100%",
				
						}, 50, function() {
						// Animation complete.
						});
  }, 2000);
						
/*TERMINA RETORNO*/

                

              


});


document.getElementById("firstMiddleElement5").onclick=function(){ 
 var mainVideo = document.getElementById("firstMiddleElement5");
	TweenLite.to(mainVideo, .4, {scale:2.0,top:"10%"});
		

	};

}

