	function catDirection(){
	
	var distUp = player1.yloc - mouseypos;
	var distDown = mouseypos - player1.yloc;
	var distLeft = player1.xloc - mousexpos;
	var distRight = mousexpos - player1.xloc;
	
	var greatest = Math.max(distUp, distDown, distLeft, distRight);
		
	switch(greatest){
		
		case distUp: return catu; break;
			
		case distDown: return catd; break;
			
		case distLeft: return catl; break;
			
		case distRight: return catr; break;
	
		}
		
	}