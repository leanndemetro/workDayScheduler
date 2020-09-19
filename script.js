

var currentHour = (moment().hour());
console.log(currentHour);

//creates a variable that contains the current date information via moment.js
var currentDate = (moment().format("dddd, MMMM Do"));
$("currentDay").text(currentDate);


//appends the currentDate variable to the #currentday ID element in html
document.getElementById("currentDay").append(currentDate);

//add textarea input to local storage

$("#saveBtn9").on("click", function () {
    console.log($("#9").val());
    localStorage.setItem("nineAm", $("#9").val())
});
$("#saveBtn10").on("click", function () {
    localStorage.setItem("tenAm", $("#10").val())
});
$("#saveBtn11").on("click", function () {
    localStorage.setItem("elevenAm", $("#11").val())
});
$("#saveBtn12").on("click", function () {
    localStorage.setItem("twlevePm", $("#12").val())
});
$("#saveBtn1").on("click", function () {
    localStorage.setItem("onePm", $("#1").val())
});
$("#saveBtn2").on("click", function () {
    localStorage.setItem("twoPm", $("#2").val())
});
$("#saveBtn3").on("click", function () {
    localStorage.setItem("threePm", $("#3").val())
});
$("#saveBtn4").on("click", function () {
    localStorage.setItem("fourPm", $("#4").val())
});
$("#saveBtn5").on("click", function () {
    localStorage.setItem("fivePm", $("#5").val())
});

//initializes page
init();

//function that checks if there are values stored in local storage and adds them to page upon initialization 
function init() {
    var textData = localStorage.getItem("nineAm");
    if(textData !== null){
        $("#9").text(textData);
    }

    textData = localStorage.getItem("tenAm");
    if(textData !== null) {
        $("#10").text(textData);
    }
    textData = localStorage.getItem("elevenAm");
    if(textData !== null) {
        $("#11").text(textData);
    }
    textData = localStorage.getItem("twelvePm");
    if(textData !== null) {
        $("#12").text(textData);
    }
    textData = localStorage.getItem("onePm");
    if(textData !== null) {
        $("#1").text(textData);
    }
    textData = localStorage.getItem("twoPm");
    if(textData !== null) {
        $("#2").text(textData);
    }
    textData = localStorage.getItem("ThreePm");
    if(textData !== null) {
        $("#3").text(textData);
    }
    textData = localStorage.getItem("fourPm");
    if(textData !== null) {
        $("#4").text(textData);
    }
    textData = localStorage.getItem("fivePm");
    if(textData !== null) {
        $("#5").text(textData);
    }
}

var currentHour = parseInt(moment().format("H"));

$(".ta").each(function() {

    var timeBlock = parseInt($(this).attr("data-time"));

    if (timeBlock < currentHour) {
        $(this).addClass("past");
    }

    else if (timeBlock == currentHour) {
        $(this).addClass("present");
    }

    else {
        $(this).addClass("future");
    }

});


}












