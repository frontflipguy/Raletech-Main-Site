	
	
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();
	var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
	
	var radioState;
	
	
	$(document).ready(function(){
		
		setTimeout(function(){
			$(bg).addClass('bg');
		}, 1000);
		setTimeout(function(){
			
			$(".navigation").addClass('up');
			$(yell).addClass('yellow');
		}, 2000);

		$(yell).on("click", function(){
			$(yell).animate({ left: 1500 }, 1000, 'linear');

		});
		
		
		
		
		
		
		
		
	});
	
	
	
	
