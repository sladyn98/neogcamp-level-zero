var readLineSync = require("readline-sync");

var score = 0;
var username = readLineSync.question("Whats your name\n")

console.log("Welcome " + username + " Do you know Sladyn ? \n")

function play(question, answer) {

  var userAnswer = readLineSync.question(question);

  if (userAnswer == answer) {
    console.log("You are right");
    score += 1;
    console.log("Current Score " + score);
  } else {
    console.log("Sorry, Wrong Answer")
    score -= 1;
    console.log("Current Score " + score);

  }

  console.log("----------------")
}


var questions = [{
  question: "Where do I live\n",
  answer: "Mumbai" },
  {
  question: "How old am I\n",
  answer: "21" },
  {
  question: "My favourite superhero ?\n",
  answer: "Batman"
  }
];

for(var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yaay, you have completed the quiz. Your Score is: " + score )
