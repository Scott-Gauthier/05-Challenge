var dateEl = $('#currentDay');
var timeblockEL = $('#timeblock');

var formattedDate = moment().format("dddd, MMMM Do");

dateEl.text(formattedDate);

for (let i = 0; i <12; i++) {
    var timeblockItemEL = $(`<li>${i} AM </li>`)
    timeblockEL.append(timeblockItemEL)
    console.log(`Test this row ${i} AM`);
}
for (let i = 0; i <12; i++) {
    var timeblockItemEL = $(`<li>${i} PM </li>`)
    timeblockEL.append(timeblockItemEL)
    console.log(`Test this row ${i} PM`);
}