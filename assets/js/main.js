"use strict";

//---------------------------------------------------------------------

//  PSEUDO CODE:

// when youre on tell us about you, 
// 		make personal details active by highlighting bkg of personal details bar 1
// 		hide preferences and account setup
//		make the next button link to the preferences page
	

// when youre on preferences,
// 		make preferences active by highlighting bkg of preferences bar 2
// 		hide personal details and account setup
// 		make the next button link to the accoundt setup page
// 		make the previous button link to the about you page

// when youre on account setup, 
// 		make account setup active by highlighting bkg of account setup bar 3
// 		hide personal deetails and account setup
// 		make the submit button show check mark/account made!
// 		make the previous button link to the preferences page

//---------------------------------------------------------------------

var straightUpForm = function() {

	// ALL THE VARIABLES ---------------------------
	
	// the whole damn form
	var theForm = document.querySelector("#msform");

	// button variables
	var allButtons = document.querySelectorAll('.action-button')
	var next = document.querySelector('.next.action-button');
	var previous = document.querySelector('.previous.action-button');
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
		genderChecked = document.querySelector('input[name="gender"]:checked').value,
		age = document.querySelector('.age'),
		ageSlider = document.querySelector('#myRange'),
		ageOutput = document.querySelector('#rangevalue'),
		hair = document.querySelector('.hair'),
		hairSelected = document.querySelectorAll('input[name="hairc"]'),
		myHeight = document.querySelectorAll('.height'),
		allHeights = document.querySelectorAll('input[name="height"]'),
		bodyType = document.querySelector('.body-type'),
		allBodyTypes = document.querySelectorAll('.body-type option'),
		lookingFor = document.querySelector('.looking'),
		allLookingFor = document.querySelectorAll('input[name="lookingfor"]');

	//variables for fieldset 2 match
	var typePerson = document.querySelector('.type'),
		allTypesPersons = document.querySelectorAll('input[name="type"]'),
		matchsAge = document.querySelector('.age2'),
		allMatchsAges = document.querySelectorAll('input[name="match-age"]'),
		perfectDate = document.querySelector('.date'),
		allPerfectDates = document.querySelectorAll('.date option'),
		matchsHeight = document.querySelector('.matchs-height'),
		allMatchsHeight = document.querySelectorAll('input[name="matchH"]'),
		tattoos = document.querySelector('input[name="tat"]');

	//variables for fieldset 3 account
	var email = document.querySelector('#email'),
		username = document.querySelector('#username'),
		password = document.querySelector('#pw'),
		confirmPw = document.querySelector('#confirm');

	// validation codes
	var emailCode = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var usernameCode = /^\w+$/;



// ---------- Age range slider slide -----------------------

	ageOutput.innerHTML = ageSlider.value;

	ageSlider.oninput = function() {
		ageOutput.innerHTML = ageSlider.value;
	}





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
		for (var i = 0; i < allFieldsets.length; i++) {
			allFieldsets[i];
			console.log(allFieldsets[i]);

			if ( currentFieldset == i ) {
				allFieldsets[i].classList.add('active');	
			} else {
				allFieldsets[i].classList.remove('active');
			} 
		}
	}

	var goToNextFieldset = function() {
		currentFieldset++; //go to next fieldset
		console.log("next clicked, show fieldset", currentFieldset);


		if (currentFieldset < allFieldsets.length) {
			loopThroughFieldsets();
		} else {
			alert('Your account has been created!'); 
		}
	}

	var goToPreviousFieldset = function(){
		currentFieldset--; //go to previous fieldset
		console.log("previous clicked, show fieldset", currentFieldset);

		if (currentFieldset >= 0) { // sanity check
			loopThroughFieldsets();
		}
	}



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



	function validateForm(form) {



		// name field-----------------
			
			// if value is not empty and it is a string > its valid
		if (name.value !== '' && typeof name.value === 'string') {
			console.log('my name is', name.value);
			addClass(name, 'valid');
			removeClass(name, 'invalid');
			

		} else if (name.value === '' || typeof name.value !== 'string') {
			alert("Error: Enter your name, damnit!");
			name.focus();
			addClass(name, 'invalid');
			removeClass(name, 'valid');
		}


		// gender field-----------------

	
		if (genderChecked !== "" || genderChecked !== null) {
			addClass(gender, 'valid');
			removeClass(gender, 'invalid');
			console.log("gender is selected");

		} else {
			alert("ERROR: Your gender is NOT selected");
			gender.focus();
			addClass(gender, 'invalid');
			removeClass(gender, 'valid');
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

		var validated = false;

		for (var i = hairSelected.length - 1; i >= 0; i--) {
			console.dir(hairSelected[i])

			if (!hairSelected[i].checked) {
				addClass(hair, 'invalid');
				removeClass(hair, 'valid');
				console.log("hair is not selected");
				
			} else {
				validated = true;
				hair.focus();
				addClass(hair, 'invalid');
				removeClass(hair, 'valid');
			}
		}

		if (!validated) {
			alert("ERROR: Your hair is NOT selected");
		} else {
			console.log("you have hair");
		}




		// users height field-----------------

// /* ? */	for (var i = 0; i < allHeights[i].length; i++){
			
// 			if(allHeights[i].checked == true){
// 				console.log("i selected a height");
//                 addClass(height, 'valid');
// 				removeClass(height, 'invalid');
// 			}
// 		}

// 		if (allHeights[i].checked == false){
// 			alert("Select a fucking height!");
//             addClass(height, 'invalid');
// 			removeClass(height, 'valid');
// 		}	


		// bodytype field-----------------
		

// IS THIS TOO COMPLEX?? DO I NEED A LOOP????

// /* ? */	for (var i = allBodyTypes.length - 1; i >= 0; i--) {
// 			allBodyTypes[i];

// 			if(allBodyTypes[i].selected == true){
// 				console.log("i selected a body type");
//                 addClass(name, 'valid');
// 				removeClass(name, 'invalid');
// 			}

// 		}

// 		if (allBodyTypes[i].selected == "") {
// 			alert("Choose a body type!");
//             addClass(name, 'invalid');
// 			removeClass(name, 'valid');
// 		}

		// if (bodyTypeSelection.value == ""){
		// 	alert("Error: Make a selection...");
		// 	bodyType.focus();
  //           addClass(bodyType, 'invalid');
		// 	removeClass(bodyType, 'valid');

		// } else {
		// 	addClass(bodyType, 'valid');
		// 	removeClass(bodyType, 'invalid');
		// }


		// lookingfor field-----------------




		// typeperson field-----------------


		// matchsage field-----------------


		// perfectdate field-----------------


		// matchsheight field-----------------

		// for (var i = 0; i < allMatchsHeight[i].length; i++){
			
		// 	if(allMatchsHeight[i].checked == true){
		// 		console.log("i selected a height");
  //               addClass(matchsHeight, 'valid');
		// 		removeClass(matchsHeight, 'invalid');
		// 	}
		// }

		// if (allMatchsHeight[i].checked == false){
		// 	alert("Select a fucking height!");
		// 	matchsHeight.focus();
  //           addClass(matchsHeight, 'invalid');
		// 	removeClass(matchsHeight, 'valid');
		// }

		// tattoos field-----------------



		// email field-----------------

			// email matches emailcode > its valid
		// if (email.value.match(emailCode)) {
		// 	addClass(email, 'valid');
		// 	removeClass(email, 'invalid');

		// } else {
		// 	alert("Error: Enter a valid email.");
		// 	email.focus();
		// 	addClass(email, 'invalid');
		// 	removeClass(email, 'valid');
		// }


		// username field-----------------

		// if(username.value == "") {
		//     alert("Error: Username cannot be blank!");
		//     username.focus();
		//     addClass(username, 'invalid');
		// 	removeClass(username, 'valid');

		// } else {
		// 	console.log('username is written');
		// 	addClass(username, 'valid');
		// 	removeClass(username, 'invalid');
		// }

		// if(!usernameCode.test(username.value)) {
		//     alert("Error: Username must contain only letters, numbers and underscores!");
		//     username.focus();
		//     addClass(username, 'invalid');
		// 	removeClass(username, 'valid');

		// } else {
		// 	addClass(email, 'valid');
		// 	removeClass(email, 'invalid');
		// }


		// password field-----------------

		// if(password.value != "" && password.value == confirmPw.value) {
	      
	 //      if(password.value.length < 6) {
	 //        alert("Error: Password must contain at least six characters!");
	 //        password.focus();
	 //        addClass(email, 'invalid');
		// 	removeClass(email, 'valid');

	 //      } else if (password.value == username.value) {
		//     alert("Error: Password must be different from Username!");
		//     password.focus();
		//     addClass(email, 'invalid');
		// 	removeClass(email, 'valid');

		//   } else {
  //   		addClass(email, 'valid');
		// 	removeClass(email, 'invalid');
		//   }

		// }


		// confirmPw field-----------------

		// next btn-----------------
		// previous btn-----------------
		// submit btn-----------------


	}

// call to validate the form
validateForm();



// ------------ make all fields required ---------------

// var allSelections = document.querySelectorAll('select');

// document.querySelectorAll( '#msform' ).validate({
//     rules: {
//         allSelections: { required: true }
//     }
// });


//---------------EVENT LISTENERS -------------------------


	// button event listener clicks
	next.addEventListener('click', function(e) {
		e.preventDefault();
		// if validation is correct/no errors and all fields are completed, go to next fieldset
		goToNextFieldset();
	})

	previous.addEventListener('click', function(e) {
		e.preventDefault();
		goToPreviousFieldset();
	})

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		// if validation is correct/no errors and all fields are completed, submit form
		validateForm();
	})


	theForm.addEventListener("submit", function(e) {
		event.preventDefault();
	})

};


straightUpForm();

