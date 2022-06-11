// functions
function init() {
	// fetch holiday api list
	getCountries();
	appPage.hide();

	// animate the loading screen! lol. slowly phase out the 
}

// function to "disable" a button for a country that's already been added, to prevent duplicate events.
function disableCountry() {
	// activeCountry.removeClass('country-button');
	activeCountry.addClass('already-added');
	activeCountry.css('color', 'red');
}

init();
// getCountries(); // temporary, for troubleshooting only.

// Event Handlers

$('#authorize_button').on('click', handleAuthClick);
appPage.on("click", ".country-button", showHolidays);

$('#add_button').on('click', pushEvents); // pushEvents
// appPage.on('click', '.already-added', badClick);


// Get the modal
var modal = $("#myModal");

// Get the button that opens the modal
var btn = $("#myBtn");
var exitModalButton = $('#exitModalButton')
// Get the <span> element that closes the modal
var span = $(".close");

// When the user clicks the button, open the modal 
btn.on('click', function () {
	console.log('display modal');
	modal.css('display', "block");
});

// When the user clicks on <span> (x), close the modal
span.on('click', function () {
	console.log('hide modal');
	modal.css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
exitModalButton.on('click', function (event) {
	modal.css('display', 'none');
});

function showModal() {

};







//  stretch goal: store user's email and "added " list to local storage, so in the future it will stil lbe red and prevent duplicate additions