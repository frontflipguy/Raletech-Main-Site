	function distCheck(player, cpu){
		
		var top = 20; //a default value of 20 for the distances in the directions. These variables are for being returned
		var bottom = 20;
		var left = 20;
		var right = 20;
	
		var distFromTop;
		var distFromBottom;
		var distFromLeft;
		var distFromRight;
		
		if((player.xloc + player.radius)>cpu.xloc && (player.xloc - player.radius)<(cpu.xloc+cpu.radius*2)){
			
			distFromTop = cpu.yloc - (player.yloc + player.radius);
			distFromBottom = (player.yloc - player.radius) - (cpu.yloc+(cpu.radius*2));
		}
		
		if((player.yloc + player.radius)>cpu.yloc && (player.yloc - player.radius)<(cpu.yloc+cpu.radius*2)){
			
			distFromLeft = cpu.xloc - (player.xloc + player.radius);
			distFromRight = (player.xloc - player.radius) - (cpu.xloc+(cpu.radius*2));
		}
		
		if(distFromTop<speed1&&distFromTop>=0){ //if there's a collision from the top
			//color = "#000";
			//player1.color = "#FFF";
			top = distFromTop;
		} else if(distFromBottom<speed1&&distFromBottom>=0){
			//color = "#000";
			//player1.color = "#FFF";
			bottom = distFromBottom;
		} else if(distFromLeft<speed1&&distFromLeft>=0){
			//color = "#000";
			//player1.color = "#FFF";
			left = distFromLeft;
		} else if(distFromRight<speed1&&distFromRight>=0){
			//color = "#000";
			//player1.color = "#FFF";
			right = distFromRight;
		}
	
		//returns a "collision object" an object with all collision information
		return {top: top, bottom: bottom, left: left, right: right}
	
	}