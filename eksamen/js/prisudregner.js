const prisvoksen = 130;
const prisbarn = 75;
const prisinfant = 0;
const prispensionist = 110;

function samletpris(){
 
    
    var res = (prisvoksen * parseInt(document.getElementById("Voksne").value)) + (prisbarn * parseInt(document.getElementById("Barn").value)) + (prisinfant * parseInt(document.getElementById("Infant").value)) + (prispensionist * parseInt(document.getElementById("pensionist").value));
   
    document.getElementById("result").innerHTML=res;

}

