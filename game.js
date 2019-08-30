var randomNumber = Math.floor((Math.random() * 100) + 1);
var yourNumber = 0;

$("#reachnumber").text(randomNumber);

var crystalNumbers = [10, 8, 5, 2];

for (var i = 0; i < crystalNumbers.length; i++) {
    var imageCrystal = $("<img>");

    imageCrystal.addClass("image-crystal");

    imageCrystal.attr("src", "http://3.imimg.com/data3/JH/ED/GLADMIN-18414/quartz-crystal-250x250.jpg");

    imageCrystal.attr("crystaldata", crystalNumbers[i]);

    $("#crystals").append(imageCrystal);
}

$(".image-crystal").on("click", function () {
    var numberForCrystal = ($(this).attr("crystaldata"));

    numberForCrystal = parseInt(numberForCrystal);

    yourNumber += numberForCrystal;

    alert("Your Number: " + yourNumber)

    if (yourNumber === randomNumber) {
        alert("You win! That was just luck!!!!");
    }
    else if (yourNumber >= randomNumber) {
        alert("You lose! Told you, you wouldn't win!");
    }
})