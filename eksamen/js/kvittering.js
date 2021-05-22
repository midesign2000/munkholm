const LEJEASIDE = document.getElementById("lejeoplysninger");

LEJEASIDE.insertAdjacentHTML("beforeend", "<br><h2>Kvittering af køb:" + "</h2><br>" + "<h3>Lejeoplysninger:" +"</h3>" +  sessionStorage.getItem('bil') + "</h3>");


LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Afhentningsdato: " + sessionStorage.getItem('afhentningsdato'));


LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Afleveringsdato: " + sessionStorage.getItem('afleveringsdato'));


LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Antal dage: " + sessionStorage.getItem('lejedage'));


LEJEASIDE.insertAdjacentHTML("beforeend", "<br><br><h3>Billeje i alt DKK " + sessionStorage.getItem('lejeudgift') + "</h3>inkl. moms<br>");





const OPLYSNINGER = document.getElementById("oplysninger");

OPLYSNINGER.insertAdjacentHTML("beforeend", "<h2>Dine oplysninger: <br><br>" + "</h2>" + "<h3>Navn: " + "</h3>" + sessionStorage.getItem('fornavn') + " " + sessionStorage.getItem('efternavn'));

OPLYSNINGER.insertAdjacentHTML("beforeend", "<h3>Email:" + "</h3>" + sessionStorage.getItem('email'));

OPLYSNINGER.insertAdjacentHTML("beforeend", "<h3>Adresse:" + "</h3>" + sessionStorage.getItem('adresse'));


OPLYSNINGER.insertAdjacentHTML("beforeend", "<h3>Postnummer:" + "</h3>" + sessionStorage.getItem('postnummer'));















const UDSTYRSLISTE = JSON.parse(sessionStorage.getItem("ekstraudstyr"));

for (let i = 0; i < UDSTYRSLISTE.length; i++) {
if (UDSTYRSLISTE[i]!== null) {

 LEJEASIDE.insertAdjacentHTML("beforeend", "<br><h3>Tilvalgt udstyr:</h3>" + UDSTYRSLISTE[i]);
    }
}


const TOTALINDHOLD = document.getElementById("totalindhold");





