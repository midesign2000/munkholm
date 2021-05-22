const LEJEASIDE = document.getElementById("lejeoplysninger");

LEJEASIDE.insertAdjacentHTML("beforeend", "<br><h3>" + sessionStorage.getItem('bil') + "</h3>");


LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Afhentningsdato: " + sessionStorage.getItem('afhentningsdato'));


LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Afleveringsdato: " + sessionStorage.getItem('afleveringsdato'));


LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Antal dage: " + sessionStorage.getItem('lejedage'));


LEJEASIDE.insertAdjacentHTML("beforeend", "<br><br><h3>Billeje i alt DKK " + sessionStorage.getItem('lejeudgift') + "</h3>inkl. moms");



const UDSTYRSLISTE = JSON.parse(sessionStorage.getItem("ekstraudstyr"));

for (let i = 0; i < UDSTYRSLISTE.length; i++) {
if (UDSTYRSLISTE[i]!== null) {

 LEJEASIDE.insertAdjacentHTML("beforeend", "<br>" + UDSTYRSLISTE[i]);
    }
}


const TOTALINDHOLD = document.getElementById("totalindhold");

TOTALINDHOLD.insertAdjacentHTML("beforeend", "<h3>DKK" + sessionStorage.getItem("total") + "</h3>");





const BOOKKNAP = document.getElementById("bookknap");

BOOKKNAP.addEventListener("click", function () {
    sessionStorage.setItem("fornavn", document.getElementById("fornavn").value);
    sessionStorage.setItem("efternavn", document.getElementById("efternavn").value);
    sessionStorage.setItem("email", document.getElementById("email").value);
    sessionStorage.setItem("adresse", document.getElementById("adresse").value);
    sessionStorage.setItem("postnummer", document.getElementById("postnummer").value);
})



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


