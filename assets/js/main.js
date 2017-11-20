"use strict";

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

// create an IIFE
var straightUpForm = function() {

	console.log("the form IIFE")

	// button variables
	var allButtons = document.querySelectorAll('.action-button')
	var next = document.querySelector('.next.action-button');
	var previous = document.querySelector('.previous.action-button');
	var submit = document.querySelector('.submit.action-button');

	// 3 fieldset variables
	var allFieldsets = document.querySelectorAll('fieldset');
	var currentFieldset = 0;
// 
	// progress bar variables
	var progressBar = document.querySelectorAll('#progressbar li');
	// var currentFieldset = 0;

	// active state variable
	var activeState = document.querySelector('.active');
	


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

		loopThroughFieldsets();

		if (currentFieldset >= allFieldsets.length) {
			alert('Your account has been created!'); 
		}
	}

	var goToPreviousFieldset = function(){
		currentFieldset--; //go to previous fieldset
		console.log("previous clicked, show fieldset", currentFieldset);

		loopThroughFieldsets();

		if (currentFieldset < 0) {
			// stay on the first page, do nothing  //--------
		}
	}



	// button event listener clicks
	next.addEventListener('click', function(e) {
		e.preventDefault();
		goToNextFieldset();
	})

	previous.addEventListener('click', function(e) {
		e.preventDefault();
		goToPreviousFieldset();
	})

	submit.addEventListener('click', function(e) {
		e.preventDefault();
	})

};

straightUpForm();

