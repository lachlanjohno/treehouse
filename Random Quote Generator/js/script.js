// This imports the quotes variable from quotes.js
import { quotes } from "./quotes.js";

// This selects all the elements I will need for this project
const loadQuoteBtn = document.querySelector(".another-btn");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-details");

/*
When the "Show  another quote button" is clicked, it will run the
renderQuote function, and the renderBackgroundColor function.
*/

loadQuoteBtn.addEventListener("click", () => {
  renderQuote();
  renderBackgroundColor();
});

function renderQuote() {
  /*
This selects a random number from 0 - 13 which correlates 
with how many indexes there are in the quotes variable.
*/
  let randomNumber = Math.floor(Math.random() * 14);

  /*
Selecting a random index and getting
the quote by accessing the "quote key"
*/
  let quote = quotes[randomNumber].quote;
  let author = quotes[randomNumber].author;

  // Displaying the random quote text and author on the screen
  quoteText.innerText = quote;
  quoteAuthor.innerText = `- ${author}`;
}

function renderBackgroundColor() {
  let r = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);

  let rgb = `rgb(${r}, ${b}, ${g})`;

  document.body.style.backgroundColor = rgb;
}
