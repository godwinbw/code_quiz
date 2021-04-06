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
      { text: "function = var myFunction()", correct: false },
      { text: "var function = myFunction()", correct: true },
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
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [
      { text: "strings", correct: false },
      { text: "numbers", correct: false },
      { text: "objects", correct: false },
      { text: "All of the Above", correct: true },
    ],
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

// gameState variable controls the progress of the game

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
    timeRemainingEl: document.getElementById("time-remaining"),
    viewHighScoreEl: document.getElementById("view-high-score-link"),
    gameScoreEl: document.getElementById("final-score"),
    quizQuestionEl: document.getElementById("quiz-question"),
    quizAnswersEl: [
      document.getElementById("answer-btn-0"),
      document.getElementById("answer-btn-1"),
      document.getElementById("answer-btn-2"),
      document.getElementById("answer-btn-3"),
    ],
    questionResultEl: document.getElementById("question-result"),
    highScoreInitialsEl: document.getElementById("high-score-initials"),
    highScoreListEl: document.getElementById("high-score-list"),
  },

  timeRemaining: 0, // time remaining in seconds
  gameInProgress: false, // true = game in progress, false = no game in progress
  gameTimerId: null, // the ID of the game timer
  questionIndex: 0, // index of the current question

  // will reset the game state to a READY TO PLAY state
  reset: function () {
    console.log("reset START...");

    // reset which sections are shown
    this.display.displayQuizHeaderEl = true;
    this.display.displayQuizReadyEl = true;
    this.display.displayQuizInProgressEl = false;
    this.display.displayQuizDoneEl = false;
    this.display.displayHighScoreDetailEl = false;

    // reset timer
    this.timeRemaining = 0;

    //reset the game in progress
    this.gameInProgress = false;

    //reset the current question
    this.questionIndex = 0;

    //load all high scores
    this.loadAllHighScores();

    // refresh the display
    this.refreshDisplay();

    // update the timer display
    this.updateTimerDisplay();

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

  // updates the timer
  updateTimerDisplay: function () {
    this.pageElements.timeRemainingEl.innerHTML = this.timeRemaining;
  },

  // set final score
  setFinalScore: function () {
    console.log("setting final score");
    this.pageElements.gameScoreEl.innerHTML =
      "Your final score is " + this.timeRemaining;
  },

  // start the game
  start: function () {
    console.log("GAME STARTED!");

    //set timer for 120 seconds
    this.timeRemaining = 120;
    this.updateTimerDisplay();

    //set game in progress
    this.gameInProgress = true;

    //update the first question
    this.updateQuestionAndAnswers();

    //hide quiz ready, and show quiz in progress
    this.display.displayQuizReadyEl = false;
    this.display.displayQuizInProgressEl = true;

    //refresh the display
    this.refreshDisplay();

    //start the timer
    console.log("...starting the timer");
    this.gameTimerId = window.setInterval(timerStep, 1000);
  },

  //view high scores
  viewHighScore: function () {
    console.log("VIEW HIGH SCORE!");
    if (this.gameInProgress) {
      // show an alert that you can't see high scores while a game is in progress
      alert("A game is in progress! Worry about high scores later!");
    } else {
      // game not in progress, ok to show high scores
      this.display.displayQuizHeaderEl = false;
      this.display.displayQuizReadyEl = false;
      this.display.displayQuizInProgressEl = false;
      this.display.displayQuizDoneEl = false;
      this.display.displayHighScoreDetailEl = true;

      this.refreshDisplay();
    }
  },

  // high scores go back
  goBack: function () {
    console.log("GO BACK!");
    gameState.reset();
  },

  // display question
  updateQuestionAndAnswers: function () {
    console.log("...displaying question #" + this.questionIndex);
    //set page elements for this question
    this.pageElements.quizQuestionEl.innerHTML =
      questions[this.questionIndex].question;

    //loop through all the questions, and set them as hidden (not rendered on page)
    for (var i = 0; i < 4; i++) {
      this.pageElements.quizAnswersEl[i].style.display = "none";
    }
    //loop through the elements, and set the ones that have answers and make them visible again
    for (var i = 0; i < questions[this.questionIndex].answers.length; i++) {
      this.pageElements.quizAnswersEl[i].innerHTML =
        questions[this.questionIndex].answers[i].text;
      // we set whether the answer is correct or not to an attribute on this element, which we will retrieve for the button clicked
      // we can immediately know whether the answer is right or not
      this.pageElements.quizAnswersEl[i].setAttribute(
        "correct",
        questions[this.questionIndex].answers[i].correct
      );
      this.pageElements.quizAnswersEl[i].style.display = "flex";
    }

    // hide the wrong indicator
    this.pageElements.questionResultEl.style.display = "none";
  },

  updateAnswerResult: function (elementClicked, answerResult) {
    console.log(
      "updateAnswer: elementClicked -> " + elementClicked.getAttribute("id")
    );

    // do something with wrong indicator, will do this later
    if (answerResult === "true") {
      // we can move to the next question
      console.log("   ...CORRECT! moving to next question");

      // increment the guestion index
      this.questionIndex = ++this.questionIndex;
      if (this.questionIndex >= questions.length) {
        // we are out of questions, stop the timer and go to score
        this.gameOver();
      } else {
        // the quiz can keep going
        this.updateQuestionAndAnswers();
      }
    } else {
      // we have to stay on this question until we get the right answer
      console.log("   ...WRONG ANSWER, staying on this question");

      // hide this element (don't want to answer this question again)
      elementClicked.style.display = "none";

      //show wrong answer indicator
      this.pageElements.questionResultEl.style.display = "flex";

      //decrease the timeRemaining by 10 seconds
      console.log("   ...decreasing timer by 10 seconds");
      this.timeRemaining = this.timeRemaining - 10;
      if (this.timeRemaining < 0) {
        this.timeRemaining = 0;
      }
      this.updateTimerDisplay();
    }
  },

  gameOver: function () {
    console.log("GAME OVER!");
    //stop the timer
    window.clearInterval(gameState.gameTimerId);

    // game is over
    this.gameInProgress = false;

    // go to enter high score stage
    this.display.displayQuizHeaderEl = true;
    this.display.displayQuizReadyEl = false;
    this.display.displayQuizInProgressEl = false;
    this.display.displayQuizDoneEl = true;
    this.display.displayHighScoreDetailEl = false;

    //set the final score
    this.setFinalScore();

    //refresh the display
    this.refreshDisplay();
  },

  //clear high scores
  clearHighScore: function () {
    console.log("CLEAR HIGH SCORE");

    // erase all high scores from local storage
    window.localStorage.clear();

    // reload all high scores
    this.loadAllHighScores();
  },

  saveHighScore: function (initials, score) {
    console.log(
      "saving high score: initials -> " + initials + " score: " + score
    );

    //put this high score in object form, for local storage

    var highScoreText = initials + " - " + score;
    var highScoreObject = {
      highScoreLabel: highScoreText,
      highScoreValue: score,
    };

    // read all high scores from local storage
    var retrievedScores = JSON.parse(window.localStorage.getItem("highScores"));

    // if no high scores exist in local storage, we need to make an empty array
    if (!retrievedScores) {
      retrievedScores = [];
    }

    // add this high score to the array
    retrievedScores.push(highScoreObject);

    // erase all high scores from local storage
    window.localStorage.clear();

    // now save all the high scores back to local storage
    window.localStorage.setItem("highScores", JSON.stringify(retrievedScores));

    // load all high score
    this.loadAllHighScores();
  },

  loadAllHighScores: function () {
    console.log("loading high score");

    // remove all existing high score elements
    while (this.pageElements.highScoreListEl.firstChild) {
      this.pageElements.highScoreListEl.removeChild(
        this.pageElements.highScoreListEl.firstChild
      );
    }

    // read high scores from local storage
    var retrievedScores = JSON.parse(window.localStorage.getItem("highScores"));

    // if we have any high scores, need to sort them with highest on top
    // then add them to the high score list element

    if (retrievedScores) {
      retrievedScores.sort(function (a, b) {
        return b.highScoreValue - a.highScoreValue;
      });

      // rebuild all the elements
      for (i = 0; i < retrievedScores.length; i++) {
        // add an li to high score list element for each high score
        var li = document.createElement("li");
        li.innerHTML = i + 1 + ". " + retrievedScores[i].highScoreLabel;
        this.pageElements.highScoreListEl.appendChild(li);
      }
    }
  },

  highScoreSubmit: function () {
    console.log("HIGH SCORE SUBMIT!");
    // if there is no initials entered in the high score input, then alert and do nothing
    var submittedInitials = this.pageElements.highScoreInitialsEl.value;
    if (submittedInitials === "" || submittedInitials === null) {
      alert("Please enter your initials and try again!");
    } else {
      //// we want to submit these as a high score
      console.log("submitting intials -> " + submittedInitials);

      // now save these initials
      this.saveHighScore(submittedInitials, this.timeRemaining);

      // go to high score screen
      this.viewHighScore();
    }
  },
};

