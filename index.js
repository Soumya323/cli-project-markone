// Welcome
// Game
// Scores

var readlineSync = require('readline-sync');

var questions= [{question:"What's my name?", answer:"soumya"}, 
               {question:"Do I like pizza? (yes/no)", answer:"yes"},
               {question:"My favourite avenger?", answer:"iron man"},
               {question:"Which new state did I visit recently?", answer:"rajasthan"}]
var score = 0;

function welcome()
{
  var username = readlineSync.question("What is your name?");
  console.log("Hey "+username +"! Welcome to the Game. \"How well do you know me?\"");
}

function game()
{
  for(var i =0; i < questions.length;i++)
  {
    var answer = readlineSync.question(questions[i].question);
    if(answer == questions[i].answer)
    {
      score++;
    console.log("rights");
    }else
    {
      console.log("wrong!");
    }
    console.log("current score: " + score);
  }
}

function showScore()
{
  console.log("Yeyy! you scored: " + score);
}

welcome();
game();
showScore();
