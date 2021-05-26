window.onload = function() {
    takTekst();
  kvitteringsTekst();
}




function takTekst(){
    document.getElementById("takTekst").innerHTML = "Tak for din bestilling " + sessionStorage.getItem("fornavn") + " <br> Vi glæder os til at byde jer velkommen den " + sessionStorage.getItem("ValgAfDato");
}

function kvitteringsTekst(){
    
    document.getElementById("fornavn").innerHTML = "Navn: " + sessionStorage.getItem("fornavn")+ " " + sessionStorage.getItem("efternavn");
    document.getElementById("email").innerHTML = "Email: " + sessionStorage.getItem("email");
    document.getElementById("adresse").innerHTML = "Adresse: " + sessionStorage.getItem("adresse") + " " + sessionStorage.getItem("postnummer");

    document.getElementById("pris").innerHTML = "Pris " + sessionStorage.getItem("SamletPris") + " kr";
    
    
    
    /*Der er lavet en if sætning for at lave et tjek på om persontypen er valgt, og for i kvitteringen at vise brugeren hvad de har købt og betalt. Elementerne der ikke er valgt bliver dermed ikke vist */
    
    let voksne = sessionStorage.getItem("Voksen");
    if(voksne > 0){
        document.getElementById("antalVoksne").innerHTML = "Antal voksne " + voksne;
    }
    
    let barn = sessionStorage.getItem("Barn");
    if(barn > 0){
        document.getElementById("antalBarn").innerHTML = "Antal børn " + barn;
    }
    
    let infant = sessionStorage.getItem("Infant");
    if(infant > 0){
        document.getElementById("antalBarnU2").innerHTML = "Antal børn under 2 år " + infant;
    }

    let pensionist = sessionStorage.getItem("Pensionist");
    if(pensionist > 0){
        document.getElementById("pensionister").innerHTML = "Antal pensionister " + pensionist;
    }

    document.getElementById("dato").innerHTML = "Din valgte dato " + sessionStorage.getItem("ValgAfDato");

}