/* contains all original functions that directly use and interact with the Google Calendar API. */

// accepts an object formatted for Google Calendar event creation, pushes to user's calendar
function addHoliday(holidayEvent) {
    return gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': holidayEvent
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            // console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}

	if (activeCountry.hasClass("already-added")) {
		// exits the function if the country has already been added to the users calendar
		alert("You've already added this country's holidays!");
		modalMessage = "You've already added this country's holidays!";
	} else {
		console.log("adding country holiday");
		let x = parseHolidays();
		if (x !== null) {
			// console.log('adding holidays...')
			// for each holiday in x
			for (holidayEvent of x) {
				gapi.client.calendar.events
					.insert({
						calendarId: "primary",
						resource: holidayEvent,
					})
					.then(
						function (response) {
							// Handle the results here (response.result has the parsed body).
							// console.log("Response", response);
							console.log("ding");
						},
						function (err) {
							console.error("Execute error", err);
						}
					);
			}
			// console.log('all done!');
			activeCountry.addClass("already-added");
		} else {
			// console.log('nothing to add!');
		}
	}
}

// takes the given list of holidays and returns an array of events formatted for Google Calendar
function parseHolidays() {
	var event;
	eventList = [];
	for (holiday of holidays) {
		event = {
			summary: holiday.name,
			location: holiday.country,
			description: "Locally, this holiday is known as " + holiday.localName,
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
