// functions

// function: on google account log in , hide the intro page elements and display page 2 elements. creates country buttons






// Event Handlers

formSubmit.on("click", getHolidays);


$('#authorize_button').on('click', handleAuthClick);
$('#test_button').on('click', testEventFunction);



// button to handle login event, and then change page display to page 2
// on login: hide login button, hide original page (page 1 div?), reveal page 2 div. calls holiday api and creates buttons

// page 2: call holiday api, create button list and display
// function to handle button click, populates left side of page with holiday list with their dates
//   >> displays "add to calendar" button, which takes the country's holiday list and adds events to user's google calendar
//  >> marks the selected button as red and unclickable, so the user cant double add the calendar to their list.

//  stretch goal: store user's email and "added " list to local storage, so in the future it will stil lbe red and prevent duplicate additions