// function variables 
var pushEvents = addCountryHolidays;


// code for google calendar api work

// dont think we need this code
// function loadCalendarApi() {
//     console.log('loadcalendarapi function is called');
//     gapi.client.load('calendar', 'v3', insertEvent);
// }

// loops through an array of preformatted events to be added to the google calendar, posts each event to the calendar.
function addCountryHolidays() {
    // if (activeCountry.hasClass())

    if (activeCountry.hasClass('already-added')) {
        // exits the function if the country has already been added to the users calendar
        alert('You\'ve already added this country\'s holidays!');
        modalMessage = 'You\'ve already added this country\'s holidays!';
        
    } else {
        // console.log('adding country holiday');
        let x = parseHolidays();
        if (x !== null) {
            // console.log('adding holidays...')
            // for each holiday in x
            for (holidayEvent of x) {
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
            // console.log('all done!');
            activeCountry.addClass('already-added');
        } else {
            // console.log('nothing to add!');
        }
    };
};



// takes the given list of holidays and returns an array of events formatted for Google Calendar
function parseHolidays() {
    var event;
    eventList = [];
    for (holiday of holidays) {
        event = {
            'summary': holiday.name,
            'location': holiday.country,
            'description': 'Locally, this holiday is known as ' + holiday.localName,
            'start': {
                'date': holiday.date,
                'timeZone': 'America/Los_Angeles'
            },
            'end': {
                'date': holiday.date,
                'timeZone': 'America/Los_Angeles'
            },
            'reminders': {
                'useDefault': true
            }
        };
        eventList.push(event);
    }
    return eventList;
};
