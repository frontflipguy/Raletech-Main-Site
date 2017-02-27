
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();
	var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
	
	var radioState;
	
	
	$(document).ready(function(){
    	$(date).html(monthNames[month] + " " + day + ", " + year);
	});
	
	$(document).on('keyup', '#jobTitle', function(){ //autofills the job title as it is typed
		
			var jTitle = $(jobTitle).val();	
			$(".input-box1").val( jTitle );
			
			var firstLetter = jTitle.substring(0, 1);
			firstLetter = firstLetter.toUpperCase();
			if(firstLetter=='A'||firstLetter=='E'||firstLetter=='I'||firstLetter=='O'||firstLetter=='U'){$(aoran).html("an");}
			else{$(aoran).html("a");}
		
		});
	
	$(document).on('keyup', '#company', function(){ //autofills the company name as it is typed
			$(".input-box2").val( $(company).val()	);	
		});
	
	
	$(document).on('keyup', '#company', function(){ //autofills the company name in the button as it is typed
			$(expButton).val("Create custom URL for " +  $(company).val()	);	
		});
	
	$(document).on('keyup', '#loc', function(){ //autofills the location as it is typed
			$(locBox).val( $(loc).val() );	
		});
	
	$(document).on('keyup', '#buzz1', function(){ //autofills buzzphrase 1 as it is typed
			$(buzz1Box).val( $(buzz1).val() );	
		});
	
	$(document).on('keyup', '#buzz2', function(){ //autofills bussphrase 2 as it is typed
			$(buzz2Box).val( $(buzz2).val() );	
		});
	
	$(document).on('click', '.radio', function(){ //handles the changes needed when a radio button is clicked
		radioState = $('input[name=type]:checked').val();
		
		if(radioState=="companyR"){
			$(zeroeth).html(
			'Company: <input id="company">'
				)
			$(first).html(
				'My name is Bradley Raley and I am applying for <div class="idiv" id="aoran">a</div> <input value="job title" class="input-box1" id="titleBox" disabled> position at <input value="company" class="input-box2" id="companyBox" disabled> in <input value="location" class="input-box" id="locBox" disabled>. After researching the goals and expectations of <input value="company" class="input-box2" id="companyBox" disabled> employees, I admire the demand for quality of character and the value placed on individual excellence to benefit the vision <input value="expanding technological horizons" class="input-box-long" id="buzz1Box" disabled>. I want to work at <input value="company" class="input-box2" id="companyBox" disabled> so that I can contribute my skills to a company that <input value="really makes a difference in the customer service industry" class="input-box-long2" id="buzz2Box" disabled>.'
				)
			$(second).html(
				'In my current work as a Production Coordinator, I value clear communication when collaborating with coworkers and assisting clients. I also strive to achieve precision, accuracy, and attention to detail in everything I put my name on. For example, when a client makes a request to change some of our web content, but does not specify how they want it changed, I write to the client and begin a conversation about how we can best satisfy their needs. I would maintain this mindset in a position at <input value="company" class="input-box2" id="companyBox" disabled> not only because it contributes to customer satisfaction and excellent products, but also because I take pride in the quality of my work.'
				)
			$(fourth).html(
			'I look forward to using my skills to contribute to the positive community at <input value="company" class="input-box2" id="companyBox" disabled>. Thank you for your consideration of my application. I hope to meet with you in person regarding the <input value="job title" class="input-box1" id="titleBox" disabled> position soon. If you have any questions before then please feel free contact me at the above address.'
				)
			}
		else if(radioState=="headhunterR"){
			$(zeroeth).html(
			'Headhunter: <input id="company">'
				)
			$(first).html(
				'My name is Bradley Raley and I am applying for <div class="idiv" id="aoran">a</div> <input value="job title" class="input-box1" id="titleBox" disabled> position in <input value="location" class="input-box" id="locBox" disabled>. I have researched the goals and expectations of employees of all kinds of tech companies in and around <input value="location" class="input-box" id="locBox" disabled>, and I admire the demand for quality of character and the value placed on individual excellence to benefit the vision <input value="expanding technological horizons" class="input-box-long" id="buzz1Box" disabled>. I am looking forward to contributeing my skills to a company that <input value="really makes a difference in the customer service industry" class="input-box-long2" id="buzz2Box" disabled>.'
				)
			$(second).html(
				'In my current work as a Production Coordinator, I value clear communication when collaborating with coworkers and assisting clients. I also strive to achieve precision, accuracy, and attention to detail in everything I put my name on. For example, when a client makes a request to change some of our web content, but does not specify how they want it changed, I write to the client and begin a conversation about how we can best satisfy their needs. I would maintain this mindset in the next position I am placed in not only because it contributes to customer satisfaction and excellent products, but also because I take pride in the quality of my work.'
				)
			$(fourth).html(
			'I look forward to using my skills and friendly attitude to contribute to the positivity of the community at the next workplace I am a part of. Thank you for your consideration of my application. I hope to meet with you in person regarding the <input value="job title" class="input-box1" id="titleBox" disabled> position soon. If you have any questions before then please feel free contact me at the above address.'
				)
			}
		
		//lastly, clear all the user entry boxes
		$(jobTitle).val('');
		$(company).val('');
		$(loc).val('');
		$(buzz1).val('');
		$(buzz2).val('');
		
		});

	$(document).on("click", '#expButton', function(){
		var comp = $(company).val();
		comp = comp.replace(/'/g, "");
		comp = comp.replace(/,/g, "");
		comp = comp.replace(/;/g, "");
		comp = comp.replace(/:/g, "");
		comp = comp.replace(/[?]/g, "");
		comp = comp.replace(/=/g, "");
		comp = comp.replace(/ /g, "%20");

		console.log(comp);
		
		var yurl = "http://www.raletech.com/otherstuff/coverletter/?company=" + comp;
		
		$(custURL).html('<input style="width:500px" value="' + yurl + '" id="yurl">');
		$(copy).html('<input type="button" value="Copy to Clipboard" id="copyButton">');
		
		writeToXML();
		
	});
	
	
	
	$(document).on("click", '#copyButton', function(){

	$(msg).html("Copied to clipboard!");
		
	var target = document.getElementById("yurl");
	target.focus();
    target.setSelectionRange(0, target.value.length);
	document.execCommand("copy")
	setTimeout(function() {document.getElementById("msg").innerHTML = "";},2000);

		});

	
	
	$(document).on("click", '.navigation-button', function(){
		
		var answer = confirm("Are you sure you want to reset this form?");
		
		if(answer){window.location.href = "http://www.raletech.com/otherstuff/coverletter/";}
		
	});

		
	$(document).ready(function(){
			var w = window.location.search;
			var ques = w.search("[?]");
			var equals = w.search("=");
			var uVar = w.substr(ques+1, equals-1);
			var uParam = w.substr(equals+1, w.length);
			uParam = uParam.replace(/%20/g, " ");

		
			if(uVar=="company"&&uParam!=""){
				
				 $(".left-td").css("display", "none"); //hide the editing window
				
				$.get("forms.xml", function( xml ){
											
				   var radio = xml.getElementById(uParam).getElementsByTagName("RADIO")[0].innerHTML;
				   var jobTitle = xml.getElementById(uParam).getElementsByTagName("JOBTITLE")[0].innerHTML;
				   var loc = xml.getElementById(uParam).getElementsByTagName('LOCATION')[0].innerHTML;
				   var buzz1 = xml.getElementById(uParam).getElementsByTagName('BUZZ1')[0].innerHTML;
				   var buzz2 = xml.getElementById(uParam).getElementsByTagName('BUZZ2')[0].innerHTML;

				   populateFields(radio, jobTitle, uParam, loc, buzz1, buzz2);
				});

			}
			
	});
	
	function populateFields(rad, job, co, loc, b1, b2){
		
		var firstLet = job.substring(0, 1);
			firstLet = firstLet.toUpperCase();
		var anora;
			if(firstLet=='A'||firstLet=='E'||firstLet=='I'||firstLet=='O'||firstLet=='U'){anora = "an";}
			else{anora = "a";}
		
		if(rad=="companyR"){
			
			$(first).html(
				'My name is Bradley Raley and I am applying for ' + anora + ' ' + job + ' position at ' + co + ' in ' + loc + '. After researching the goals and expectations of ' + co + ' employees, I admire the demand for quality of character and the value placed on individual excellence to benefit the vision ' + b1 + '. I want to work at ' + co + ' so that I can contribute my skills to a company that ' + b2 + '.'
				)
			$(second).html(
				'In my current work as a Production Coordinator, I value clear communication when collaborating with coworkers and assisting clients. I also strive to achieve precision, accuracy, and attention to detail in everything I put my name on. For example, when a client makes a request to change some of our web content, but does not specify how they want it changed, I write to the client and begin a conversation about how we can best satisfy their needs. I would maintain this mindset in a position at ' + co + ' not only because it contributes to customer satisfaction and excellent products, but also because I take pride in the quality of my work.'
				)
			$(fourth).html(
			'I look forward to using my skills to contribute to the positive community at ' + co + '. Thank you for your consideration of my application. I hope to meet with you in person regarding the ' + job + ' position soon. If you have any questions before then please feel free contact me at the above address.'
				)
			}
		else if(rad=="headhunterR"){
			
			$(first).html(
				'My name is Bradley Raley and I am applying for ' + anora + ' ' + job + ' position in ' + loc + '. I have researched the goals and expectations of employees of all kinds of tech companies in and around ' + loc + ', and I admire the demand for quality of character and the value placed on individual excellence to benefit the vision ' + b1 + '. I am looking forward to contributeing my skills to a company that ' + b2 + '.'
				)
			$(second).html(
				'In my current work as a Production Coordinator, I value clear communication when collaborating with coworkers and assisting clients. I also strive to achieve precision, accuracy, and attention to detail in everything I put my name on. For example, when a client makes a request to change some of our web content, but does not specify how they want it changed, I write to the client and begin a conversation about how we can best satisfy their needs. I would maintain this mindset in the next position I am placed in not only because it contributes to customer satisfaction and excellent products, but also because I take pride in the quality of my work.'
				)
			$(fourth).html(
			'I look forward to using my skills and friendly attitude to contribute to the positivity of the community at the next workplace I am a part of. Thank you for your consideration of my application. I hope to meet with you in person regarding the ' + job + ' position soon. If you have any questions before then please feel free contact me at the above address.'
				)
			}
		
	}
	
	/**function resizeBoxes(){
		var boxArray = [".input-box1",".input-box2",locBox,buzz1Box,buzz2Box];
		
		for(var p = 0; p<boxArray.length; p++){
				var vvv = $(boxArray[p]).val().length;
				console.log(vvv);
				var calcWidth = ((vvv + 1) * 6) + 'px';
				console.log(calcWidth);
				$(boxArray[p]).css("width", calcWidth)

		}
	}**///I don't think I need this after all but it can hang around for now
	
	
	//PHP stuff!
	
	function writeToXML(){
		
	var radio = $('input[name=type]:checked').val();
	var job = $(jobTitle).val();
	var comp = $(company).val();
		comp = comp.replace(/'/g, "");
		comp = comp.replace(/,/g, "");
		comp = comp.replace(/;/g, "");
		comp = comp.replace(/:/g, "");
		comp = comp.replace(/[?]/g, "");
		comp = comp.replace(/=/g, "");
	var location = $(loc).val();
	var bz1 = $(buzz1).val();
	var bz2 = $(buzz2).val();
	
	var httpRequest = new XMLHttpRequest();

    httpRequest.open('POST', 'coverWrite.php');
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send("radio=" + encodeURIComponent(radio) +"&job=" + encodeURIComponent(job) + "&company=" + encodeURIComponent(comp) + "&location=" + encodeURIComponent(location) + "&buzz1=" + encodeURIComponent(bz1) + "&buzz2=" + encodeURIComponent(bz2));
	
	}
	
	
