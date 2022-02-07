var currentGameMode = "waiting for user name";
var numUserWins = 0;
var numUserLoses = 0;
var numUserDraws = 0;
var userName = "";
var noOfGames = 0;
var randomEmoji = String.fromCodePoint(0x1f984);
var emoji = "";

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    userName = input;

    myOutputValue = `Hello ${userName}! <br> Please enter <b>normal</b> for normal mode or <b>reverse</b> for reverse mode ${randomEmoji}`;

    currentGameMode = "waiting for game mode";
  } else if (currentGameMode == "waiting for game mode") {
    myOutputValue = `Hello ${userName}! <br> Now you are playing the ${input} mode ${randomEmoji} <br> Please enter scissors, paper or stone! `;
    currentGameMode = input;
  } else if (currentGameMode == "normal") {
    myOutputValue = playSPS(userName, input);
  } else if (currentGameMode == "reverse") {
    myOutputValue = playReverseSPS(userName, input);
  }
  return myOutputValue;
};

var playSPS = function (userName, input) {
  if (input != "scissors" || input != "stone" || input != "paper") {
    myOutputValue =
      "Valid options are scissors, paper, stone only. Please try again";
  }

  var computerGuessNum = computerNum();
  var computerGuess = numConverter(computerGuessNum);
  var computerGuessEmoji = convertEmoji(computerGuess);

  console.log(computerGuess);

  if (input == computerGuess) {
    numUserDraws = numUserDraws + 1;
    noOfGames = noOfGames + 1;

    var userEmoji = convertEmoji(input);

    myOutputValue = `The computer chose ${computerGuess} ${computerGuessEmoji}<br> You chose ${input} ${userEmoji} <br> It is a draw! <br><br> So far, ${userName}... <br> Your scoreboard: <br> Current wins ${numUserWins} <br> Current loses ${numUserLoses} <br> Current draws ${numUserDraws} <br> Your win rate ${(
      (numUserWins / noOfGames) *
      100
    ).toFixed(2)}%`;
  }

  if (
    (input == "scissors" && computerGuess == "stone") ||
    (input == "stone" && computerGuess == "paper") ||
    (input == "paper" && computerGuess == "scissors")
  ) {
    numUserLoses = numUserLoses + 1;
    noOfGames = noOfGames + 1;

    var userEmoji = convertEmoji(input);

    myOutputValue = `The computer chose ${computerGuess} ${computerGuessEmoji} <br> You chose ${input} ${userEmoji} <br> You lost! <br><br> So far, ${userName} ... <br> Your scoreboard: <br> Current wins ${numUserWins} <br> Current loses ${numUserLoses} <br> Current draws ${numUserDraws} <br> Your win rate ${(
      (numUserWins / noOfGames) *
      100
    ).toFixed(2)}%`;
  }
  if (
    (input == "scissors" && computerGuess == "paper") ||
    (input == "stone" && computerGuess == "scissors") ||
    (input == "paper" && computerGuess == "stone")
  ) {
    numUserWins = numUserWins + 1;
    noOfGames = noOfGames + 1;
    var userEmoji = convertEmoji(input);
    myOutputValue = `The computer chose ${computerGuess} ${computerGuessEmoji}<br> You chose ${input} ${userEmoji}<br> You won! <br><br> So far, ${userName} ... <br> Your scoreboard: <br> Current wins ${numUserWins} <br> Current loses ${numUserLoses} <br> Current draws ${numUserDraws} <br> Your win rate ${(
      (numUserWins / noOfGames) *
      100
    ).toFixed(2)}%`;
  }

  return myOutputValue;
};

var playReverseSPS = function (userName, input) {
  if (input != "scissors" || input != "stone" || input != "paper") {
    myOutputValue =
      "Valid options are scissors, paper, stone only. Please try again";
  }

  var computerGuessNum = computerNum();
  var computerGuess = numConverter(computerGuessNum);
  var computerGuessEmoji = convertEmoji(computerGuess);

  console.log(computerGuess);

  if (input == computerGuess) {
    numUserDraws = numUserDraws + 1;
    noOfGames = noOfGames + 1;

    var userEmoji = convertEmoji(input);

    myOutputValue = `The computer chose ${computerGuess} ${computerGuessEmoji}<br> You chose ${input} ${userEmoji} <br> It is a draw! <br><br> So far, ${userName}... <br> Your scoreboard: <br> Current wins ${numUserWins} <br> Current loses ${numUserLoses} <br> Current draws ${numUserDraws} <br> Your win rate ${(
      (numUserWins / noOfGames) *
      100
    ).toFixed(2)}%`;
  }

  if (
    (input == "scissors" && computerGuess == "stone") ||
    (input == "stone" && computerGuess == "paper") ||
    (input == "paper" && computerGuess == "scissors")
  ) {
    numUserWins = numUserWins + 1;
    noOfGames = noOfGames + 1;

    var userEmoji = convertEmoji(input);

    myOutputValue = `The computer chose ${computerGuess} ${computerGuessEmoji} <br> You chose ${input} ${userEmoji} <br> You Won! <br><br> So far, ${userName} ... <br> Your scoreboard: <br> Current wins ${numUserWins} <br> Current loses ${numUserLoses} <br> Current draws ${numUserDraws} <br> Your win rate ${(
      (numUserWins / noOfGames) *
      100
    ).toFixed(2)}%`;
  }
  if (
    (input == "scissors" && computerGuess == "paper") ||
    (input == "stone" && computerGuess == "scissors") ||
    (input == "paper" && computerGuess == "stone")
  ) {
    numUserLoses = numUserLoses + 1;
    noOfGames = noOfGames + 1;
    var userEmoji = convertEmoji(input);
    myOutputValue = `The computer chose ${computerGuess} ${computerGuessEmoji}<br> You chose ${input} ${userEmoji}<br> You Lost! <br><br> So far, ${userName} ... <br> Your scoreboard: <br> Current wins ${numUserWins} <br> Current loses ${numUserLoses} <br> Current draws ${numUserDraws} <br> Your win rate ${(
      (numUserWins / noOfGames) *
      100
    ).toFixed(2)}%`;
  }

  return myOutputValue;
};

var computerNum = function () {
  var randomNum = Math.random() * 3;
  var randomInteger = Math.floor(randomNum);

  return randomInteger;
};

var numConverter = function (num) {
  var output = "no value";
  if (num == 0) {
    output = "scissors";
  }
  if (num == 1) {
    output = "stone";
  }
  if (num == 2) {
    output = "paper";
  }

  return output;
};

var convertEmoji = function (choice) {
  var emoji = "";
  if (choice == "stone") {
    emoji = String.fromCodePoint(0x1faa8);
  }

  if (choice == "scissors") {
    emoji = String.fromCodePoint(0x2702);
  }

  if (choice == "paper") {
    emoji = String.fromCodePoint(0x1f4c3);
  }

  return emoji;
};
