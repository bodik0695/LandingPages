$(function() {
	
	var btn = $('.trialClass_button');
	var choseClass = $('.trialClass_class')
	var mobMenu = $(".pageNav_mobileMenu");
	var listItem = $(".pageNav_listItem");
	var linkText = $(".pageNav_linkText");
	var logo = $(".pageNav_logo");
	var valName = false;
	var valPhone = false;
	var hidden = true;
	var hideMobMenu = false;

	$('input.trialClass_name, input.trialClass_phone').off().blur( function(){
		 var clas = $(this).attr('class');
         var val = $(this).val();
         switch(clas){
         	case "trialClass_name": 
	         	var rv_name = /^[a-zA-Zа-яА-Я]+$/;

	         	if(val.length > 2 && val != '' && rv_name.test(val)){
	         		 $(this).addClass('not_error').addClass('error');;
	                 $(this).next('.trialClass_error-box').text('Accepted')
													.css({'color': 'green', 'padding-left': '30px', 'margin-bottom': '-15px'});
	                                             
	         		valName = true;
	         	}
	         	else{
	                $(this).removeClass('not_error').addClass('error');
	                $(this).next('.trialClass_error-box').html('Invalid name')
													.css({'color': 'red', 'padding-left': '30px', 'margin-bottom': '-15px'});
	            	valName = false;
	            }
         	break;

         	case "trialClass_phone": 
	         	var rv_phone= /(^\+)38([0-9]{10})+$/;
	         	if(val.length == 13 && val != '' && rv_phone.test(val)){
	         		validatePhone = true;
					$(this).next('.trialClass_error-box').text('');
					$(this).removeClass('not_error').addClass('error');;
					$(this).next('.trialClass_error-box').text('Accepted')
													.css({'color': 'green', 'padding-left': '30px', 'margin-bottom': '-15px'});
	                                             
	         		valPhone = true;

	         	}
	         	else{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.trialClass_error-box').html('Invalid phone')
	                                             	 .css({'color': 'red', 'padding-left': '30px', 'margin-bottom': '-15px'});
	            	valPhone = false;
	            }
	            
         	break;
         }
	}); //end blur
	function validate(){
				if($('.trialClass_name').hasClass('error')){
					clas = $('.trialClass_name');
		       		val = clas.val();
		       		rv_name = /^[a-zA-Zа-яА-Я]+$/;
			         	if(val.length > 2 && val != '' && rv_name.test(val)){
			         		clas.addClass('not_error');
			                clas.next('.trialClass_error-box').text('Accepted')
			                                             	.css({'color': 'green', 'padding-left': '30px', 'margin-bottom': '-15px'});
			            	valName = true;
			            }
			         	else{
			                clas.removeClass('not_error').addClass('error');
			                clas.next('.trialClass_error-box').html('Invalid name')
			                                              	.css({'color': 'red', 'padding-left': '30px', 'margin-bottom': '-15px'});
			            	valName = false;
			            }
				}
				if($('.trialClass_phone').hasClass('error')){
					clas = $('.trialClass_phone');
		        	val = clas.val();
		        	rv_phone = /(^\+)38([0-9]{10})+$/;
			         	if(val.length == 13 && val != '' && rv_phone.test(val)){
			         		clas.next('.trialClass_error-box').text('');
			         		clas.addClass('not_error');
			                clas.next('.trialClass_error-box').text('Accepted')
			                                            	.css({'color': 'green', 'padding-left': '30px', 'margin-bottom': '-15px'});               
			         		valPhone = true;
			         	}
			         	else{
			         		clas.next('.trialClass_error-box').text('');
			                clas.removeClass('not_error').addClass('error');
			                clas.next('.trialClass_error-box').text('Invalid phone')
			                                            	.css({'color': 'red', 'padding-left': '30px', 'margin-bottom': '-15px'});
			            	valPhone = false;
			            }
				}
	}; //end validate
	function hideMenu(){
		listItem.css({'display': 'none'});
		logo.css({
			'display': 'block'
			});
		hidden = true;
	}; //end hideMenu

	function showMenu(){
		listItem.css({
			'display': 'block'
		});
		hidden = false;
	}; // end showMenu

	btn.click(function(){
      if(btn.hasClass('btn-disabled')){
        return false;
      } 
      else {
        $('.trialClass').submit();
      }
    });

	mobMenu.click(function(){
		if(hidden){
			showMenu();
		}
		else{
			hideMenu();
		}
	}); //end mobMenu.click

	linkText.click(function(){
		if(!hidden){
			hideMenu();
		}
	}); //end linkText.click
	 
	
	$(document).mouseup(function (e){
		var mobMenu = $(".pageNav_mobileMenu"); 
		var displayMobMenu = mobMenu.css('display');
			if (!mobMenu.is(e.target) 
			    && mobMenu.has(e.target).length === 0 
			    && displayMobMenu === "block") { 
				hideMenu();
			}
	});
	

	setInterval(function(){
		validate();

		if(valName === true && valPhone === true && choseClass.val() != null){
			btn.removeClass('btn-disabled');
		}
		else{
			btn.addClass('btn-disabled');
		}
		
		var mobMenu = $('.pageNav_mobileMenu');
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
			logo.css({
				'display': 'block'
				});
			hideMobMenu = true;
			hidden = true;
		}
	},1); //end setInterval
}); //end script

	