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


let homePage = $("#homePage");
let appPage = $("#appPage");
let countryButton = $(".country-button");

// creates buttons for all the countries of the world
fetch("https://date.nager.at/api/v3/AvailableCountries")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		let countries = data;
		countries.map(function (countries) {
			let countryList = $("<button>");

			countryList.text(countries.name);
			countryList.attr("data-code", countries.countryCode);
			countryList.attr("class", "country-button");
			appPage.append(countryList);
		});
	});

// function to make button on click pop up the information on holidays for that country
// when button is clicked
homePage.on("click", ".country-button", function () {
	var countryCode = $(this).data("code");
	// console.log(countryCode);
	fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
		.then((response) => response.json())
		.then((data) => {
			console.log('data');
			console.log(data);
			holiday_list = data;
			var holidays = data;
			appPage.text('');
			holidays.map(function (holidays) {
				let holidayList = $("<p>");

				holidayList.text(holidays.localName);
				appPage.append(holidayList);
			});
		});
});
