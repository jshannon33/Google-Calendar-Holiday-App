let bodyEl = $("body");
let topEl = $("<div>");
let headerEl = $("<header>");
headerEl.attr("class", "is-size-1");
headerEl.text("Google Calendar and Nager Holidays");
bodyEl.append(topEl);
topEl.append(headerEl);
// above creates the header, makes it large, then appends it to the topEl, which is appended to the body
let instructionsEl = $("<h2>");
instructionsEl.text(
	"First sign into your google account to display your calendar, then you can add holidays using the nager API"
);
instructionsEl.attr("class", "is-size-2");
headerEl.append(instructionsEl);
// above creates the instructions, appends them below the header, makes them slightly smaller
let bottomEl = $("<div>");
let categoriesEl = $("<div>");
categoriesEl.text("probably put a sign in button around here?");
topEl.append(bottomEl);
bottomEl.append(categoriesEl);
// above simply creates the bottomEl and a div for all of the categories to go into
