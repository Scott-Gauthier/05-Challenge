var dateEl = $('#currentDay');

var formattedDate = moment().format("dddd, MMMM Do");

dateEl.text(formattedDate);
