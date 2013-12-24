function stage1Entrada(){
	
	
	var body=$('body');
	TweenLite.to(body,.1, {backgroundColor:"#e54538"});
	/*BACKGROUND*/
	
	var bg1=$("#s1bg1");
	TweenLite.to(bg1,1, {top:"0%",
                       ease:Elastic.easeInOut,delay:.1});

	var bg2=$("#s1bg2");
	TweenLite.to(bg2,.1, {opacity:"1",delay:.12});

	var bg3=$("#s1bg3");
	TweenLite.to(bg3,2, {top:"8%",
                       ease:Elastic.easeInOut,delay:.7});

	
	var bg4=$("#s1bg4");
	TweenLite.to(bg4,.2, {opacity:"1",delay:.8});

	var bg5=$("#s1bg5");
	TweenLite.to(bg5,.02, {bottom:"0%",delay:.9});

	
	var bg6=$("#s1bg6");
	TweenLite.to(bg6,.2, {left:"0%",
                       ease:Elastic.easeInOut,delay:1.2});
		
		
	/*MIDDLE*/
	var s1m1=$("#s1m1");
	TweenLite.to(s1m1,2, {top:"51%",
                       ease:Elastic.easeInOut,delay:2});

		
	/*FRONT*/
	var front1=$("#s1f1");
	TweenLite.to(front1,2, {top:"61%",
                       ease:Elastic.easeInOut,delay:2});
                       
}

stage1Entrada();
