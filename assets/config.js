/* ----- dom element variables ----- */
var body = $("body");
var homePage = $("#homePage");
var appPage = $("#appPage");
var countryButton = $(".country-button");
var holidayList = $('#holidayList');
var countryList = $('#countryList');
var addButton = $('#add_button');
var signoutButton = $('#signout_button');

// Get the modal
var modal = $("#modal");
var btn = $("#myBtn"); // delete
var exitModalButton = $('.exitModalButton')
var modalContent = $('#modalContent');




// data variables
var holidays; // unused, to be used when holidays are declared 
var eventList = [];
var calendarCreated = false;
var idList;
var calendarID = "calendarID no assignment";


// ----------- API access variables ----------- //

// Nager Holiday API url
const HOLIDAY_KEY = 'https://date.nager.at/api/v3/NextPublicHolidays/';

// Google API access info
const CLIENT_ID = '28605827298-tl4218sn1lc3eie3e9bm6ab7vgrb02gb.apps.googleusercontent.com';
const API_KEY = 'AIzaSyC1Csyczu-tD3j17uP1qWT7BFEFW-Kzhwc';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar';






var activeCountry; // stores the dom element representing the button of the currently selected country.

// the content of the modal message to be displayed
var modalMessage = 'OOGA BOOGA!!'; // needs to be changed or something lol


