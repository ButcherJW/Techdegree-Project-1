/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/* VARIABLE DECLARATION SECTION */

const quotes = [
  {quote: 'To live is the rarest thing in the world. Most people exist, that is all.', source: 'Oscar Wilde'},
  {quote: 'That\'s why they call it the American Dream, because you have to be asleep to believe it.', source: 'George Carlin'},
  {quote: 'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!', source: 'Billy Connolly'},
  {quote: 'People say nothing is impossible, but I do nothing every day', source: 'A. A. Milne'},
  {quote: 'Light travels faster than sound. This is why some people appear bright until you hear them speak.', source: 'Alan Dundes'},
  {quote: 'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.', source: 'Albert Einstein'},
  {quote: 'Life was like a box of chocolates. You neven know whate you\'re gonna get.', source: 'Tom Hanks', citation: 'Forest Gump', year: '1994'},
  {quote: 'No, I am your father', source: 'Darth Vader', citation: 'Star Wars Episode 5 - The Empire Strikes Back', year: '1980'},
  {quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', source: 'Patrick McKenzie'},
]

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

/* FUNCTION DECLARATION SECTION */

/*** 
  The getRandomQuote function;
  1. Generates a random number.
  2. Obtains a quote from the quotes object using the random number generated in step 1 above.
  3. Returns the quote to the printQuote calling function.
***/

function getRandomQuote () {
  const randomNumber = (Math.floor(Math.random() * quotes.length + 1) - 1);  // 1 is substracted because the first element in the quotes object array has a refence of 0
  const randomQuote = quotes[randomNumber];  
  return randomQuote;
}

/***
  The PrintQuote function;
  1. Invoke the getRandomQuote function to obatain a random quote.
  2. Add the quote and source ojbect properties to the HTML output array.
  3. Check to see if the object contains a citation property and add it to the HTML array if it does.
  4. Check to see if the object contains a year property and add it to the HTML output array if it does.
  5. Output the HTML array to the quote-box section on the main HTML page.
***/
function printQuote(){
  const myQuote = getRandomQuote();  // obtain the random quote
  var HTML = '';

  HTML += `<p class="quote">${myQuote.quote}</p>
          <p class="source">${myQuote.source}</p>`;

  if(typeof(myQuote.citation) !== "undefined") {
    HTML += `<span class="citation">${myQuote.citation}</span>`;
  }
  
  if(typeof(myQuote.year) !== "undefined") {
    HTML += `<span class="year">${myQuote.year}</span>`;
  }

  HTML += `</p>`;

  document.getElementById("quote-box").innerHTML = HTML;  // update the quote-box div on the main HTML page
}


/* MAIN SECTION */

/*** 
  Clicking the "Show another quote" button on the main index page triggers 
  the even listener below which will in turn invoke the 'printQuote' function.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);  // add a click event listener which will invoke the printQuote function to the loadQuote button on that main HTML page
