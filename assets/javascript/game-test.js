//display wins, losses, guesses, # guesses remaining
//create an array that lists all possible word choices
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomWordChoices = [
    "bicycle",
    "derailleur",
    "saddle",
    "handlebar",
    "wheel",
    "pedals",
    "brakes"
  ];
  var randomWord = "";
  var underscoreWord = [];
  
  var randomWordArray = [];
  //var underscoreReplace = document.getElementById("underscores");
  
  var displayStats = function() {
    document.getElementById("winNum").innerHTML = wins;
    document.getElementById("lossNum").innerHTML = losses;
    document.getElementById("incorrectGuess").innerHTML = incorrectGuesses;

  }
  //var winsDisplay = ;
  //var lossesDisplay = ;
  //var incorrectGuessDisplay = ;
  var correctGuessesIndex = []; //counts correct letters
  //var incorrectGuesses = [];
  var startGame = document.getElementById("startGame");
  var start = "Press any letter to start guessing.";
  //var answerArray = [];
  //for (var i = 0; i < randomWord.length; i++) {
  //  answerArray[i] = "_";
  //}
 //reset game
 function newRandomWord() {
    var randomWord =
    randomWordChoices[Math.floor(Math.random() * randomWordChoices.length)];
 }
  
  var correctGuessIndex = randomWordArray.indexOf(playerGuess);
  while (correctGuessIndex > -1) {
      correctGuessesIndex.push(correctGuessIndex);
      correctGuessIndex = randomWordArray.indexOf(playerGuess, correctGuessIndex + 1);
}

console.log(randomWordArray, playerGuess, correctGuessesIndex)
  
for (i = 0; i < correctGuessesIndex.length; i++) {
    underscoreWord[correctGuessesIndex[i]] = playerGuess;
}
console.log(underscoreWord);

  //for (var i = 0; i < randomWord.length; i++) {
    //randomWordArray.push(randomWord.charAt(i));
    //underscoreWord.push("_");
  //}

  //for (var i = 0; i < randomWord.length; i++) {
  //randomWordChoices[i] = "_";
  //}
  
  //underscoreReplace.innerText = underscoreWord;
  
  //initialize variables to hold number of wins, losses, and guesses; all start at 0.
  var wins = 0;
  var losses = 0;
  var guessesLeft = 11; //starts at this number upon initial key press (which is 12 counting down)
  var letterGuesses = [];
  
  //var playerGuess = document.getElementById("playerGuess");
  // getAsteriskWord = (chosen) => {
  // loop over
  //}
  
  //create for loop to determine player has a guess remaining
  //determines which letter a player guesses (use event key - onkeypress)
  
  //if (guessesLeft >= 0 && randomWord)
  if (losses <= 7) {
    console.log(startGame);
    startGame.innerText = start;
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
    if (randomWord.indexOf(playerGuess) < 0) {
      incorrectGuesses.push(playerGuess);
      incorrectGuessDisplay.innerText = incorrectGuess;
    } else {
      //function to test if letter is in the randomWord
      function correctLetter() {
        var correctGuess = false;
        for (var i = 0; i < randomWord.length; i++) {
          if (randomWord[i] === playerGuess) {
            underscoreWord[i] = playerGuess;
            correctGuess = true;
          }
        }
        underscoreWordReplace.innerHTML = underscoreWord.join("");
      }
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
    if (randomWord.indexOf(playerGuess) < 0) {
      //log incorrect letter guess and remove one guess
      console.log("correct guess: " + playerGuess);
    }
    //incorrectGuessDisplay.textContent =  letterGuesses;
    //letterGuesses.push(playerGuess);// ???
    //console.log("Remaining guesses: " +  guessesLeft--);
    //}
  };
  
  //is there a way to not reselect a word already chosen?
  //create if statements to see if letter guess is in the word, else log as a guessed letter or for loops?
  //for (var i = 0; i < word.length; i++){
  
  //}
  //reduce guess count by one
  //count # of guesses max 12 (start with var guess = 0;guess++)
  //display each letter guess or place it in the word
  //create variables to hold references to places in HTML to display to page
  