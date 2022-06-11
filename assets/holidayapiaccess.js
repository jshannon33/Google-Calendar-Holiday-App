
// creates buttons for all the countries of the world
function getCountries() {
fetch("https://date.nager.at/api/v3/AvailableCountries")
	.then((response) => response.json())
	.then((data) => {
		// console.log(data);
		let countries = data;
		countries.map(function (countries) {
			let countryButton = $("<button>");

			countryButton.text(countries.name);
			countryButton.attr("data-code", countries.countryCode);
			countryButton.attr("class", "country-button");
			countryList.append(countryButton);
		});
	});
};

// function to make button on click pop up the information on holidays for that country
// when button is clicked

function showHolidays() {
	activeCountry = $(this);
	var countryCode = $(this).data("code");
	// console.log(countryCode);
	fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
		.then((response) => response.json())
		.then((data) => {
			// console.log('country button clicked');
			// console.log(data);
			holidays = data;
			// var holidays = data;
			holidayList.text('');
			holidays.map(function (holidays) {
				let countryButton = $("<p>");

				countryButton.text(holidays.localName);
				holidayList.append(countryButton);
			});
		});
}