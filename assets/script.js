/* ----- contains all functions that respond to user input ----- */


// events to run when page is first loaded
function init() {
	// fetch holiday api list
	getCountries();
	appPage.hide();
	signoutButton.hide();
	addButton.hide();
}

// displays modal message
function showModal() {
	modalContent.text(modalMessage);
	modal.css('display', 'block');
}

//  pseudo code... 
function parentfunc() {
	if (calendarCreated === false) { // only runs the first time it's called
		createNewCalendar();
		setTimeout(function () { // doesnt run calendar id until creation is completed..... about 2 seconds later
			getCalendarID(); // stores id of the created calendar
		}, 2000); // neeed help figuring out how to make a function complete fully before proceeding
		calendarCreated = true;
		setTimeout(addCountryHolidays, 4000); // additional 2 seconds before 

	} else {
		addCountryHolidays(); // runs immediately if the desired calendar has been created
	}
};

// loops through an array of preformatted events to be added to the google calendar, posts each event to the calendar.
function addCountryHolidays() {
	// add comment explaining the purpose of if/else
	if (activeCountry.hasClass('already-added')) {
		// exits the function if the country has already been added to the users calendar
		modalMessage = 'You\'ve already added holidays from this country!';
		showModal();
	} else {
		let holidays = parseHolidays(); // formats the selected holiday list for Google Calender POST call.
		if (holidays !== null) {
			// iterating over each holiday in the given list
			for (holidayEvent of holidays) {
				addHoliday(holidayEvent);
			}
			activeCountry.addClass('already-added');
			activeCountry.css('background-color', 'lightgrey'); // change/delete

			modalMessage = 'Successfully added to your calendar!';
			showModal();
		} else {
			console.log('nothing to add!');
		};
	};
};

// add comment
function deAuthorize() {
	console.log('deauthorized');
	appPage.hide();
	homePage.show();
	handleSignoutClick();
	modalMessage = 'you have been signed out.'
	showModal();
};

init();

/* ----- Event Handlers ----- */

$('#authorize_button').on('click', handleAuthClick); // grants access to user's google account
appPage.on("click", ".country-button", showHolidays); // displays holidays for the selected country

addButton.on('click', parentfunc); // requests to add holidays to Google Calendar

// When the user clicks the button, open the modal . for testing only.
// btn.on('click', showModal);  // delete

// closes the modal display
exitModalButton.on('click', function (event) {
	modal.css('display', 'none');
});

// revokes app access to user's google account
signoutButton.on('click', deAuthorize);

//  stretch goal: store user's email and "added " list to local storage, so in the future it will stil lbe red and prevent duplicate additions


// local storage: store user's email address, added countries, and calendarID. mark added countries as unaddable