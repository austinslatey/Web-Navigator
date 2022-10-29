const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();

// ------------------------------
// Initialization
// ------------------------------

// ------------------------------
// Helper Functions
// ------------------------------

/*
 * The following strings are used to prompt the user
 */

const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------

const backPages = new Stack();
const nextPages = new Stack();
var currentPage = "Start Page";

const showCurrentPage = (action) => {
  console.log(`${action}`);
  console.log(`${currentPage} is the current page`);
  console.log(`Here are the back pages: ${backPages.peek()}`);
  console.log(`Here are the next pages: ${nextPages.peek()}`);
};

const newPage = (page) => {
  //Push currentPage
  backPages.push(currentPage);
  currentPage = page;

  // clear nextPages stack
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("NEW: ");
};

const backPage = () => {
    currentPage.push(nextPages);
    backPages.pop(backPages);
    console.log(`This is the new current page ${currentPage}`);
}

const nextPage = () => {
  
}

// ------------------------------
// User Interface Part 2
// ------------------------------
