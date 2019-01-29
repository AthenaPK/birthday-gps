var birthday1;
var birthday2;
var latitude;
var longitude;

function init(){
	var answer = document.getElementById('answer');
	var error_msg = document.getElementById('error_msg');
	if (typeof(answer) != undefined && answer != null){
		document.getElementById('main').removeChild(answer);
		console.log('removed');
	}if (typeof(error_msg) != undefined && error_msg != null){
		document.getElementById('main').removeChild(error_msg);
	}
}

function getInput(){
	birthday1 = new Date(document.getElementById("birthday1").value);
	birthday2 = new Date(document.getElementById("birthday2").value);
	latitude = document.getElementById("latitude").value;
	longitude =  document.getElementById("longitude").value;
}

function validate(){
	if (!isFilled(latitude) || !isFilled(longitude)){
		return false;
	}else if(isNaN(latitude) || isNaN(longitude)){
		return false;
	}else if (latitude > 90 || latitude < -90 || longitude < -180 || longitude > 180) {
		return false;
	}else if (!Date.parse(birthday1) || !Date.parse(birthday2)) {
		return false;
	}
	else {
		return true;
	}
}

function isFilled(input){
	if(input==null || input == ""){
		return false;
	}else{
		return true;
	}
}

function displayErrorMessage(message){
	var div = document.createElement("div");
	div.id = "error_msg";
	document.getElementById('main').appendChild(div);
	div.appendChild(document.createTextNode(message));
}

function findLocation(){
	console.log("validated!");
	console.log(birthday1);
	var newLatitude = latitude.match(/^\d{1,2}[.]/) + birthday1.toLocaleDateString('en-GB').split(/\W/).join("");
	var newLongitude = longitude.match(/^\d{1,2}[.]/) + birthday2.toLocaleDateString('en-GB').split(/\W/).join("");
	return  "https://www.google.com/maps/@" + newLatitude + "," + newLongitude + ",17z";
}

function printAnswer(){
	var div = document.createElement("div");
	div.id = "answer";
	document.getElementById("main").appendChild(div);
	var a = document.createElement('a');
	var linkText = document.createTextNode("Go to this spot!");
	a.appendChild(linkText);
	a.title = "Go here";
	a.href = findLocation();
	a.target = "blank";
	div.appendChild(a);
}

function calculate(){
	init();
	getInput();
	validate();
	if(validate()==true){
		findLocation();
		printAnswer();
	}else{
		displayErrorMessage("Please enter valid information.")
	}
}
document.getElementById("calculate").addEventListener('click', calculate);
