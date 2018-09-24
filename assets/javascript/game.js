//display wins, losses, guesses, # guesses remaining
//create an array that lists all possible word choices
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var randomWordChoices = [
  "bicycle",
  "derailleur",
  "saddle",
  "handlebar",
  "wheel",
  "pedals",
  "brakes",
  "bell",
  "spokes",
  "chain",
  "kickstand"
];
var randomWord;

var underscoreWord = [];

var randomWordArray = [];
//declare and initialize variable to hold number of wins, losses, and guesses; all start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10; //starts at this number upon initial key press (which is 12 counting down)
var letterGuesses = [];

//var underscoreReplace = document.getElementById("underscores");
var winsDisplay = document.getElementById("winNum");
var lossesDisplay = document.getElementById("lossNum");
var incorrectGuessDisplay = document.getElementById("incorrectGuess");
var correctGuessIndex = []; //counts correct letters
var incorrectGuess = [];
var playerGuesses = [];
var letterCounter = 0;
var startGame = document.getElementById("startGame");
var start = "Press any letter to start guessing.";

function playNewGame() {
  //document.getElementById("underscores").innerText = "";
  randomWord =
    randomWordChoices[Math.floor(Math.random() * randomWordChoices.length)];
  console.log(randomWord);
  underscoreWord = [];
  guessesLeft = 10;
  incorrectGuess = [];
  incorrectGuessDisplay.innerText = "";
  letterCounter = 0;
  for (var i = 0; i < randomWord.length; i++) {
    underscoreWord.push("_ ");
    //randomWordArray.push(randomWord.charAt(i));
    //underscoreWord.push("_");
  }
}

if (losses <= 3) {
  console.log(startGame);
  startGame.innerText = start;
  document.getElementById("guessNum").innerText = guessesLeft;
  playNewGame();
} else {
  console.log("No more hangman for you!");
}

//var answerArray = [];
//for (var i = 0; i < randomWord.length; i++) {
//  answerArray[i] = "_";
//}

//var lettersCorrect = randomWord[i];

//for (var i = 0; i < randomWord.length; i++) {
//randomWordChoices[i] = "_";
//}

//underscoreReplace.innerText = underscoreWord;
document.getElementById("underscores").innerText = underscoreWord.join(" ");

//var playerGuess = document.getElementById("playerGuess");
// getAsteriskWord = (chosen) => {
// loop over
//}

//create for loop to determine player has a guess remaining
//determines which letter a player guesses (use event key - onkeypress)

//if (guessesLeft >= 0 && randomWord)

document.onkeyup = function(event) {
  var playerGuess = event.key;
  console.log("Letters guessed: " + playerGuess);
  //if (randomWord.includes(playerGuess)) {
  //  allGuesses.push(playerGuess);
  //document.getElementById("letterGuess").innerText = allGuesses;
  //}
  //conditional for not including correct guesses in the letters guessed display
  //validate playerGuess as a letter
  if (!letters.includes(playerGuess)) {
    alert("Not a valid guess. Please guess a valide letter");
    return;
  } else if (randomWord.indexOf(playerGuess) < 0) {
    incorrectGuess.push(playerGuess);
    incorrectGuessDisplay.innerText = incorrectGuess;
    guessesLeft--;
    console.log(guessesLeft);
    document.getElementById("guessNum").innerText = guessesLeft;
    if (guessesLeft === 0) {
      alert("You Lose!");
      losses++;
      lossesDisplay.innerText = losses;
      playNewGame();
    }
  } else {
    //function to test if letter is in the randomWord

    //var correctGuessIndex = randomWordArray.indexOf(playerGuess);
    //if (correctGuessIndex > -1) {
    //  lettersCorrect.push(correctGuessIndex);
    //correctGuessIndes = randomWordArray.indexOf(playerGuess, correctGuessIndex + 1);
    //}
    //console.log(randomWordArray, playerGuess, lettersCorrect);
    var correctGuess = randomWord.indexOf(playerGuess);
    //var correctGuess = false;
    if (correctGuess > -1) {
      for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === playerGuess) {
          underscoreWord[i] = playerGuess;
          letterCounter++;
          console.log(underscoreWord);
          document.getElementById(
            "underscores"
          ).innerText = underscoreWord.join(" ");
          //log wins
          if (letterCounter >= randomWord.length) {
            var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/sounds/bell.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
            alert("You Win!");
            wins++;
            winsDisplay.innerText = wins;
            document.getElementById("underscores").innerHTML = "";
            playNewGame();
          }
        }
      }
    }
  }
};
