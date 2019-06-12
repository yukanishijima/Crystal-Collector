var randomScore = "";
var targetScore = "";
var yourScore =0;
var wins = 0;
var losses = 0;

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

$(document).ready(function(){

  //generate a random number for targetScore 19-120
  function generateTarget() {
    randomScore = Math.floor(Math.random()*(121-19)+19);
    $("#targetScore").text(randomScore);
  }
  generateTarget();

  //generate a random number for each crystal 1-12
  function generateCrystal() {
    crystal1 = Math.floor(Math.random()*(13-1)+1);
    crystal2 = Math.floor(Math.random()*(13-1)+1);
    crystal3 = Math.floor(Math.random()*(13-1)+1);
    crystal4 = Math.floor(Math.random()*(13-1)+1);

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
  }
  generateCrystal();

  //event
  $("#button-1").click(function() {
    yourScore += crystal1;
    $("#yourScore").text(yourScore);
    result();
  });
  $("#button-2").click(function() {
    yourScore += crystal2;
    $("#yourScore").text(yourScore);
    result();
    console.log(yourScore);
  });
  $("#button-3").click(function() {
    yourScore += crystal3;
    $("#yourScore").text(yourScore);
    result();
    console.log(yourScore);
  });
  $("#button-4").click(function() {
    yourScore += crystal4;
    $("#yourScore").text(yourScore);
    result();
    console.log(yourScore);
  });

});


function result() {
  
  var targetScore = $("#targetScore").text();

  console.log("target score is " + parseInt(targetScore));
  console.log("your score is " + yourScore);

//if your score = target score
  if (yourScore == parseInt(targetScore)) {
    wins = 1 + wins;
    $("#wins").text(wins);
    console.log("Wins: " + wins);
  }  

//if your score exceeds target score
  if (yourScore > parseInt(targetScore)) {
    losses++;
    $("#losses").text(losses);
    console.log("Losses: " + losses);
  }

}