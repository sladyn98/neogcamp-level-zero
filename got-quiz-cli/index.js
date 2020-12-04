var readLineSync = require("readline-sync");

var score = 0;
var username = readLineSync.question("Whats your name\n")

console.log("Welcome " + username + " to the Game of Thrones Quiz ? \n")

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
  question: "Who was responsible for the creation of the Night King ?\n",
  answer: "The Children of the Forest" },
  {
  question: "In the TV show, what was Hodor called before he got his tragic door-holding nickname ?\n",
  answer: "Wylis" },
  {
  question: "Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing ?\n",
  answer: "Harry Strickland"
  },
  {
  question: "Who said: I don’t plan on knitting by the fire while men fight for me ?\n",
  answer: "Lyanna Mormont"
  },
];

for(var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yaay, you have completed the quiz. Your Score is: " + score )
