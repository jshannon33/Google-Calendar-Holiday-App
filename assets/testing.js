// The basic elements of an API call are as follows:
// https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value
// where:

// https://zenquotes.io/api = ZenQuotes API URL. Required.
// [mode] = Retrieval type [quotes, today, author, random]. Required.
// [key] = API key for use with premium subscriptions, be sure to obfuscate or hide this in your source code to prevent hijacking. Optional.
// [options] = Additional options. Optional.

// Alternative GET request formats are also available for advanced users:
// Example: https://zenquotes.io?api=[mode]&key=[your_key]&option1=value&option2=value

// const key = "mFIaFdiyr1io8MpoF3iFJ4zEZLnXVS0m";
var giphyUrl = "api.giphy.com/v1/gifs/trending/";

var fetchButton = $('#testbutton');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://zenquotes.io/api/';
  let currentCall = requestUrl.concat('quotes/');
  // let key = prompt("Giphy API key?");

  fetch(requestUrl + "today")
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}
getApi();
fetchButton.on('click', getApi);
