	function initializeAll(){
		
		var ctx = document.createElement("canvas").getContext("2d"); //creates an HTML element that never gets shown, it just exists in the ether
		ctx.drawImage(map, 0, 0); 
		var imageData = ctx.getImageData(0, 0, 20, 20); //imageData includes the RGBT (lol) values of all pixels, so each pixel has four values associated with it, hence skipping by 4's in the loop below
		
		for(j = 0; j < 20; j++){
			for(i = 0; i < 20; i++){
				
				if(imageData.data[(i*4)+(j*4*20)]==0){
					objArray[i][j] = new playObj(i*60,j*60,"#000",30,true);
				}
				else{
					var randCol = parseInt(Math.random() * 4);
					console.log(randCol);
					objArray[i][j] = new playObj(i*60,j*60,randCol,30,false);
				}
			}
		}
		
		console.log(objArray);
		
	}