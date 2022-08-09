var formattedDate = moment().format("dddd, MMMM Do");
var formattedhour = moment().format("H");

var dateEl = $('#currentDay');
var timeblockEL = $('.container');
var textEnteredAM = localStorage.getItem("textEnteredAM") || [];
var textEnteredPM = localStorage.getItem("textEnteredPM") || [];

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
    timeblockItemRowEL.append(`<div class="col-1 hour text-right pt-3">${i} AM </div>`);
    var rowContent = JSON.parse(localStorage.getItem("textEnteredAM")) || " ";
    timeblockItemRowEL.append(`<textarea class="col-10 form-control ${hourstyle}" id="text${i}">` + rowContent[i] || "" + `</textarea>`);
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 saveBtn" id="btn${i}"><i class="fas fa-save"></i></button>`)
    document.querySelector(`#btn${i}`).addEventListener("click", function(event) {
        event.preventDefault();
        textEnteredAM[i] = document.querySelector(`#text${i}`).value;
        localStorage.setItem("textEnteredAM", JSON.stringify(textEnteredAM));
    console.log(textEnteredAM);
    });
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
    timeblockItemRowEL.append(`<div class="col-1 hour text-right pt-3">${i} PM </div>`);
    var rowContent = JSON.parse(localStorage.getItem("textEnteredPM")) || " ";
    timeblockItemRowEL.append(`<textarea class="col-10 form-control ${hourstyle}" id="text${i+12}">` + rowContent[i] || "" + `</textarea>`);
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 saveBtn" id="btn${i+12}"><i class="fas fa-save"></i></button>`)
    document.querySelector(`#btn${i+12}`).addEventListener("click", function(event) {
        event.preventDefault();
        textEnteredPM[i] = document.querySelector(`#text${i+12}`).value;
        localStorage.setItem("textEnteredPM", JSON.stringify(textEnteredPM));
    console.log(textEnteredPM);
    });
}
