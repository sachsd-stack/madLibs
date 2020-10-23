function createParagraph() {
    var wordOne = document.getElementById("foreignCountry").value;
    var wordTwo = document.getElementById("adverb1").value;
    var wordThree = document.getElementById("adjective1").value;
    var wordFour = document.getElementById("animal").value;
    var wordFive = document.getElementById("verbIng1").value;
    var wordSix = document.getElementById("verb1").value;
    var wordSeven = document.getElementById("verbIng2").value;
    var wordEight = document.getElementById("adverb2").value;
    var wordNine = document.getElementById("adjective2").value;
    var wordTen = document.getElementById("place").value;
    var wordEleven = document.getElementById("liquidType").value;
    var wordTwelve = document.getElementById("bodyPart").value;
    var wordThirteen = document.getElementById("verb2").value;

    var paragraph = "<p>If you are traveling in " + wordOne + " and find yourself having to cross a piranha-filled river, here's how to do it " + wordTwo + "." + "<ul><li>Piranhas are more " + wordThree + " during the day, so cross the river at night</li><li>Avoid areas with netted " + wordFour + " traps; piranhas may be " + wordFive + " there looking to " + wordSix + " them!</li><li>When " + wordSeven + " the river, swim " + wordEight + ". You don't want to wake them up and make them " + wordNine + "!</li><li>Whatever you do, if you have an open wound, try to find another way to get back to the " + wordTen + ". Piranhas are attracted to fresh " + wordEleven + " and will most likely take a bite out of your " + wordTwelve + " if you " + wordThirteen + " in the water!</li></ul></p>";

    document.getElementById('submitButton').onclick = function insertHTML() {
        document.getElementById("completeMadLib").innerHTML = paragraph;
    }
    
}
