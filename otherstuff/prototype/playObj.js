class playObj{

		constructor(xloc,yloc,color,radius,solid){
			this.xloc = xloc;
			this.yloc = yloc;
			this.color = color;
			this.radius = radius;
			this.solid = solid;
		}

		drawCirc(){
			var ctx = document.getElementById("canv").getContext("2d");
			ctx.beginPath();
			ctx.arc(this.xloc,this.yloc,this.radius,0,2*Math.PI,false);
			ctx.strokeStyle = this.color;
			ctx.stroke();
		}

		drawSqr(){
			var ctx = document.getElementById("canv").getContext("2d");
			ctx.beginPath();
			ctx.rect(this.xloc,this.yloc,this.radius*2,this.radius*2);
			ctx.strokeStyle = this.color;
			ctx.stroke();
		}
	
		drawCat(img){
			var ctx = document.getElementById("canv").getContext("2d");
			ctx.drawImage(img, this.xloc-img.width/2,this.yloc-img.height/2);
		}
	
		drawBush(){
			var ctx = document.getElementById("canv").getContext("2d");
			ctx.drawImage(bush, this.xloc,this.yloc);
		}
	
		drawGrass(){
			var ctx = document.getElementById("canv").getContext("2d");
			var bg = grass1;
			switch(this.color){
				case 0: bg = grass5; break;
				case 1: bg = grass1; break;
				case 2: bg = grass2; break;
				case 3: bg = grass3; break;
				case 4: bg = grass4; break;
			
			}
			ctx.drawImage(bg, this.xloc,this.yloc);
		}

		wrap(){
			if(this.yloc<-90){this.yloc+=worldSize;}
			if(this.yloc>(worldSize-90)){this.yloc-=worldSize;}
			if(this.xloc<-90){this.xloc+=worldSize;}
			if(this.xloc>(worldSize-90)){this.xloc-=worldSize;}
		}

	}