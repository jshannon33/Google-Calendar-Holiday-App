// let bodyEl = $("body");
// let topEl = $("<div>");
// let headerEl = $("<header>");
// headerEl.attr("class", "is-size-1");
// headerEl.text("Google Calendar and Nager Holidays");
// bodyEl.append(topEl);
// topEl.append(headerEl);
// // above creates the header, makes it large, then appends it to the topEl, which is appended to the body
// let instructionsEl = $("<h2>");
// instructionsEl.text(
// 	"First sign into your google account to display your calendar, then you can add holidays using the nager API"
// );
// instructionsEl.attr("class", "is-size-2");
// headerEl.append(instructionsEl);
// // above creates the instructions, appends them below the header, makes them slightly smaller
// let bottomEl = $("<div>");
// let categoriesEl = $("<div>");
// categoriesEl.text("probably put a sign in button around here?");
// topEl.append(bottomEl);
// bottomEl.append(categoriesEl);
// above simply creates the bottomEl and a div for all of the categories to go into


// code for holiday api work
let body = $("body");
let countryCodeInput = $("#Country-Code");
let formSubmit = $("#Form-Submit");
formSubmit.on("click", function (event) {
	event.preventDefault();
	let countryCode = countryCodeInput.val();
	console.log(countryCode);
	fetch(HOLIDAY_KEY + countryCode)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			let holidays = data;
			holidays.map(function (holidays) {
				let holidayList = document.createElement("p");
				holidayList.innerHTML = holidays.localName;
				body.append(holidayList);
			});
		});
});

// code for googel calendar api work

function loadCalendarApi() {
	gapi.client.load('calendar', 'v3', insertEvent);
}

function testEventFunction() {
	console.log('test event function console log');
	var event = {
		'summary': 'test event',
		'location': '',
		'description': 'test description',
		'start': {
			'dateTime': '2022-06-08T09:00:00-07:00',
			'timeZone': 'America/Los_Angeles'
		},
		'end': {
			'dateTime': '2022-06-09T17:00:00-07:00',
			'timeZone': 'America/Los_Angeles'
		},
		'reminders': {
			'useDefault': true
		}
	};

	return gapi.client.calendar.events.insert({
		'calendarId': 'primary',
		'resource': event
	})
		.then(function (response) {
			// Handle the results here (response.result has the parsed body).
			console.log("Response", response);
		},
			function (err) { console.error("Execute error", err); });
};



$('#authorize_button').on('click', handleAuthClick);
$('#signout_button').on('click', testEventFunction);
$('#test_button').on('click', testEventFunction);