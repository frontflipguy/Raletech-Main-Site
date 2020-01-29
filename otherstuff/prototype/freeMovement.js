	function freeMovement(a,b){
		
		for(j = 0; j < 20; j++){
			for(i = 0; i < 20; i++){
				
				//if(typeof objArray[i][j] != 'undefined'){
					
					//objArray[i][j].color = "#000";
					objArray[i][j].xloc+=b;
					objArray[i][j].yloc+=a;
					
				//}
			}
		}
	}
