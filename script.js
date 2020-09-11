$(document).ready(function (){


    function update(){
var currentDayElement = $("#currentDay");
var currentDay = moment();
currentDayElement.text(currentDay.format('MMMM Do YYYY, h:mm:ss a'));
    }

setInterval(update, 1000);





});