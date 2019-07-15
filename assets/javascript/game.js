var targetScore = "";
var yourScore = 0;
var wins = 0;
var losses = 0;

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;


//generate a random number for targetScore 19-120
function generateTarget() {
  targetScore = Math.floor(Math.random() * (121 - 19) + 19);
  $("#targetScore").text(targetScore);
}

//generate a random number for each crystal 1-12
function generateCrystal() {
  crystal1 = Math.floor(Math.random() * (13 - 1) + 1);
  crystal2 = Math.floor(Math.random() * (13 - 1) + 1);
  crystal3 = Math.floor(Math.random() * (13 - 1) + 1);
  crystal4 = Math.floor(Math.random() * (13 - 1) + 1);

  console.log("crystal1 = " + crystal1);
  console.log("crystal2 = " + crystal2);
  console.log("crystal3 = " + crystal3);
  console.log("crystal4 = " + crystal4);
}

//reset the game
function reset() {
  yourScore = 0;
  $("#yourScore").html(yourScore);
  generateTarget();
  generateCrystal();
}

//check win or loss
function checkResult() {

  //if your score = target score
  if (yourScore == parseInt(targetScore)) {
    wins = 1 + wins;
    $("#wins").text(wins);
    console.log("Wins: " + wins);
    $("#message").html("Congrats! You got it right!");
    reset();
  }
  //if your score exceeds target score
  if (yourScore > parseInt(targetScore)) {
    losses++;
    $("#losses").text(losses);
    console.log("Losses: " + losses);
    $("#message").html("You lost!");
    reset();
  }
}

//when the page is loaded,
$(document).ready(function () {

  generateTarget();
  generateCrystal();

  //display how to play instruction
  $("#instruction-button").click(function () {
    console.log("clicked!");
    $("#instruction").modal("show");
  });

  //event
  $("#button-1").on("click", function () {
    yourScore += crystal1;
    $("#yourScore").text(yourScore);
    $("#message").html("Keep collecting!");
    checkResult();
  });
  $("#button-2").click(function () {
    yourScore += crystal2;
    $("#yourScore").text(yourScore);
    $("#message").html("Keep collecting!");
    checkResult();
  });
  $("#button-3").click(function () {
    yourScore += crystal3;
    $("#yourScore").text(yourScore);
    $("#message").html("Keep collecting!");
    checkResult();
  });
  $("#button-4").click(function () {
    yourScore += crystal4;
    $("#yourScore").text(yourScore);
    $("#message").html("Keep collecting!");
    checkResult();
  });
});