// lama lyd //
const LAMA = new Audio("audio/lama_lyd.m4a");

LAMA.pause();

const PLAY = document.getElementById("spil");
PLAY.addEventListener("click",
    function () {
        if (LAMA.paused) {
            LAMA.play()
        } else {
            LAMA.pause()
        }
    });


//lama lyd slut//








// Modal på information, funfact, spise og historie om lamaen//

// Get the modal
let modal = document.getElementsByClassName("myModal");

// Get the button that opens the modal
let btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Modal på information, funfact, spise og historie om lamaen slut//
