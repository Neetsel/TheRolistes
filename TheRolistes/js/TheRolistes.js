$(document).ready(function() {

// Footer dynamic

	window.onscroll = function() {toggleFooter(this)};

	function toggleFooter() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    document.getElementById("footer").className = "nav-up";
	  } else {
	    document.getElementById("footer").className = "nav-down";
	  }
	};

// Filter system for podcast

	$(".filter").click(function (){	

		var elementsToDisable = new Array();
		var elementsToActivate = new Array();

		 $( ".filter-active").removeClass("filter-active");

		if($(this).is("#filter-cafe")){
			elementsToDisable = $( ".cat-rolistes, .cat-present, .cat-film, .cat-academy" );
			elementsToActivate = $( ".cat-cafe");
			$( "#filter-cafe").addClass("filter-active");	
			console.log('cafe');

		} else if ($(this).is("#filter-rolistes")){
			elementsToDisable = $( ".cat-cafe, .cat-present, .cat-film, .cat-academy" );
			elementsToActivate = $( ".cat-rolistes");
			$( "#filter-rolistes").addClass("filter-active");	
			console.log('rolistes');

		} else if ($(this).is("#filter-present")){
			elementsToDisable = $( ".cat-cafe, .cat-rolistes, .cat-film, .cat-academy" );
			elementsToActivate = $( ".cat-present");
			$( "#filter-present").addClass("filter-active");	
			console.log('present');

		} else if ($(this).is("#filter-film")){
			elementsToDisable = $( ".cat-cafe, .cat-present, .cat-rolistes, .cat-academy" );
			elementsToActivate = $( ".cat-film");
			$( "#filter-film").addClass("filter-active");	
			console.log('film');

		} else if ($(this).is("#filter-academy")){
			elementsToDisable = $( ".cat-cafe, .cat-present, .cat-film, .cat-rolistes" );
			elementsToActivate = $( ".cat-academy");
			$( "#filter-academy").addClass("filter-active");	
			console.log('Academy');

		} else {
			console.log('All');	
			$( "#filter-all").addClass("filter-active");		
			elementsToActivate = $( ".disable");
		}
		
		resetElements(elementsToActivate);
		disableElements(elementsToDisable);	
	});

	function toggleElements(objects) {
	  
		if(objects.length > 0){
			console.log('number to toggle '+ objects.length);
		  	for(i=objects.length-1;i>=0;i--){
				console.log('toggle '+ i);
		  		objects[i].classList.toggle("disable");
		  	}
		}  
	};

	function resetElements(objects) {
	  
		if(objects.length > 0){
			console.log('number to reset '+ objects.length);
	  		for(i=objects.length-1;i>=0;i--){
	  			console.log('reset '+ i);
	  			objects[i].classList.remove("disable");	  			
	  		}	
		}  
	};

	function disableElements(objects) {
	  
		if(objects.length > 0){
			console.log('number to remove '+ objects.length);
	  		for(i=objects.length-1;i>=0;i--){
	  			console.log('reset '+ i);	  			
	  			objects[i].classList.add("disable");}
		}  
	};

// Change Search field color based on value

	$('form').submit(function(){
    	var input = $('#search-field').val();
    	if(input == ''){
      	   	$('#search-field').addClass("error");
      	   	event.preventDefault();
    	}    	

	});

	$('form').on("keypress keyup", function() {
		var input = $('#search-field').val();

		if(input != ''){
			$('#search-field').removeClass("error");
		}

	});

// Change Search field color based on value
	function isEmail(email) {
 		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		return regex.test(email);
	};

	$("#submitButton").click(function() {
                
                var errorMessage = "";
                var fieldsMissing = "";
                              
                if (isEmail($("#email").val()) == false) {
                    
                    errorMessage += "<p>Your email address is not valid</p>";
                    $('#email').addClass("error");
                    
                }else{
                	$('#email').removeClass("error");
                }                             
                
                if (errorMessage != "") {
                    
                    $("#errorMessage").html(errorMessage);
                    
                } else {
                    
                    $("#successMessage").show();
                    $("#errorMessage").hide();
                    
                }
                
            });
});