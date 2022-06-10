// creates list of holidays given a country code
function getHolidays(event) {
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
}


// let body = $("body");
let container1 = $("<div>");
body.append(container1);
let container2 = $("<div>");
body.append(container2);
let countryButton = $(".country-button");

fetch("https://date.nager.at/api/v3/AvailableCountries")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		let countries = data;
		countries.map(function (countries) {
			let countryList = $("<button>");

			countryList.text(`${countries.name}`);
			countryList.attr("data-code", `${countries.countryCode}`);
			countryList.attr("class", "country-button");
			container1.append(countryList);
		});
	});

// function to make button on click pop up the information on holidays for that country
// when button is clicked
container1.on("click", ".country-button", function () {
	var countryCode = $(this).data("code");
	console.log(countryCode);
	fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			var holidays = data;
			holidays.map(function (holidays) {
				let holidayList = $("<p>");

				holidayList.text(`${holidays.localName}`);
				container2.append(holidayList);

				var event = {
					summary: `${holidays.localName}`,
					location: `${holidays.countryCode}`,

					start: {
						date: `${holidays.date}`,
						timeZone: "America/Los_Angeles",
					},
					end: {
						date: `${holidays.date}`,
						timeZone: "America/Los_Angeles",
					},
				};
				console.log(event);
			});
			// on click take the data above and enter it to gcal
		});
});
