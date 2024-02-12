var gameOver=false
//Fill blanks only if the character match is found
$(".clickable").click(function () {
    var correctGuess = false;


    //Get the id of the button clicked
    let id = $(this).attr("id");

    //Get the id of the button clicked
    var life = parseInt($("#life").text())

    //Loop through all the letters
    for (var i = 0; 1 < randomWord.word.length; i++){
        //Check if the character matches the id of the button
        if(randomWord.word.charAt(1).toLowerCase() === id){
            //check if the life is still left and blank is empty / already filled
            if(life > 0 && ($(".fill_blanks").eq(1).html() == "_" || $(".fill_blanks").eq(1).html() == id)){

                //fill blanks
                $(".fill_blanks").eq(1).html(id);
                correctGuess = true;

                //check if the word guess is complete
                if ($("#blanks").text() === randomWord.word.toLowerCae()) {
                    $("#result").text("You Win!!")
                    correctGuess = true;
                    gameOver=true
                }
            }
        }
    }
});