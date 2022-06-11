// code for googel calendar api work

function loadCalendarApi() {
    console.log('loadcalendarapi function is called');
    gapi.client.load('calendar', 'v3', insertEvent);
}

// accepts a parameter of an array of events to be added to the google calendar, in the google calendar event resource format. then loops through the array and posts each event to the calendar.
function addCountryHolidays() {
    console.log('adding country holiday');
    let x = parseHolidays();
    if (x !== null) {
        console.log('adding holidays...')
        // for each holiday in x
        for (holidayEvent of x) {
            return gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': holidayEvent
            })
                .then(function (response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                },
                    function (err) { console.error("Execute error", err); });
        }
        console.log('all done!');
    } else {
        console.log('nothing to add!');
    }
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
}

function test() {
    let holidayEvent = parseHolidays()[0];
    console.log(holidayEvent);
    alert();
    return gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': holidayEvent
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}

var pushEvents = addCountryHolidays;
var testEvents = test;

$('#add_button').on('click', pushEvents);