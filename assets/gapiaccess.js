/* contains all original functions that directly use and interact with the Google Calendar API. */

// accepts an object formatted for Google Calendar event creation, pushes to user's calendar
function addHoliday(holidayEvent) {
	return gapi.client.calendar.events
		.insert({
			calendarId: calendarID,
			resource: holidayEvent,
		})
		.then(
			function (response) {
				// Handle the results here (response.result has the parsed body).
				// console.log("Response", response);
			},
			function (err) {
				console.error("Execute error", err);
			}
		);
}

// takes the given list of holidays and returns an array of events formatted for Google Calendar
function parseHolidays() {
	var event;
	let descriptionString;
	eventList = [];
	for (holiday of holidays) {
		if (holiday.localName === holiday.name) {
			descriptionString = "National holiday of " + activeCountry.text() + ".";
		} else {
			descriptionString =
				"In " +
				activeCountry.text() +
				", this holiday is known as " +
				holiday.localName +
				"!";
		}
		// object that puts the data from the holiday API into a format that the google calendar API can read
		event = {
			summary: holiday.name,
			location: holiday.country,
			description: descriptionString,
			start: {
				date: holiday.date,
				timeZone: "America/Los_Angeles",
			},
			end: {
				date: holiday.date,
				timeZone: "America/Los_Angeles",
			},
			reminders: {
				useDefault: true,
			},
		};
		eventList.push(event);
	}
	return eventList;
}
// function that creates a new calendar inside of the users google calendar to store the holidays requested
function createNewCalendar() {
	return gapi.client.calendar.calendars
		.insert({
			resource: {
				summary: "Holidays of the World",
				description:
					"Calendar created by the Holiday Adder app https://jshannon33.github.io/Project-1-Interactive-Front-End-Application/",
			},
		})
		.then(
			function (response) {
				// Handle the results here (response.result has the parsed body).
				console.log("Response", response);
			},
			function (err) {
				console.error("Execute error", err);
			}
		);
}
// sets the ID of the generated calendar
function getCalendarID() {
	return gapi.client.calendar.calendarList.list({}).then(
		function (response) {
			// Handle the results here (response.result has the parsed body).
			idList = response.result.items;
			console.log("shiet");
			for (calendar of idList) {
				if (calendar.summary === "Holidays of the World") {
					calendarID = calendar.id;
				}
			}
		},
		function (err) {
			console.error("Execute error", err);
		}
	);
}
