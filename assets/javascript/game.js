    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var targetNumber = 0;
    var numGen = function(min, max){
       return Math.floor((Math.random() * max-min +1) + min);
    };


function intialize() {
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    targetNumber = numGen(19,120);
    console.log(targetNumber);
    $("#randomNum").text(targetNumber);
    $("#score").text(userScore);
    $("#blueCrystal").val(numGen(1,12));
    $("#kineticCrystal").val(numGen(1,12));

}
$(document).ready(function(){
    intialize()

    $(".crystals").on("click", function(){
        userScore += ($this).val();
        $("#score").text(userScore);
    })
});


