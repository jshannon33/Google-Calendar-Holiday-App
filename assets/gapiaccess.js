// code for googel calendar api work

function loadCalendarApi() {
    console.log('loadcalendarapi function is called');
    gapi.client.load('calendar', 'v3', insertEvent);
}

// accepts a parameter of an array of events to be added to the google calendar, in the google calendar event resource format. then loops through the array and posts each event to the calendar.
function addCountryHolidays(x = null) {
    console.log('adding country holiday');
    if (x !== null) {
        console.log('adding holidays...')
        // for each holiday in x
        for (holiday_event of x) {
            return gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': holiday_event
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

    /* events should be in this format: 
    var event = {
        'summary': 'EVENT TITLE',
        'location': 'COUNTRY',
        'description': 'SUBTITLE / DESCRIPTION',
        'start': {
            'dateTime': '2022-06-08T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': '2022-06-09T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'reminders': {
            'useDefault': true
        }
    }; */
};



function testEventFunction() {
    console.log('test event function console log');
    var event = {
        'summary': 'test event',
        'location': '',
        'description': 'test description',
        'start': {
            'dateTime': '2022-06-08T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': '2022-06-09T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'reminders': {
            'useDefault': true
        }
    };

    return gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
};




var eventList = [];

function parseHolidays(apidata) {
    var event;
    for (holiday of apidata) {
        event = {
            'summary': holiday.name,
            'location': holiday.country,
            'description': '',
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
        eventList.append(event);
    }
    return eventList;
}