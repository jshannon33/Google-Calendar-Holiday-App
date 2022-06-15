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
	modal.css("display", "block");
}

// creates a new calendar, stores it's ID if this is the first time it is run
function addToCalendar() {
	if (calendarCreated === false) {
		// only runs the first time it's called
		createNewCalendar();
		setTimeout(function () {
			// doesnt run calendar id until creation is completed... about 2 seconds later
			getCalendarID();
		}, 2000);
		calendarCreated = true;
		setTimeout(addCountryHolidays, 4000); // additional 2 seconds before
		// this code is not good, will fail if user has slow internet connection. need to fix in future deployments
	} else {
		// will add th countires holidays to the created calendar if the calendar already exists
		addCountryHolidays(); // runs immediately if the desired calendar has been created
	}
}

// loops through an array of preformatted events to be added to the google calendar, posts each event to the calendar.
function addCountryHolidays() {
	// exits the function if the country has already been added to the users calendar
	if (activeCountry.hasClass("already-added")) {
		modalMessage = "You've already added holidays from this country!";
		showModal();
		// formats the holidays selected into the format google calendar can read, the iterates over each holiday and adds them to the calendar with a light gray background.
	} else {
		let holidays = parseHolidays();
		if (holidays !== null) {
			for (holidayEvent of holidays) {
				addHoliday(holidayEvent);
			}
			activeCountry.addClass("already-added");
			activeCountry.css("background-color", "lightgrey");

			modalMessage = "Successfully added to your calendar!";
			showModal();
		} else {
			console.log("nothing to add!");
		}
	}
}

// activated when user clicks sign out, brings the user back to the home page and signs user out
function deAuthorize() {
	appPage.hide();
	homePage.show();
	handleSignoutClick();
	modalMessage = "you have been signed out.";
	showModal();
}

init();

/* ----- Event Handlers ----- */

$("#authorize_button").on("click", handleAuthClick); // grants access to user's google account
appPage.on("click", ".country-button", showHolidays); // displays holidays for the selected country

addButton.on("click", addToCalendar); // requests to add holidays to Google Calendar

// closes the modal display
exitModalButton.on("click", function (event) {
	modal.css("display", "none");
});

// revokes app access to user's google account
signoutButton.on("click", deAuthorize);
