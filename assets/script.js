/* ----- contains all functions that respond to user input ----- */


// events to run when page is first loaded
function init() {
	// fetch holiday api list
	getCountries();
	appPage.hide();
	signoutButton.hide();
	// animate the loading screen! lol. slowly phase out the 
}

// displays modal message
function showModal() {
	modalContent.text(modalMessage);
	modal.css('display', 'block');
}

// loops through an array of preformatted events to be added to the google calendar, posts each event to the calendar.
function addCountryHolidays() {
	if (activeCountry.hasClass('already-added')) {
		// exits the function if the country has already been added to the users calendar
		modalMessage = 'You\'ve already added this country\'s holidays!';
		showModal();
	} else {
		let holidays = parseHolidays(); // formats the selected holiday list for Google Calender POST call.
		if (holidays !== null) {
			// iterating over each holiday in the given list
			for (holidayEvent of holidays) {
				addHoliday(holidayEvent);
			}
			activeCountry.addClass('already-added');
			activeCountry.css('background-color', 'grey'); // change/delete

			modalMessage = 'Successfully added to your calendar!';
			showModal();
		} else {
			console.log('nothing to add!');
		};
	};
};

init();

/* ----- Event Handlers ----- */

$('#authorize_button').on('click', handleAuthClick); // grants access to user's google account
appPage.on("click", ".country-button", showHolidays); // displays holidays for the selected country

addButton.on('click', addCountryHolidays); // requests to add holidays to Google Calendar

// When the user clicks the button, open the modal . for testing only.
btn.on('click', showModal);  // delete

// closes the modal display
exitModalButton.on('click', function (event) {
	modal.css('display', 'none');
});

// revokes app access to user's google account
signoutButton.on('click', handleSignoutClick);

//  stretch goal: store user's email and "added " list to local storage, so in the future it will stil lbe red and prevent duplicate additions