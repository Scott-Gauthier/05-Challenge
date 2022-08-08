var dateEl = $('#currentDay');

var formattedDate = moment(Date()).format("dddd, MMMM Do");

dateEl.text(formattedDate);

console.log(dateEl);
console.log(formattedDate);

dateEl.text(formattedDate);