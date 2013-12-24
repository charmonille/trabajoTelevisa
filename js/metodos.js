function stage1Entrada(){
	
	
	var body=$('body');
	TweenLite.to(body,1, {backgroundColor:"#e54538"});
	/*BACKGROUND*/
	
	var bg1=$("#s1bg1");
	TweenLite.to(bg1,.004, {top:"0%",
                       ease:Elastic.easeInOut,delay:1});

	var bg2=$("#s1bg2");
	TweenLite.to(bg2,1, {opacity:"1",delay:1});

	
	var bg3=$("#s1bg3");
	TweenLite.to(bg3,.4, {top:"8%",
                       ease:Elastic.easeInOut,delay:1.2});
	
	var bg4=$("#s1bg4");
	TweenLite.to(bg4,1, {opacity:"1",delay:1.4});

	
	var bg6=$("#s1bg6");
	TweenLite.to(bg6,.4, {left:"0%",
                       ease:Elastic.easeInOut,delay:1.6});
		
	/*FRONT*/
	var front1=$("#s1f1");
	TweenLite.to(front1,2, {top:"31%",
                       ease:Elastic.easeInOut});
                       
}

stage1Entrada();
