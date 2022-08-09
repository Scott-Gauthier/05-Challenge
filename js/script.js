var formattedDate = moment().format("dddd, MMMM Do");
var formattedhour = moment().format("H");

var dateEl = $('#currentDay');
var timeblockEL = $('.container');
var textID = $('#'<formattedhour);

dateEl.text(formattedDate + " " + formattedhour);

for (let i = 0; i <12; i++) {
    var timeblockItemRowEL = $(`<div class="row"></div>`);
    timeblockEL.append(timeblockItemRowEL);
    timeblockItemRowEL.append(`<div class="col-1 bg-light text-right pt-3">${i} AM </div>`);
    timeblockItemRowEL.append(`<textarea class="col-10 form-control bg-success" id="${i}"></textarea>`);
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 bg-info rounded-right"><i class="fas fa-save"></i></button>`);
    console.log(`Test this row ${i} AM`);
}
for (let i = 0; i <12; i++) {
    var timeblockItemRowEL = $(`<div class="row"></div>`);
    timeblockEL.append(timeblockItemRowEL);
    timeblockItemRowEL.append(`<div class="col-1 bg-light text-right pt-3">${i} PM </div>`);
    timeblockItemRowEL.append(`<textarea class="col-10 form-control bg-success" id="${i+12}"></textarea>`);
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 bg-info rounded-right"><i class="fas fa-save"></i></button>`);
    console.log(`Test this row ${i} AM`);
}


//document.getElementById(<formattedhour).addClass('bg-secondary')

