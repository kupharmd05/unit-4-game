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
    
    $("#randomNum").text(targetNumber);
    $("#score").text(userScore);
    $("#blueCrystal").val(numGen(1,12));
    $("#kineticCrystal").val(numGen(1,12));
    $("#greenCrystal").val(numGen(1,12));
    $("#redCrystal").val(numGen(1,12));

    console.log(targetNumber);
    console.log(blueCrystal.value);
    console.log(kineticCrystal.value);
    console.log(greenCrystal.value);
    console.log(redCrystal.value);

}

function reset() {
    userScore = 0;
    targetNumber = numGen(19,120);
    $("#randomNum").text(targetNumber);
    $("#score").text(userScore);
    $("#blueCrystal").val(numGen(1,12));
    $("#kineticCrystal").val(numGen(1,12));
    $("#greenCrystal").val(numGen(1,12));
    $("#redCrystal").val(numGen(1,12));

    console.log(targetNumber);
    console.log(blueCrystal.value);
    console.log(kineticCrystal.value);
    console.log(greenCrystal.value);
    console.log(redCrystal.value);
    console.log(userScore);
}

$(document).ready(function(){
    intialize()

    $(".crystals").on("click", function(){
         
        userScore += parseInt($(this).val());
        $("#score").text(userScore);
        console.log(userScore);

        if (userScore > targetNumber) {
            alert("You lost");
            losses++;
            $("#losses").text(losses);
            reset();
        } else if
         (userScore === targetNumber) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
    
    })

    
   
    
    


});


