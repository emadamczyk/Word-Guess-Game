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
  "brakes"
];
var randomWord =
  randomWordChoices[Math.floor(Math.random() * randomWordChoices.length)];
var underscoreWord = [];
console.log(randomWord);
var randomWordArray = [];
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
//var answerArray = [];
//for (var i = 0; i < randomWord.length; i++) {
//  answerArray[i] = "_";
//}

//var lettersCorrect = randomWord[i];

for (var i = 0; i < randomWord.length; i++) {
  underscoreWord.push("_ ");
  //randomWordArray.push(randomWord.charAt(i));
  //underscoreWord.push("_");
}

//for (var i = 0; i < randomWord.length; i++) {
//randomWordChoices[i] = "_";
//}

//underscoreReplace.innerText = underscoreWord;
document.getElementById("underscores").innerText = underscoreWord.join(" ");

//declare and initialize variable to hold number of wins, losses, and guesses; all start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 12; //starts at this number upon initial key press (which is 12 counting down)
var letterGuesses = [];

//var playerGuess = document.getElementById("playerGuess");
// getAsteriskWord = (chosen) => {
// loop over
//}

//create for loop to determine player has a guess remaining
//determines which letter a player guesses (use event key - onkeypress)

//if (guessesLeft >= 0 && randomWord)
if (losses <= 10) {
  console.log(startGame);
  startGame.innerText = start;
  document.getElementById("guessNum").innerText = guessesLeft;
} else {
  console.log("No more hangman for you!");
}
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
    console.log(guessesLeft)
    document.getElementById("guessNum").innerText = guessesLeft;
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
                underscoreWord[i] = playerGuess
                letterCounter++;
                console.log(underscoreWord);
                document.getElementById("underscores").innerText = underscoreWord.join(" ");
                //log wins
                if (letterCounter === randomWord.length) {
                  alert("You win!");
                  wins++;
                  winsDisplay;s
                }

            
        }
        //log losses
        //reset game
        //use functions

        
        //correctGuessIndex.push(correctGuess);
        //correctGuess = randomWord.indexOf(playerGuess, correctGuess + 1);
        //console.log(correctGuessIndex);
          //underscoreWord[correctGuess[i]] = playerGuess;
          //correctGuess = true;
        }
      }
      
          //underscoreWord[i] = playerGuess;
          //randomWordArray.push(correctGuessIndex[i]);
          //console.log(randomWordArray);
      }
      //underscoreWordReplace.innerHTML = underscoreWord.join("");
    
  }

  //letterGuesses.push(playerGuess);
  //randomly choose a new word and/or reset the game
  //console.log(answerArray.join(" "));
  //answerArray.join.innerHTML(" ");
  //for (var j = 0; j < randomWordSelection.length; j++) {
  //  if (randomWordSelection[j] === playerGuess) {
  //    answerArray[j] = playerGuess;
  //  guesses--;
  //} else {
  //if letter not in the word
  //if (randomWord.indexOf(playerGuess) < 0) {
    //log incorrect letter guess and remove one guess
    //console.log("correct guess: " + playerGuess);
  //}
  //incorrectGuessDisplay.textContent =  letterGuesses;
  //letterGuesses.push(playerGuess);// ???
  //console.log("Remaining guesses: " +  guessesLeft--);
  //}


//is there a way to not reselect a word already chosen?
//create if statements to see if letter guess is in the word, else log as a guessed letter or for loops?
//for (var i = 0; i < word.length; i++){

//}
//reduce guess count by one
//count # of guesses max 12 (start with var guess = 0;guess++)
//display each letter guess or place it in the word
//create variables to hold references to places in HTML to display to page
