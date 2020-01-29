	function updateAll(){
		
		var colFlag = 0;
		var colbyJack = {top: 20, bottom: 20, left: 20, right: 20}; //a collision object
		
		var a = player1.yloc-mouseypos;
		var b = player1.xloc-mousexpos;
		var c = speed1;
		var d = a/b;

		a = Math.sqrt((Math.pow(d,2)*Math.pow(c,2))/(Math.pow(d,2)+1));
		b = Math.sqrt(Math.pow(c,2)/(Math.pow(d,2) + 1));
	
		if(player1.xloc-mousexpos<0){b=-b;}
		if(player1.yloc-mouseypos<0){a=-a;}
		
		//collision checker
		for(j = 0; j < 20; j++){
			for(i = 0; i < 20; i++){
				
				if( objArray[i][j].solid == true){
					
					var collision = distCheck(player1,objArray[i][j]);
					
					if(collision.top<speed1){colbyJack.top = collision.top;	colFlag = 1;}
					if(collision.bottom<speed1){colbyJack.bottom = collision.bottom; colFlag = 1;}
					if(collision.left<speed1){colbyJack.left = collision.left; colFlag = 1;}
					if(collision.right<speed1){colbyJack.right = collision.right; colFlag = 1;}
				}
			}
		}
		
		if(colFlag==1){
			collisionMovement(colbyJack,a,b);
			colbyJack = "";
		} else if(colFlag==0){
			freeMovement(a,b);
		}
	
		//drawer
		for(j = 0; j < 20; j++){
			for(i = 0; i < 20; i++){
				
				if(objArray[i][j].solid==true){
					objArray[i][j].drawBush();
					objArray[i][j].wrap();
				} else {
					objArray[i][j].drawGrass();
					objArray[i][j].wrap();
				}
			}
		}
				
		
	}