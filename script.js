const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();

// ------------------------------
// Initialization
// ------------------------------

const backPages = new Stack();
const nextPages = new Stack();
var currentPage = "Start Page";

/*
 * The following strings are used to prompt the user
*/

const showCurrentPage = (action) => {
  console.log(`${action}`);
  console.log(`${currentPage} is the current page`);
  console.log(`Here are the back pages: ${backPages.peek()}`);
  console.log(`Here are the next pages: ${nextPages.peek()}`);
};

// ------------------------------
// Helper Functions
// ------------------------------

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
  backPages.pop();
  showCurrentPage("BACK: ");
};

const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
};



const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------

let finish = false;

let showBack = false;
let showNext = false;

showCurrentPage("DEFAULT: ");
while (finish === false) {
  var instructions = baseInfo;
  if (backPages.peek() !== null) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }
  if (nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}`;
  } else {
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);

// ------------------------------
// User Interface Part 2
// ------------------------------

  const answer = prompt(question);

  const mixedCase = "Hello World";
  const lowerCaseAnswer = mixedCase.toLowerCase();

  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    // we create a new page based on the url
    newPage(answer);
  } else if (showNext === true && lowerCaseAnswer === "n") {
    // we navigate foward a page
    nextPage();
  } else if (showBack == true && lowerCaseAnswer === "b") {
    // we navigate back a page
    backPage();
  } else if (lowerCaseAnswer === "b") {
    // invalid input to a non-available option
    console.log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    // invalid input to a non-available option
    console.log("Cannot go to the next page. Stack is empty");
  } else if (lowerCaseAnswer === q) {
    // we quit the program
    finish = true;
  }
}


