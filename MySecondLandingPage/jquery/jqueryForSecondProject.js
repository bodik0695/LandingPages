$(document).ready(function(){
	var mobMenu = $(".navBar_mobileMenu");
	var listItem = $(".pageMenu_listItem");
	var hidden = true;
	var hideMobMenu = false;

	function hideMenu(){
		listItem.css({'display': 'none'});
		hidden = true;
	}; //end hideMenu

	function showMenu(){
		listItem.css({
			'display': 'inline-block'
		});
		hidden = false;
	}; // end showMenu

	mobMenu.click(function(){
		if(hidden){
			showMenu();
		}
		else{
			hideMenu();
		}
	}); //end mobMenu.click

	$(document).mouseup(function (e){
		var displayMobMenu = mobMenu.css('display');
			if (!mobMenu.is(e.target) 
			    && mobMenu.has(e.target).length === 0 
			    && displayMobMenu === "block") { 
				hideMenu();
			}
	});
	setInterval(function(){
		var displayMobMenu = mobMenu.css('display');
		if(displayMobMenu !== "block"){
			listItem.css({
				'display': 'inline-block'
			});
			hideMobMenu = false;
			hidden = false;
		}
		else if(displayMobMenu === "block" && hideMobMenu == false){
			listItem.css({'display': 'none'});
			hideMobMenu = true;
			hidden = true;
		}
	},1); //end setInterval
}); // end script