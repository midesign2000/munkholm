
// -----------------------Antal besøgende --------//


const ANTALPAX = function (voksne, barn, børnu2, pensionister) {
    this.voksne = voksne;
    this.barn = barn;
    this.barnu2 = barnu2;
   this.pensionister = pensionister;

    this.visAttributter = function () {
        return this.voksne + " " + this.barn + " " + this.barnu2 + " " + this.pensionister;
    }

    this.visvoksne = function () {
        return this.voksne;
    }

    this.visbarn = function () {
        return this.barn;
    }

    this.visbarnu2 = function () {
        return this.barnu2;
    }

    this.vispensionister = function () {
        return this.pensionister;
    }
}

// --------Udregning af pris på besøgende----------- //

const prisvoksen = 130;
const prisbarn = 75;
const prisinfant = 0;
const prispensionist = 110;

function samletpris(){
 
    
    let res = (prisvoksen * parseInt(document.getElementById("Voksne").value)) + (prisbarn * parseInt(document.getElementById("Barn").value)) + (prisinfant * parseInt(document.getElementById("Infant").value)) + (prispensionist * parseInt(document.getElementById("pensionist").value));
   
    document.getElementById("result").innerHTML=res;

}

const prisvoksen = 130;
const prisbarn = 75;
const prisinfant = 0;
const prispensionist = 110;

function samletpris(){
 
    
    let res = (prisvoksen * parseInt(document.getElementById("Voksne").value)) + (prisbarn * parseInt(document.getElementById("Barn").value)) + (prisinfant * parseInt(document.getElementById("Infant").value)) + (prispensionist * parseInt(document.getElementById("pensionist").value));
   
    document.getElementById("result").innerHTML=res;

}


