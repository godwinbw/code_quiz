/// we want 12 questions, for a 2 minute (120 second quiz)
/// 10 seconds per question before one runs out of time
/// questions can have a max of 4 multiple choice answers

const questions = [
  // question #1
  {
    question: "Which HTLM element is used for JavaScript?",
    answers: [
      { text: "javascript", correct: false },
      { text: "script", correct: true },
      { text: "js", correct: false },
      { text: "jQuery", correct: false },
    ],
  },
  // question #2
  {
    question: "Where is the correct place to insert JavaScript in HTML?",
    answers: [
      { text: "The Head Section", correct: false },
      { text: "The Body Section", correct: false },
      { text: "In an External File", correct: false },
      { text: "All of the Above", correct: true },
    ],
  },
  // question #3
  {
    question: "The external JavaScript file must contain the script tag.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  // question #4
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'msg("Hello World");', correct: false },
      { text: 'prompt("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false },
      { text: 'alert("Hello World");', correct: true },
    ],
  },
  // question #5
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "function = myFunction()", correct: false },
      { text: "make.function.myFunction()", correct: false },
      { text: "function:myFunction()", correct: false },
    ],
    // question #6
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [
      { text: "call myFunction()", correct: false },
      { text: "read myFunction()", correct: false },
      { text: "myFunction()", correct: true },
      { text: "run.myFunction()", correct: false },
    ],
  },
  // question #7
  {
    question: "How do you write an IF statement in JavaScript?",
    answers: [
      { text: "if (i === 5)", correct: true },
      { text: "if i = 5 then", correct: false },
      { text: "if i === 5 then", correct: false },
      { text: "if (i = 5)", correct: false },
    ],
  },
  // question #8
  {
    question: "!== means what in javascript?",
    answers: [
      { text: "Or", correct: false },
      { text: "And", correct: false },
      { text: "Plus and Equal To", correct: false },
      { text: "Not Equal To", correct: true },
    ],
  },
  // question #9
  {
    question: "What Characters Contains an Array?",
    answers: [
      { text: "< >", correct: false },
      { text: "{ }", correct: false },
      { text: "[ ]", correct: true },
      { text: "# #", correct: false },
    ],
  },
  // question #10
  {
    title: "Arrays in JavaScript can be used to store ______.",
    choices: ["strings", "numbers", "objects", "All of the Above"],
    answer: "All of the Above",
  },
  // question #11
  {
    question:
      "Which of the following is NOT a method to call an element with class 'example'?",
    answers: [
      { text: "document.getElementsByClassName( 'example');", correct: false },
      { text: "document.body.example;", correct: true },
      { text: "document.querySelector( '.example')", correct: false },
      { text: "document.querySelectorAll( '.example')[0]", correct: false },
    ],
  },
  // question #12
  {
    question: "How does a FOR loop start",
    answers: [
      { text: "for (i = 0; i <= 5)", correct: false },
      { text: "for (i = 0; i <= 5; i++)", correct: true },
      { text: "for (i = 0; i++)", correct: false },
      { text: "for i = 1 to 5", correct: false },
    ],
  },
];

var gameState = {
  // this controls which HTML sections will be visible to the user
  display: {
    displayQuizHeaderEl: true,
    displayQuizReadyEl: true,
    displayQuizInProgressEl: true,
    displayQuizDoneEl: true,
    displayHighScoreDetailEl: true,
  },

  pageElements: {
    quizHeaderEl: document.getElementById("quiz-header-id"),
    quizReadyEl: document.getElementById("quiz-ready-id"),
    quizInProgressEl: document.getElementById("quiz-in-progress-id"),
    quizDoneEl: document.getElementById("quiz-done-id"),
    highScoreDetailEl: document.getElementById("high-score-detail-id"),
  },

  // will reset the game state to a READY TO PLAY state
  reset: function () {
    console.log("reset START...");

    // reset which sections are shown
    this.display.displayQuizHeaderEl = true;
    this.display.displayQuizReadyEl = true;
    this.display.displayQuizInProgressEl = false;
    this.display.displayQuizDoneEl = true;
    this.display.displayHighScoreDetailEl = false;

    // reset timer

    // refresh the display
    gameState.refreshDisplay();

    console.log("...reset END");
  },

  // refreshDisplay will update the HTML based on which sections are visible to the user
  refreshDisplay: function () {
    console.log("refreshDisplay START...");
    // we could have set these as an array, and then looped through them
    // but i set them up as separate if/else statements to make it easier to understand and troubleshoot

    // set display attribute of quiz header section
    if (this.display.displayQuizHeaderEl) {
      console.log("   showing QUIZ HEADER");
      this.pageElements.quizHeaderEl.style.display = "flex"; // restores element to a flex
    } else {
      console.log("   hiding QUIZ HEADER");
      this.pageElements.quizHeaderEl.style.display = "none"; // hide, but lets element keep it's size
    }

    //set display status of quiz ready section
    if (this.display.displayQuizReadyEl) {
      console.log("   showing QUIZ READY");
      this.pageElements.quizReadyEl.style.display = "flex"; // restores element to a flex
    } else {
      console.log("   hiding QUIZ READY");
      this.pageElements.quizReadyEl.style.display = "none"; // hide, but lets element keep it's size
    }

    //set display status of quiz in progress section
    if (this.display.displayQuizInProgressEl) {
      console.log("   showing QUIZ IN PROGRESS");
      this.pageElements.quizInProgressEl.style.display = "flex"; // restores element to a flex
    } else {
      console.log("   hiding QUIZ IN PROGRESS");
      this.pageElements.quizInProgressEl.style.display = "none"; // hide, but lets element keep it's size
    }

    //set display status of quiz done section
    if (this.display.displayQuizDoneEl) {
      console.log("   showing QUIZ DONE");
      this.pageElements.quizDoneEl.style.display = "flex"; // restores element to a flex
    } else {
      console.log("   hiding QUIZ DONE");
      this.pageElements.quizDoneEl.style.display = "none"; // hide, but lets element keep it's size
    }

    //set display status of high score detail section
    if (this.display.displayHighScoreDetailEl) {
      console.log("   showing HIGH SCORE DETAIL");
      this.pageElements.highScoreDetailEl.style.display = "flex"; // restores element to a flex
    } else {
      console.log("   hiding HIGH SCORE DETAIL");
      this.pageElements.highScoreDetailEl.style.display = "none"; // hide, but lets element keep it's size
    }

    console.log("refreshDisplay END...");
  },
};

// when page reloads, reset the gameState
gameState.reset();
