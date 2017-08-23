console.log("Get to the choppa! Nao! Run before they get you!");
let random = document.getElementById("random");
let chance = document.getElementById("chance");

function setRandom() {
	chance.value = "0";
	random.value = Math.floor( Math.random() * 10000 );
	while( random.value.length < 4 ) {
		random.value = "0" + random.value;
	}
}
function validateInput(input) {
	if(input.length != 4) {
		setMessage("You must enter <b class='text-info'>4</b> Digits");
		return false;
	}
	return true;
}
function setMessage(msg) {
	document.getElementById("message").innerHTML = msg;
}
function showAnswer(success) {
	let code = document.getElementById("code");
	if(success) {
		code.className += " success";
	}
	else {
		code.className += " failure";
	}
	code.innerHTML = random.value;
	document.getElementById("inputdiv").style.display = "none";
}
function checkResult(input) {
	let html = "<tr><td>" +input+ "</td><td>";
	for( i=0; i < input.length; i++ ) {
		if( input.charAt(i) == random.value.charAt(i) ) {
			html += "<i class='glyphicon glyphicon-ok'></i>";
		}
		else if( random.value.indexOf(input.charAt(i)) > -1 ) {
			html += "<i class='glyphicon glyphicon-transfer'></i>";
		}
		else {
			html += "<i class='glyphicon glyphicon-remove'></i>";
		}
	}
	html += "</td></tr>"
	document.getElementById("tbody").innerHTML += html;
	
	if( input == random.value ) {
		return true;
	}
	return false;
}