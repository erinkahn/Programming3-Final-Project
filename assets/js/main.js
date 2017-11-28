"use strict";

/* HELP --only works for first slider */

// range slider
var slider = document.getElementById("myRange");
var output = document.getElementById("rangevalue");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = slider.value;
}


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

// --------------ALL THE VARIABLES ---------------------------

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
		gender = document.querySelector('#checkboxID'),
		usersAge = document.querySelector('#myRange'),
		hairColor = document.querySelector('.hair'),
		usersheight = document.querySelector('.height'),
		bodyType = document.querySelector('.body-type'),
		lookingFor = document.querySelector('.looking');

	//variables for fieldset 2 match
	var typePerson = document.querySelector('.type'),
		matchsAge = document.querySelector('#theirRange'),
		perfectDate = document.querySelector('.date'),
		matchsHeight = document.querySelector('.height'),
		tattoos = document.querySelector('#tatCheckboxID');

	//variables for fieldset 3 account
	var email = document.querySelector('#email'),
		username = document.querySelector('#username'),
		password = document.querySelector('#pw'),
		confirmPw = document.querySelector('#confirm');


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



// -----------form field validation-------------------------

	

	function isNumeric(n) {
	    return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function addClass(el, className) {
	    if (el.classList) {
	        el.classList.add(className);
	    }
	}

	function removeClass(el, className) {
	    if (el.classList) {
	        el.classList.remove(className);
	    }
	}


	var emailCode = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var usernameCode = /^\w+$/;


	function validateForm(form) {

		// name field
		// if value is not empty and it is a string > its valid
		if (name.value !== '' && typeof name.value === 'string') {
			addClass(name, 'valid');
			removeClass(name, 'invalid');
		} else if (name.value === '' || typeof name.value !== 'string') {
			addClass(name, 'invalid');
			removeClass(name, 'valid');
		}

		// gender field
		// userage field
		// haircolor field
		// usersheight field
		// bodytype field
		// lookingfor field


		// typeperson field
		// matchsage field
		// perfectdate field
		// matchsheight field
		// tattoos field


		// email field
		// email matches emailcode > its valid
		if (email.value.match(emailCode)) {
			addClass(email, 'valid');
			removeClass(email, 'invalid');
		} else {
			addClass(email, 'invalid');
			removeClass(email, 'valid');
		}

		// username field
		if(form.username.value == "") {
		    alert("Error: Username cannot be blank!");
		    form.username.focus();
		    addClass(email, 'invalid');
			removeClass(email, 'valid');
		} else {
			addClass(email, 'valid');
			removeClass(email, 'invalid');
		}

		if(!usernameCode.test(form.username.value)) {
		    alert("Error: Username must contain only letters, numbers and underscores!");
		    form.username.focus();
		    addClass(email, 'invalid');
			removeClass(email, 'valid');
		} else {
			addClass(email, 'valid');
			removeClass(email, 'invalid');
		}

		// password field
		if(form.password.value != "" && form.password.value == form.confirmPw.value) {
	      
	      if(form.password.value.length < 6) {
	        alert("Error: Password must contain at least six characters!");
	        form.password.focus();
	        addClass(email, 'invalid');
			removeClass(email, 'valid');
	      }
		  if(form.password.value == form.username.value) {
		    alert("Error: Password must be different from Username!");
		    form.password.focus();
		    addClass(email, 'invalid');
			removeClass(email, 'valid');
		  }
		  else {
    		addClass(email, 'valid');
			removeClass(email, 'invalid');
		  }

		}


		// confirmPw field

		// next btn
		// previous btn
		// submit btn
		

	}

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

};

// validateForm();
straightUpForm();