// timer function (count down 1 second at a time)
// game timer
var timerStep = function () {
  console.log("...timer Tick, time remaining = " + gameState.timeRemaining);

  if (gameState.timeRemaining > 0) {
    // decrement the time remaining
    gameState.timeRemaining = --gameState.timeRemaining;
    // update the timer dispay
    gameState.updateTimerDisplay();
  } else {
    //game over
    gameState.gameOver();
  }
};

// assign button click to START QUIZ button
document
  .getElementById("start-quiz-btn")
  .addEventListener("click", function () {
    gameState.start();
  });

// assign button click for QUESTION ANSWERS
for (i = 0; i < 4; i++) {
  //there are four buttons
  this.gameState.pageElements.quizAnswersEl[i].addEventListener(
    "click",
    function () {
      // look at attribute correct on the element that was clicked
      //console.log(this);

      // pass this on to gamestate
      gameState.updateAnswerResult(this, this.getAttribute("correct"));
    }
  );
}

// assign click to VIEW HIGH SCORE
document
  .getElementById("view-high-scores-link")
  .addEventListener("click", function () {
    gameState.viewHighScore();
  });

// assign button click to SUBMIT high score
document
  .getElementById("high-score-submit")
  .addEventListener("click", function () {
    gameState.highScoreSubmit();
  });

// assign button click to GO BACK button
document.getElementById("go-back").addEventListener("click", function () {
  gameState.goBack();
});

// assign button click to CLEAR HIGH SCORE button
document
  .getElementById("clear-high-scores")
  .addEventListener("click", function () {
    gameState.clearHighScore();
  });

// when page reloads, reset the gameState
gameState.reset();
