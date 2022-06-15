// creates buttons for each country returned from Nager Holiday API
function getCountries() {
	fetch("https://date.nager.at/api/v3/AvailableCountries")
		.then((response) => response.json())
		.then((data) => {
			let countries = data;
			countryList.empty();
			countries.map(function (countries) {
				let countryButton = $("<button>");
				let countryColumn = $("<div>");
				countryColumn.attr("class", "column");
				countryButton.text(countries.name);
				countryButton.attr("data-code", countries.countryCode);
				countryButton.attr("class", "country-button button is-fullwidth");
				countryColumn.append(countryButton);
				countryList.append(countryColumn);
			});
		});
}

// function to display a list of holidays for a given country when their respective button is clicked
function showHolidays() {
	addButton.show();
	activeCountry = $(this);
	var countryCode = $(this).data("code");
	fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
		.then((response) => response.json())
		.then((data) => {
			holidays = data;
			holidayList.text("");
			holidays.map(function (holidays) {
				let holiday = $("<p>");

				holiday.text(holidays.localName);
				holidayList.append(holiday);
			});
		});
}
