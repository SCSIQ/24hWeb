
jQuery(function($){

	console.log($('#liste li').length); //compte le  nombre d'élément dans la liste

	$("ul li").first().addClass("active").show(); //ajoute la classe active dans la première li de ul

	
	$(".gauche").click(function(){ //écouteur dévènement sur la flèche gauche
		//si c'est inférieur a length, affiche la dernière image
		if($(".active").index() < $('#liste li').length-7){
			$(".active").removeClass("active").hide();
			$("#liste li").last().addClass("active").show();
		}else{
			$(".active").removeClass("active").hide().prev().addClass("active").show();	
			console.log($(".active").index());
		}
	});
	
	$(".droite").click(function(){
		if($(".active").index() >= $('#liste li').length-1){//si c'est supérieur a length, affiche la dernière image
			$(".active").removeClass("active").hide();
			$("#liste li").first().addClass("active").show();
		} else {		
			$(".active").removeClass("active").hide().next().addClass("active").show();
			console.log($(".active").index()); //index affiche la position de l élément dans la liste
		}
	});

	
	
	

	
	
});

//$("ul li").eq(3).addClass(active);