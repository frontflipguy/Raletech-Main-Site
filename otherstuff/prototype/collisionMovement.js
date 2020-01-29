	function collisionMovement(collision,a,b){
				
		for(j = 0; j < 20; j++){
			for(i = 0; i < 20; i++){
				
				//if(typeof objArray[i][j] != 'undefined'){
					
					//objArray[i][j].color = "#0FF";

					if(a<0&&collision.top<speed1){objArray[i][j].yloc-=collision.top;} //a<0 means mouse is below player character
					
					if(a>0&&collision.bottom<speed1){objArray[i][j].yloc+=collision.bottom;} //mouse is above player character
					
					if(!(a<0&&collision.top<speed1)&&!(a>0&&collision.bottom<speed1)){objArray[i][j].yloc+=a;} //neither of the two above things is true
					
					
					if(b<0&&collision.left<speed1){objArray[i][j].xloc-=collision.left;}
					
					if(b>0&&collision.right<speed1){objArray[i][j].xloc+=collision.right;}
					
					if(!(b<0&&collision.left<speed1)&&!(b>0&&collision.right<speed1)){objArray[i][j].xloc+=b;}
					
				//}
			}
		}
	}