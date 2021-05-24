
window.onload = function() {
document.getElementById("pris").innerHTML = "Pris " + window.sessionStorage.getItem("SamletPris");
    

}






































/*
const BOOKKNAP = document.getElementById("bookknap");

BOOKKNAP.addEventListener("click", function () {
    sessionStorage.setItem("fornavn", document.getElementById("fornavn").value);
    sessionStorage.setItem("efternavn", document.getElementById("efternavn").value);
    sessionStorage.setItem("email", document.getElementById("email").value);
    sessionStorage.setItem("adresse", document.getElementById("adresse").value);
    sessionStorage.setItem("postnummer", document.getElementById("postnummer").value);
})
*/


fetch("https://api.dataforsyningen.dk/postnumre/")
    .then(function (data) {
        return data.json();
    })

    .then(function (post) {
        const POSTNUMRELISTE = document.getElementById("postnummer");
        for (let i = 0; i < post.length; i++) {
            POSTNUMRELISTE.insertAdjacentHTML("beforeend", "<option>" + post[i].nr + " " + post[i].navn + "</option>");
        }
    })
    .catch(function (error) {
        const POSTNUMMERINPUT = document.getElementById("postnr");
       POSTNUMMERINPUT.value = "Ingen postnumre er at vælge.";
    })


