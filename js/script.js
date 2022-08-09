var formattedDate = moment().format("dddd, MMMM Do");
var formattedhour = moment().format("H");

var dateEl = $('#currentDay');
var timeblockEL = $('.container');

dateEl.text(formattedDate + " ");

for (let i = 0; i <12; i++) {
    var timeblockItemRowEL = $(`<div class="row"></div>`);
    if (i == formattedhour) {
        var hourstyle = "present";
    } else if (i > formattedhour) {
        var hourstyle = "future";
    } else {
        var hourstyle = "past";
    }
    timeblockEL.append(timeblockItemRowEL);
    timeblockItemRowEL.append(`<div class="col-1 hour text-right">${i} AM </div>`);
    timeblockItemRowEL.append(`<textarea class="col-10 form-control ${hourstyle}"></textarea>`);
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 saveBtn"><i class="fas fa-save"></i></button>`);
}
for (let i = 0; i <12; i++) {
    var timeblockItemRowEL = $(`<div class="row"></div>`);
    if (i+12 == formattedhour) {
        var hourstyle = "present";
    } else if (i+12 > formattedhour) {
        var hourstyle = "future";
    } else {
        var hourstyle = "past";
    }
    timeblockEL.append(timeblockItemRowEL);
    timeblockItemRowEL.append(`<div class="col-1 hour text-right">${i} PM </div>`);
    timeblockItemRowEL.append(`<textarea class="col-10 form-control ${hourstyle}"></textarea>`);
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 saveBtn"><i class="fas fa-save"></i></button>`);
    console.log(formattedhour);
    console.log(i+12);
}
