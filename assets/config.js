// dom element variables
var body = $("body");
var countryCodeInput = $("#Country-Code");
var formSubmit = $("#Form-Submit");

// data variables
var holiday_list; // unused, to be used when holidays are declared 


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