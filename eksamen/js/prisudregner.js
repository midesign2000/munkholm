
const PRISVOKSEN = 130;
const PRISBARN = 75;
const PRISINFANT = 0;
const PRISPENSIONIST = 110;




window.onload = function () {
    document.addEventListener("change", samletpris);
    document.getElementById("TilBetaling").addEventListener("click", gemValg);
    
}


function samletpris(){

    let res = (PRISVOKSEN * parseInt(document.getElementById("Voksne").value)) + (PRISBARN * parseInt(document.getElementById("Barn").value)) + (PRISINFANT * parseInt(document.getElementById("Infant").value)) + (PRISPENSIONIST * parseInt(document.getElementById("pensionist").value));
   
    
    document.getElementById("result").innerHTML=res;
    document.getElementById("result").value = res;
}

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

