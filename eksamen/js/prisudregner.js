
/* Const fungere som en referance, i det her tilfælde er det til et HTML element. */

const PRISVOKSEN = 130;
const PRISBARN = 75;
const PRISINFANT = 0;
const PRISPENSIONIST = 110;





/* Window.onload loades for at genere siden, her tilføjer vi eventlistener på change eventet. Eventet "trigger" functionen som samler prisen.*/

window.onload = function () {
    document.addEventListener("change", samletpris);
    document.getElementById("TilBetaling").addEventListener("click", gemValg);
    
}

// --------Udregning af pris på besøgende----------- //

function samletpris(){

    let res = (PRISVOKSEN * parseInt(document.getElementById("Voksne").value)) + (PRISBARN * parseInt(document.getElementById("Barn").value)) + (PRISINFANT * parseInt(document.getElementById("Infant").value)) + (PRISPENSIONIST * parseInt(document.getElementById("pensionist").value));
   
    
    document.getElementById("result").innerHTML=res;
    document.getElementById("result").value = res;
}

/* setItem er en funktion og den bliver kaldt med to parametre som er det man kalder et key/value pair - i det her tilfælde er vores parameter "Voksen" & værdien af dropdown elementer "voksne" 

sessionStorage bliver oprettet når en fane oprettes, og holder keyvalue pass og fungere som et opslagsværk af de informationer vi har kommet i dem - de eksistere ind til fanen lukkes */

/*If sætning - hvis antallet af voksne eller pensionister er større end 0 = går videre. Ellers informer om at der skal vælges en voksen */

function gemValg(){
    if(document.getElementById("Voksne").value > 0 || document.getElementById("pensionist").value > 0){
        sessionStorage.setItem("Voksen",document.getElementById("Voksne").value);
        sessionStorage.setItem("Barn",document.getElementById("Barn").value);
        sessionStorage.setItem("Infant", document.getElementById("Infant").value);
        sessionStorage.setItem("Pensionist", document.getElementById("pensionist").value);
        sessionStorage.setItem("SamletPris", document.getElementById("result").value);
        sessionStorage.setItem("ValgAfDato", document.getElementById("valgafdato").value);


        location.href="Book.html";
    }
    else{
        document.getElementById("fejlbeskred").innerHTML = "Der skal være en voksen med."
    }
    
}

