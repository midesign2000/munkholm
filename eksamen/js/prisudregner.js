const PRISVOKSEN = 130;
const PRISBARN = 75;
const PRISINFANT = 0;
const PRISPENSIONIST = 110;

/* Const fungere som en referance, i det her tilfælde er det til et HTML element. Ovenover er det til et number - bruges også til at gøre koden "pæn" genbruglig og overskuelig */

const VOKSEN = document.getElementById("Voksne");
const BARN = document.getElementById("Barn");
const INFANT = document.getElementById("Infant");
const PENSIONIST = document.getElementById("Pensionist");
const SAMLETPRIS = document.getElementById("result");


/* Window.onload loades for at genere siden, her tilføjer vi eventlistener på change eventet. Eventet "trigger" functionen som samler prisen.*/

window.onload = function () {
    document.addEventListener("change", samletpris);
    document.addEventListener("change", gemValg);
    
}


function samletpris(){

    let res = (prisvoksen * parseInt(VOKSEN.value)) + (prisbarn * parseInt(BARN.value)) + (prisinfant * parseInt(INFANT.value)) + (prispensionist * parseInt(PENSIONIST.value));
   
    SAMLETPRIS.innerHTML=res;

}

/* setItem er en funktion og den bliver kaldt med to parametre som er det man kalder et key/value pair - i det her tilfælde er vores parameter "Voksen" & værdien af dropdown elementer "voksne" */

function gemValg(){
    
    sessionStorage.setItem("Voksen", VOKSEN.value);
    sessionStorage.setItem("Barn", BARN.value);
    sessionStorage.setItem("Infant", INFANT.value);
    sessionStorage.setItem("Pensionist", PENSIONIST.value);
 sessionStorage.setItem("SamletPris", SAMLETPRIS.value);
 sessionStorage.setItem("ValgAfDato", document.getElementById("valgafdato").value);
    
}
