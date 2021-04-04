/// we want 12 questions, for a 2 minute (120 second quiz)
/// 10 seconds per question before one runs out of time

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
