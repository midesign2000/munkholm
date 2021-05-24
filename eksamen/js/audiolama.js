const LAMA = new Audio("audio/lama_lyd_2.m4a");

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



