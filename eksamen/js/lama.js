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


// læs højt //
// læs højt slut //







// Modal på information, funfact, spise og historie om lamaen//

// Get the modal
const modal = document.getElementById("infolama");
const modal2 = document.getElementById("funfactlama");




// Get the button that opens the modal
const btn = document.getElementById("myBtn");
const btn2 = document.getElementById("myBtn1");




// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];


// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it //
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2 || ) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
};



// Modal på information, funfact, spise og historie om lamaen slut//





