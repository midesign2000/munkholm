// Get the modal
let modal = document.getElementById("myModal");

let modal2 = document.getElementById("myModalFunfact");

let modal3 = document.getElementById("myModalHistorie");

let modal4 = document.getElementById("myModalMad");

let modal5 = document.getElementById("myModalLand");

let modal6 = document.getElementById("myModalInfo");


// Get the button that opens the modal
let btn = document.getElementById("myBtn");

let btn2 = document.getElementById("myBtn-funfact");

let btn3 = document.getElementById("myBtn-historie");

let btn4 = document.getElementById("myBtn-mad");

let btn5 = document.getElementById("myBtn-land");

let btn6 = document.getElementById("myBtn-info");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let span2 = document.getElementsByClassName("close")[1];

let span3 = document.getElementsByClassName("close")[2];

let span4 = document.getElementsByClassName("close")[3];

let span5 = document.getElementsByClassName("close")[4];

let span6 = document.getElementsByClassName("close")[5];


// When the user clicks the button, open the modal 
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


// When the user clicks on <span> (x), close the modal
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





window.onclick = function (event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6) { //ændret af Morten
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";

        //Tilføjet af Morten
    }
};
