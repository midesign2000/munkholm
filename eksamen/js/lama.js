// modal bokse på alle knapper til lamasiden//


// Få fat på modallen
let modal = document.getElementById("myModal");

let modal2 = document.getElementById("myModalFunfact");

let modal3 = document.getElementById("myModalHistorie");

let modal4 = document.getElementById("myModalMad");

let modal5 = document.getElementById("myModalLand");

let modal6 = document.getElementById("myModalInfo");


// få fat på knappen som åbner modallen
let btn = document.getElementById("myBtn");

let btn2 = document.getElementById("myBtn-funfact");

let btn3 = document.getElementById("myBtn-historie");

let btn4 = document.getElementById("myBtn-mad");

let btn5 = document.getElementById("myBtn-land");

let btn6 = document.getElementById("myBtn-info");



// få fat på <span> elementet som lukker modallen
let span = document.getElementsByClassName("close")[0];

let span2 = document.getElementsByClassName("close")[1];

let span3 = document.getElementsByClassName("close")[2];

let span4 = document.getElementsByClassName("close")[3];

let span5 = document.getElementsByClassName("close")[4];

let span6 = document.getElementsByClassName("close")[5];


// Når brugeren klikker på knappen åbner modallen
btn.onclick = function () {
    modal.style.display = "block";
}

btn2.onclick = function () {
    myModalFunfact.style.display = "block";
}


btn3.onclick = function () {
    myModalHistorie.style.display = "block";
}


btn4.onclick = function () {
    myModalMad.style.display = "block";
}



btn5.onclick = function () {
    myModalLand.style.display = "block";
}



btn6.onclick = function () {
    myModalInfo.style.display = "block";
}


// Når brugeren klikker på <span> (x), luk modal boksen
span.onclick = function () {
    modal.style.display = "none";
}

span2.onclick = function () {
    myModalFunfact.style.display = "none";
}


span3.onclick = function () {
    myModalHistorie.style.display = "none";
}


span4.onclick = function () {
    myModalMad.style.display = "none";
}


span5.onclick = function () {
    myModalLand.style.display = "none";
}



span6.onclick = function () {
    myModalInfo.style.display = "none";
}




// Brugeren kan klikke uden for modalboksen for at lukke den modalboksen //
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6) { 
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";

        
    }
};

// modal bokse på alle knapper til lamasiden slut//






// lyd på modal bokse//
const LAMALYD = new Audio("audio/lama_lyd.m4a");

LAMALYD.pause();

const PLAYLYD = document.getElementById("spillyd");
PLAYLYD.addEventListener("click",
    function () {
        if (LAMALYD.paused) {
            LAMALYD.play()
        } else {
            LAMALYD.pause()
        }
    });








const LAMA = new Audio("audio/take 3.m4a");

LAMA.pause();

const PLAY = document.getElementById("spilhoj");

PLAY.addEventListener("click", function () {
    if (LAMA.paused) {


        LAMA.play()
    } else {
        LAMA.pause()
    }
});


// lyd på model bokse slut//