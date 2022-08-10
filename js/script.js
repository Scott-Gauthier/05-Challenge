//variables for time needed
var formattedDate = moment().format("dddd, MMMM Do");
var formattedhour = moment().format("H");
var dateEl = $('#currentDay').text(formattedDate + " ");
var timeblockEL = $('.container');

//array needed to store text entered in textboxes
var textEntered = localStorage.getItem("textEntered") || [];

//create 24 containers using loop
for (let i = 0; i <24; i++) {
    //create row container needed by bootstrap
    var timeblockItemRowEL = $(`<div class="row"></div>`);
    //set conditional css formatting for past, present, future
    if (i == formattedhour) {
        var hourstyle = "present";
    } else if (i > formattedhour) {
        var hourstyle = "future";
    } else {
        var hourstyle = "past";
    };
    //create label on left
    timeblockEL.append(timeblockItemRowEL);
    timeblockItemRowEL.append(`<div class="col-1 hour text-right pt-3">`+moment(i,["HH"]).format("hh A")+`</div>`);
    //create textarea to enter etext
    var rowContent = JSON.parse(localStorage.getItem("textEntered")) || "";
    if (!rowContent[i]) {
        rowContent[i] = ""
    } else {
        rowContent[i] = rowContent[i]
    };
    //create save button area
    timeblockItemRowEL.append(`<textarea class="col-10 form-control ${hourstyle}" id="text${i}">${rowContent[i] || []}</textarea>`);
    //create save button in save area
    timeblockItemRowEL.append(`<button type="button" class="btn btn-primary col-1 saveBtn" id="btn${i}"><i class="fas fa-save"></i></button>`);
    //make save button save and active
    document.querySelector(`#btn${i}`).addEventListener("click", function(event) {
        event.preventDefault();
        textEntered[i] = document.querySelector(`#text${i}`).value;
        localStorage.setItem("textEntered", JSON.stringify(textEntered));
    //console.log(textEntered);
    });
}