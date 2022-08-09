var formattedDate = moment().format("dddd, MMMM Do");
var formattedhour = moment().format("H");

var dateEl = $('#currentDay');
var timeblockEL = $('.container');
var textEntered = localStorage.getItem("textEntered") || [];

dateEl.text(formattedDate + " ");

for (let i = 0; i <24; i++) {
    var timeblockItemRowEL = $(`<div class="row"></div>`);
    if (i == formattedhour) {
        var hourstyle = "present";
    } else if (i > formattedhour) {
        var hourstyle = "future";
    } else {
        var hourstyle = "past";
    }
    timeblockEL.append(timeblockItemRowEL);
    timeblockItemRowEL.append(`<div class="col-1 hour text-right pt-3">`+moment(i,["HH"]).format("hh A")+`</div>`);
    var rowContent = JSON.parse(localStorage.getItem("textEntered")) || " ";
    timeblockItemRowEL.append(`<textarea class="col-10 form-control ${hourstyle}" id="text${i}">` + rowContent[i] || "" + `</textarea>`);
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 saveBtn" id="btn${i}"><i class="fas fa-save"></i></button>`)
    document.querySelector(`#btn${i}`).addEventListener("click", function(event) {
        event.preventDefault();
        textEntered[i] = document.querySelector(`#text${i}`).value;
        localStorage.setItem("textEntered", JSON.stringify(textEntered));
    console.log(moment(i,["HH"]).format("hh A"));
    });
}