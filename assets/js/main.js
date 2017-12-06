"use strict";

//---------------------------------------------------------------------

//  PSEUDO CODE:

// when youre on tell us about you, 
// 		make personal details active by highlighting bkg of personal details bar 1
// 		hide preferences and account setup
//		hide previous and submit buttons
//		make the next button link to 2nd fieldset ONLY if validation is correct
	

// when youre on preferences,
// 		make preferences active by highlighting bkg of preferences bar 2
// 		hide personal details and account setup
//		hide submit button
// 		make the previous button link to first fieldset
// 		make the next button link to 3rd fieldset ONLY if validation is correct

// when youre on account setup, 
// 		make account setup active by highlighting bkg of account setup bar 3
// 		hide personal deetails and account setup
// 		make the submit button validate ONLY if there are no errors
// 		make the previous button link to 2nd fieldset

//---------------------------------------------------------------------


var straightUpForm = function() {

	// ALL THE VARIABLES ---------------------------
	
	// the whole damn form
	var theForm = document.querySelector("#msform");

	// button variables
	var allButtons = document.querySelectorAll('.action-button');
	var nextPageOne = document.querySelector('.f1 .next.action-button');
	var nextPageTwo = document.querySelector('.f2 .next.action-button');
	var previous = document.querySelectorAll('.previous.action-button');
	var submit = document.querySelector('.submit.action-button');

	// 3 fieldset variables
	var allFieldsets = document.querySelectorAll('fieldset');
	var currentFieldset = 0;

	// progress bar variables
	var progressBar = document.querySelectorAll('#progressbar li');

	// active state variable
	var activeState = document.querySelector('.active');

	//variables for fieldset 1 you
	var name = document.querySelector('#name'),
		gender = document.querySelector('.gender'),
		genderChecked = document.querySelector('input[name="gender"]:checked'),
		age = document.querySelector('.age'),
		ageSlider = document.querySelector('#myRange'),
		ageOutput = document.querySelector('#rangevalue'),
		hair = document.querySelector('.hair'),
		hairSelected = document.querySelectorAll('input[name="hairc"]'),
		height = document.querySelectorAll('.height'),
  		heightClicked = document.querySelectorAll('input[name="height"]'),
		bodyType = document.querySelector('.body-type'),
		bodySelected = document.querySelectorAll('option[name="bod"]'),
		lookingFor = document.querySelector('.looking'),
		lookingForSelected = document.querySelectorAll('input[name="lookingfor"]');


	//variables for fieldset 2 match
	var typePerson = document.querySelector('.type'),
		typeChecked = document.querySelectorAll('input[name="type"]'),
		matchsAge = document.querySelector('.age2'),
		matchsAgeRangeClicked = document.querySelectorAll('input[name="match-age"]'),
		date = document.querySelector('.date'),
		dateSelected = document.querySelectorAll('option[name="pdate"]'),
		matchHeight = document.querySelector('.matchs-height'),
		matchHeightClicked = document.querySelectorAll('input[name="matchH"]'),
		tattoo = document.querySelector('.tattoo'),
		tattooChecked = document.querySelector('input[name="tat"]:checked');

	//variables for fieldset 3 account
	var email = document.querySelector('#email'),
		emailCode = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		password = document.querySelector('#pw'),
		confirmPw = document.querySelector('#confirm');



// ---------- Age range slider slide -----------------------

	ageOutput.innerHTML = ageSlider.value;

	ageSlider.oninput = function() {
		ageOutput.innerHTML = ageSlider.value;
	};





//--------fieldset progress looping next previous --------	


	// loop through the fieldset array
	var loopThroughFieldsets = function() {

		// loop through the three progress icons
		for (var i = 0; i < progressBar.length; i++) {
			progressBar[i];
			console.log(progressBar[i]);

			if ( currentFieldset == i ) {
				progressBar[i].classList.add('active');	
			} else {
				progressBar[i].classList.remove('active');
			}
		}

		// loop through the three fields sets
		for (i = 0; i < allFieldsets.length; i++) {
			allFieldsets[i];
			console.log(allFieldsets[i]);

			if ( currentFieldset == i ) {
				allFieldsets[i].classList.add('active');	
			} else {
				allFieldsets[i].classList.remove('active');
			} 
		}
	};

	var goToNextFieldset = function() {
		currentFieldset++; //go to next fieldset
		console.log("next clicked, show fieldset", currentFieldset);


		if (currentFieldset < allFieldsets.length) {
			loopThroughFieldsets();
		} else {
			alert('Your account has been created!'); 
		}
	};

	var goToPreviousFieldset = function(){
		currentFieldset--; //go to previous fieldset
		console.log("previous clicked, show fieldset", currentFieldset);

		if (currentFieldset >= 0) { // sanity check
			loopThroughFieldsets();
		}
	};



// -----------adding and removing classes-------------------------

	
	// numbers
	function isNumeric(n) {
	    return !isNaN(parseFloat(n)) && isFinite(n);
	}

	// adding classes
	function addClass(el, className) {
	    if (el.classList) {
	        el.classList.add(className);
	    }
	}

	// removing classes
	function removeClass(el, className) {
	    if (el.classList) {
	        el.classList.remove(className);
	    }
	}


// -----------form validation function-------------------------


	function validatePage1(form) {


		// name field-----------------
			
		
		if (name.value !== '' && typeof name.value === 'string') {
			console.log('my name is', name.value);
			addClass(name, 'valid');
			removeClass(name, 'invalid');
			

		} else if (name.value === '' || typeof name.value !== 'string') {
			alert("Error: Enter your name, damnit!");
			console.log("you didnt enter your name");
			name.focus();
			addClass(name, 'invalid');
			removeClass(name, 'valid');
		}


		// gender field-----------------

		// if the checkbox is NOT checked, its male
		// if the checkbox is checked, its female
			if (!genderChecked.checked || genderChecked == null) {
				addClass(gender, 'female');
				removeClass(gender, 'male');
				console.log("I'm a male");
				
			} else {
				addClass(gender, 'male');
				removeClass(gender, 'female');
				console.log("I am a female!");
			}



		// user age field-----------------


		if (ageOutput.value >= 21) {
			console.log('you are of age');
			addClass(age, 'valid');
			removeClass(age, 'invalid');

		} else {
			alert("Error: You're a baby. GTFO.");
			console.log("Youre a baby. GTFO");                                  
			age.focus();
			addClass(age, 'invalid');
			removeClass(age, 'valid');
		}

	



		// haircolor field-----------------

		var hairValid = false;

		for (var i = hairSelected.length - 1; i >= 0; i--) {
				hairSelected[i];

			if (!hairSelected[i].checked) {
				addClass(hair, 'invalid');
				removeClass(hair, 'valid');

			} else {
				hairValid = true;
				addClass(hair, 'valid');
				removeClass(hair, 'invalid');
			}
		}

		if (!hairValid) {
			hair.focus();
			alert("ERROR: Your hair color is NOT selected");
			console.log("Your hair color is NOT selected");
		} else {
			console.log("hair color was selected");
		}


		// users height field-----------------


		var heightValid = false;

		for (var i = heightClicked.length - 1; i >= 0; i--) {
				heightClicked[i];

			if (!heightClicked[i].checked) {
				addClass(height, 'invalid');
				removeClass(height, 'valid');

			} else {
				heightValid = true;
				addClass(height, 'valid');
				removeClass(height, 'invalid');
			}
		}

		if (!heightValid) {
			alert("ERROR: You didn't click your height");
			console.log("Your height is NOT selected");
		} else {
			console.log("you chose your height");
		}



		// bodytype field-----------------
			

		var bodvalidated = false;

		for (var i = bodySelected.length - 1; i >= 0; i--) {
			bodySelected[i];

			if(!bodySelected[i].selected){
                addClass(bodyType, 'invalid');
				removeClass(bodyType, 'valid');
			} else {
				bodvalidated = true;
				addClass(bodyType, 'valid');
				removeClass(bodyType, 'invalid');
			}
		}

		if (!bodvalidated) {
			bodyType.focus();
			alert("Error: You didn't select a body type");
			console.log("select a body type");
		} else {
			console.log("yay. a body type was selected!");
		}




		// lookingfor field-----------------


		var lookingForValid = false;

		for (var i = 0; i < lookingForSelected.length; i++) {
			var lookingForSelection = lookingForSelected[i];

			if (lookingForSelection.checked) {
				lookingForValid = true;
			}
		}
		
		if (lookingForValid) {
			addClass(lookingFor, 'valid');
			removeClass(lookingFor, 'invalid');
			console.log("looking for is selected");

		} else {
			alert("ERROR: You didn't choose what you're looking for");
			lookingFor.focus();
			addClass(lookingFor, 'invalid');
			removeClass(lookingFor, 'valid');
		}


	};



	function validatePage2(form) {

		// typeperson field-----------------

		// if you check >8 checkboxes, Error: you chose too many
		// if you check <=8 checkboxes, you chose the correct amount

		var numberChecked = 0;

		for (var i = typeChecked.length - 1; i >= 0; i--) {

			// if none are checked, its wrong 
			if (!typeChecked[i].checked) {
				addClass(typePerson, 'invalid');
				removeClass(typePerson, 'valid');

			} else if (typeChecked[i].checked && typeChecked[i].checked <= 8){
				numberChecked++;
				addClass(typePerson, 'valid');
				removeClass(typePerson, 'invalid');
			}
		}

		// if at least one is checked and # of checked items is less than 9 its right
		if (numberChecked > 0 && numberChecked <= 8) {
			console.log("WOOO HOO your type was selected");
			
		} else {
			typePerson.focus();
			alert("ERROR: Select one type but NO MORE than 8.");
			console.log("Your type is either NOT selected or you chose too many");
		}




		// matchsage field-----------------

		// if you choose 1 age range box, you chose correctly
		// if its null or unchecked, Error: field is empty

		var matchAgeValid = false;

		for (var i = matchsAgeRangeClicked.length - 1; i >= 0; i--) {
				matchsAgeRangeClicked[i];

			if (!matchsAgeRangeClicked[i].checked) {
				addClass(matchsAge, 'invalid');
				removeClass(matchsAge, 'valid');

			} else {
				matchAgeValid = true;
				addClass(matchsAge, 'valid');
				removeClass(matchsAge, 'invalid');
			}
		}

		if (!matchAgeValid) {
			matchsAge.focus();
			alert("ERROR: What age range are you looking for?");
			console.log("You didn't choose an age range for your match");
		} else {
			console.log("you chose an age range");
		}








		// perfectdate field-----------------

		var validatedDate = false;

		for (var i = 0; i < dateSelected.length; i++) {
			dateSelected[i];

			if (!dateSelected[i].selected) {
				addClass(date, 'invalid');
				removeClass(date, 'valid');

			} else {
				validatedDate = true;
				addClass(date, 'valid');
				removeClass(date, 'invalid');
			}
		}

		if (!validatedDate) {
			date.focus();
			alert("Error: omg whats your perfect date");
			console.log("you didnt choose your perfect date");
		} else {
			console.log("you chose a perfect date");
		}





		// matchsheight field-----------------


		var matchHeightValid = false;

		for (var i = matchHeightClicked.length - 1; i >= 0; i--) {
				matchHeightClicked[i];

			if (!matchHeightClicked[i].checked) {
				addClass(matchHeight, 'invalid');
				removeClass(matchHeight, 'valid');

			} else {
				matchHeightValid = true;
				addClass(matchHeight, 'valid');
				removeClass(matchHeight, 'invalid');
			}
		}

		if (!matchHeightValid) {
			alert("ERROR: What height do you want them to be?");
			console.log("Your matchs height is NOT selected");
		} else {
			console.log("you chose your matchs height");
		}





		// tattoos field-----------------

		// if the checkbox is checked, its yes 
		// if the checkbox is unchecked/null, its no
		if (!tattooChecked.checked || tattooChecked == null) {
			addClass(tattoo, 'no');
			removeClass(tattoo, 'yes');
			console.log("no. i hate tattoos");
		} else {
			addClass(tattoo, 'yes');
			removeClass(tattoo, 'no');
			console.log("hell yas. i love tattoos");
		}
	

	};






	function validatePage3(form) {


		// email field-----------------


		// if email matches emailcode > its valid
		if (email.value.match(emailCode)) {
			addClass(email, 'valid');
			removeClass(email, 'invalid');
			console.log('you entered a CORRECT email')

		} else {
			alert("Error: Enter a valid email address.");
			console.log('you entered the wrong email address')
			email.focus();
			addClass(email, 'invalid');
			removeClass(email, 'valid');
		}



		// password -----------------


		
		if (password.value != "" && password.value.length > 6) {
			addClass(password, 'valid');
			removeClass(password, 'invalid');
			console.log('yay you followed instructions');
	        
	    } else {
			alert("Error: Password must contain at least six characters!");
	        console.log('you didnt enter a correct password');
	        password.focus();
	        addClass(password, 'invalid');
			removeClass(password, 'valid');
		}


		// confirm password -----------

		if (confirmPw.value != "" && confirmPw.value == password.value) {
			addClass(confirmPw, 'valid');
			removeClass(confirmPw, 'invalid');
			console.log('yay confirmation pw matches!!!');
		} else {
			alert("Error: your confirmation password isnt correct!");
	        console.log('confirmation password is wrong');
	        confirmPw.focus();
	        addClass(confirmPw, 'invalid');
			removeClass(confirmPw, 'valid');
		}


	};

		






//---------------EVENT LISTENERS -------------------------


	// button event listener clicks
	nextPageOne.addEventListener('click', function(e) {
		e.preventDefault();
		// if validation is correct/no errors and all fields are completed, go to next fieldset
		if ( /* there are errors or alerts */) {
			validatePage1();
		} else {
			goToNextFieldset();
		}

	});

	nextPageTwo.addEventListener('click', function(e) {
		e.preventDefault();
		// if validation is correct/no errors and all fields are completed, go to next fieldset
		if ( /* there are errors or alerts */) {
			validatePage2();
		} else {
			goToNextFieldset();
		}
	});


	// looping through all the previous buttons
	for (var i = 0; i < previous.length; i++) {
		previous[i].addEventListener('click', function(e) {
			e.preventDefault();
			goToPreviousFieldset();
		})
	}

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		// if validation is correct/no errors and all fields are completed, submit form
		if ( /* there are errors or alerts */) {
			validatePage3();
		} else {
			//submit;
		}
	});


	theForm.addEventListener("submit", function(e) {
		event.preventDefault();
	});

};


straightUpForm();

