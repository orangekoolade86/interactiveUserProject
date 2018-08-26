// function to get user data
function getUserData () {

// stores values of user first name, last name. & age
var userFirst = document.getElementById ('firstName').value;
var userLast = document.getElementById ('lastName').value;
var userAge = document.getElementById ('userAge').value;

// store value for radios (Gender & color)

var userGenderEls = document.getElementsByClassName('userGender');
var userBirthEls = document.getElementsByClassName('userBirth');

// variable to store gender birth continent

var userGender, userBirth;

// ========RESPONSES ON FAILURES===========

// first name failure returns
if(userFirst == "") {
// adds a failure class if nothing is typed in the input box
	results.className = "failure";
// adds text content if nothing is typed 
	results.textContent ="type your first name";
// stops function if no answer
	return;

};

// last name failure returns
if(userLast == "") {
// adds a failure class if nothing is typed in the input box
	results.className = "failure";
// adds text content if nothing is typed 
	results.textContent ="type your last name";
// stops function if no answer
	return;

};

// age failure returns
if(userAge == "") {
// adds a failure class if nothing is typed in the input box
	results.className = "failure";
// adds text content if nothing is typed 
	results.textContent ="type your age";
// stops function if no answer
	return;

};

// radio forloops for gender and birth continent

// looping through elements with the class of Gender
for(var i = 0; i <userGenderEls.length; i++) {
// if gender is checked this will run
	if(userGenderEls[i].checked) {

		userGender = userGenderEls[i].value;
		};

	};

// looping through elements with the class of userBirth
for(var i = 0; i <userBirthEls.length; i++) {
// if gender is checked this will run
	if(userBirthEls[i].selected) {

		userBirth = userBirthEls[i].value;
		};
	};


	if(userBirth == "") {
		// add a class of failure to results if no user birth value
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to select your place of";

		// stop function if no answer
		return;
	}


// ========RESPONSES ON SUCCESS============

// if everything passes add a class of success to results
	results.className = "success";
	// update the text content of results
	results.textContent = "thanks! updating now";

// object for user data
var userProfile = {

	name: userFirst + " " + userLast,
	age: userAge,
	gender: userGender,
	birth: userBirth

};

console.log(userProfile);

// diaplays results after given time

setTimeout(function() {
		displayProfile(userProfile);
	}, 1000);
};

// displays profile information

function displayProfile(userProfile) {

	console.log(userProfile);

	var userName   = document.getElementById('newUserName');
	var userGender = document.getElementById('newUserGender');
	var	userAge  = document.getElementById('newUserAge');
	var	userBirth  = document.getElementById('newUserBirth');

	userName.innerText   = "Welcome " + userProfile.name;
	userGender.innerText = "Gender: " + userProfile.gender;
	userAge.innerText  = "Age: " + userProfile.age;
	userBirth.innerText  = "Birth Continent: " + userProfile.birth;

	// hide new profile form
	document.getElementById('newProfile').style.display = "none";
	// display updated profile data
	document.getElementById('updatedProfile').style.display = "block";

}
	// add click function to element with id="sendDataButton"
document.getElementById('sendDataButton').addEventListener('click', getUserData, false);































	




















