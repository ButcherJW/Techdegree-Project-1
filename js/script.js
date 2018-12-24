/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/




/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// Remember to delete the comments that came with this file, and replace them with your own code comments.

var quotes = ["'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.'"];
var source = [" - Patrick McKenzie"];
var citation = [];
var year = [];

function getRandomQuote(array){

}

function printQuote(){
  var quote = getRandomQuote();
  var message = "<p class = \"quote\"> ";
  message += quote;
  message += "</p>";
  message += "<p class = \"source\"> ";
  message += source;
  message += "<span class =\"citation\"> ";
  message += citation;
  message += "/span";
  message += "<span class = \"year\"> ";
  message += year;
  message += "</span>";
  message += "/p>";

  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}