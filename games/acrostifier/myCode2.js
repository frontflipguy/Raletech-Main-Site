
function main(){
		//initializes the 26-cell-array of 2-cell-arrays with two words for each letter of the alphabet
		var nice = [["awesome","articulate"],["brilliant","beautiful"],["cool","cute"],["dashing","darling"],["excellent","entertaining"],["funny","flirtatious"],["great","grand"],["hilarious","happy"],["intelligent","interesting"],["jovial","just"],["kind","kingly"],["lovely","light-hearted"],["marvelous","magnanamous"],["nice","noble"],["old-fashioned","optemistic"],["pretty","perfect"],["quality","quintessential"],["respected","right"],["sweet","sovereign"],["true","trustworthy"],["useful","united"],["valiant","virile"],["wonderful","wise"],["xehanort","xenophilic"],["youthful","yellow"],["zesty","zebra"]];	
		var mean = [["asinine","antisocial"],["brutish","buffoon"],["crappy","cocky"],["douchey","dipstick"],["effed-up","entitled"],["fugly","failure"],["grimy","gutless"],["hidious","half-assed"],["imbecile","irate"],["juvenile","jerk"],["knuckle-dragging","killjoy"],["luddite","loser"],["moronic","missfit"],["nimcompoop","new jerseyan"],["ornery","off-putting"],["poop","poverty"],["quagmire","quack"],["rotund","rotten"],["slimy","stupid"],["troglodyte","twisted"],["ugly","unthinkable"],["vapid","vile"],["wrong","worst"],["xenophobic","x-out"],["yucky","yellow-bellied"],["zero","zoo-animal-lover"]]	
		var wack = [["asdfghjkl","armadillo"],["bimbo","blurryface"],["crazy","crayon eater"],["dayum","dinosaur"],["extra-crispy","ectoplasm"],["fart","freaky"],["giddy","gumptious"],["high","higher"],["illogical","iffy"],["jury-duty","james Bond"],["king-of-nothing","klingon"],["lollercopter","laughingstock"],["misanthropic","martian"],["noodley","nerdy"],["office clown","ogre"],["panic!","pants"],["quandary","quaint"],["ridiculous","rollercoaster"],["silly","siked out"],["tart","trippin\'"],["underwhelming","untamed"],["vilified","vape bro"],["weird","wasted"],["xenomorph","xylophonic"],["yelling","yassss"],["zazzy","zebra-striped"]];
	
	
	var a = prompt("Please enter your name and something magical will happen!");
	var c = prompt("Nice or Mean or Wack?");

	a = a.toUpperCase();
	c = c.toUpperCase();
	
	var type = [];	//the selected array will get put into this varibale to be acted upon in the later code

	if(c === "NICE" || c === "N"){type = nice;}
	else if(c === "MEAN" || c === "M"){type = mean;}
	else if(c === "WACK" || c === "W"){type = wack;}
	else{console.log("You didn't pick nice or mean or wack."); return;}


	var b = []; //the name the user inputs is put into an array of characters

	b = a.split(""); //this splits the characters apart and puts them into an array, one character per array cell.
	
	for(var k = 0; k < type.length; k++){ //turns the first letter of each word in the word array to uppercase
	type[k][0] = type[k][0].charAt(0).toUpperCase() + type[k][0].substring(1); 
	type[k][1] = type[k][1].charAt(0).toUpperCase() + type[k][1].substring(1);
	}

	var buffer; //when moving words around in an array we need a buffer variable.
	
	for (var i = 0; i < a.length; i++){ //loops through "i", the characters in the name array
		
		for(var j = 0; j < type.length; j++){ //loops though all 26 cells of the "type" array and checks if the first letter of the word is the same as the given letter in the name.

			if(type[j][0].charAt(0) === b[i]){

			console.log(type[j][0]);
			
			buffer = type[j][0]; //gives the two words in the type array the old switcheroo
			type[j][0] = type[j][1];
			type[j][1] = buffer;
			
			}
			
		}
		
		if(b[i] === " "){console.log(" ");}
	}
}

