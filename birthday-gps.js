var birthday1;
var birthday2;
var latitude;
var longitude;
var answer = document.getElementById("answer");
var googleMaps;

function getInput(){
	birthday1 = new Date(document.getElementById("birthday1").value);
	birthday2 = new Date(document.getElementById("birthday2").value);
	latitude = document.getElementById("latitude").value.match(/^\d{1,2}[.]/);
	longitude =  document.getElementById("longitude").value.match(/^\d{1,2}[.]/);
}
function findLocation(){
	getInput();
	validate();
	if(validate()==true){
	console.log("validation");
	console.log(birthday1);
	var newLatitude = latitude + birthday1.toLocaleDateString('en-GB').split(/\W/).join("");
	var newLongitude = longitude + birthday2.toLocaleDateString('en-GB').split(/\W/).join("");
	return  "https://www.google.com/maps/@" + newLatitude + "," + newLongitude + ",17z";
	}
}

function validate(){
	if (!isFilled(latitude) || !isFilled(longitude) || !isFilled(birthday1) || !isFilled(birthday2)){
			return false;
	}else {
		return true;
	}
}
function isFilled(input){
	if(input==null){
		console.log("blank");
		return false;
	}else{
		console.log('true');
		return true;
	}
}
//TODO don't create new element, update link instead
function printAnswer(){
	var a = document.createElement('a');
	var linkText = document.createTextNode("Go here");
	a.appendChild(linkText);
	a.title = "Go here";
	a.href = findLocation();
	answer.appendChild(a);

}
//document.getElementById("calculate").addEventListener('click', checkInput);

document.getElementById("calculate").addEventListener('click', printAnswer);


//TODO check if input is correct, throw error message if not
//TODO make button to update when input is changed (probably happends bc input is loaded with page)
