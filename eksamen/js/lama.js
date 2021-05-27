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








// modal bokse på alle knapper til lamasiden//

// Få fat på modallen
let modal = document.getElementById("myModal");


// få fat på knappen som åbner modallen
let btn = document.getElementById("myBtn");


// få fat på <span> elementet som lukker modallen
let span = document.getElementsByClassName("close")[0];

// Når brugeren klikker på knappen åbner modallen
btn.onclick = function () {
    modal.style.display = "block";
}


// Når brugeren klikker på <span> (x), luk modal boksen
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6) { 
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";   
    }
}

// modal bokse på alle knapper til lamasiden slut//
