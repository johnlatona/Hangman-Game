
var words = ["tyrian", "winterfell", "joffrey", "westeros", "essos", "braavos", "targaryen", "wildling", "meereen", "cersei", "stark", "daenarys", "dragon", "snow", "highgarden", "baratheon", "martell", "greyjoy", "khaleesi", "drogo", "unsullied", "baelish", "varys"];
var input;
var wins;
var currentWord;
var userInputDisplay = '';
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("current-word");
var guesses;
var guessesText = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");

document.onkeyup = function(event) {
	input = event.key;
}