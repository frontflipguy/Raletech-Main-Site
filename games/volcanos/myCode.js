//Just run it to see what's going on. Then play around with the five varibales declared below.

function main(){
	
	var string = "a"; //the character the shape is made of. Could be anything
	var space = " "; //the negative space inside the shape. Doesn't actually have to be a space
	var squish = 140; //the horizontal squish - DO NOT SET TO ZERO OR NEGATIVE - INFINITE LOOP
	var shape = 3; //"1" - diamond; "2" - ellipse; "3" - circle; "4" -- ???
	var height = 17; //the shape drawn will be 2 * "height" + 1
	
	var diamond = function(iterations){ //This function draws the stuff
		
	var width =  ((((Math.pow(iterations,shape))/squish)*2) + 5)*string.length; //the width in 
	//number of characters for any given line
	//console.log(width);
	
	for(var i = -iterations; i<=iterations; i++){ //the Main loop
	
		var g = Math.abs(i); //"g" is the absolute value of "i"
		var h = Math.pow(g,shape); //"h" is "g" to the "shapeth" power. 
		//Squaring "g" makes the shape elliptical instead of diamond
		
		var string2 = string; //initialize "string2" (the string that gets concatted to and printed)
		var space2 = "   "; //initialize the space thingy
		
		var l = 1; //this saved my code. it counts how many times the following for loop loops 
		
		for (var j = 0; j < h; j = j + squish){ //this for loop builds the string of characters to the correct length
			
			string2 = string2.concat(string);
			l++;
		}
		
		var f = width - (2*l*string.length); //this line is actually magic, not code. Not many people know that...
		
		for (var k = 0; k < f; k++){ //this for loop builds the number of spaces to the correct length
			
			space2 = space2.concat(space);
		}	

		console.log(string2 + space2 + string2); //this prints to the console at the end of each Main loop!
		
		}
	}
	
	
	diamond(height); //invokes the function 
}

