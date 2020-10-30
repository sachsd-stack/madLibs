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

    var paragraph = "<p>If you are traveling in " + wordOne + " and find yourself having to cross a piranha-filled river, here's how to do it " + wordTwo + "." + "<ul ><li>Piranhas are more " + wordThree + " during the day, so cross the river at night</li><li>Avoid areas with netted " + wordFour + " traps; piranhas may be " + wordFive + " there looking to " + wordSix + " them!</li><li>When " + wordSeven + " the river, swim " + wordEight + ". You don't want to wake them up and make them " + wordNine + "!</li><li>Whatever you do, if you have an open wound, try to find another way to get back to the " + wordTen + ". Piranhas are attracted to fresh " + wordEleven + " and will most likely take a bite out of your " + wordTwelve + " if you " + wordThirteen + " in the water!</li></ul></p>";

    console.log(paragraph);
    document.getElementById("completeMadLib").innerHTML = paragraph;
    document.getElementById("completeMadLib").style.padding = '5vh 0';
    // document.getElementById("content").style.background = 'linear-gradient(to bottom right,  rgba(19, 241, 241, 0.9) 2%,  rgba(16, 70, 172, 0.9) 10%, rgba(139, 0, 0, 0.7) 30%), url("./img/riverBg.jpg")';
    document.body.className="content";
    // var current = 0;
    // setInterval(function() {
    //     document.querySelector('.content').style.opacity = (current++ % 2);
    // }, 3000);
    // $('body').animate({opacity: 0}, 'slow', function() {  
    //     $(this)
    //     .css({'background': 'linear-gradient(to bottom right,  rgba(19, 241, 241, 0.9) 2%,  rgba(16, 70, 172, 0.9) 10%, rgba(139, 0, 0, 0.7) 30%), url("./img/riverBg.jpg")'})
    //     .animate({opacity: 1});
    //  });

    document.getElementById("heading").style.textShadow = '-1px -1px 0 crimson, 1px -1px 0 crimson, -1px 1px 0 crimson, 1px 1px 0 crimson';
    document.getElementById("heading").style.color = 'white';
    document.getElementById("heading").style.transitionDuration = '2s';
    // document.getElementById("content").style.transition = 'background 3s ease-in 3s';
}
