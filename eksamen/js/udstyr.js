function bygIndkoebsliste() {
    const INDKOEBSKURV = [];
    const INPUTELEMENTS = document.getElementsByClassName("checkboks");

    for (let i = 0; INPUTELEMENTS[i]; i++) {
        if (INPUTELEMENTS[i].checked) {
            INDKOEBSKURV[i] = INPUTELEMENTS[i].value;
        }
    }
    return INDKOEBSKURV;
}

function beregnUdstyrudgift(indkoebskurv) {
    const varenumre = [
        ["Ekstra chauffør", 199.00],
        ["Barnesæde (5-12 år)", 155.00],
        ["Vejhjælp+", 120.00],
        ["Lift-net (0-1 år)", 100.00],
        ["Barnesæde (1-4 år)", 140.00],
        ["GPS navigation", 250.00],
        ["Snekæder", 188.00]
    ];

    let pris = 0;
    const MOMS = 0.25;

    for (let i = 0; i < indkoebskurv.length; i++) {
        for (let ii = 0; ii < varenumre.length; ii++) {
            if (varenumre[ii][0] === indkoebskurv[i]) {
                pris += varenumre[ii][1];
            }
        }
    }

    return pris * (1 + MOMS);
}

function beregnTotal(udstyrsudgift, lejeudgift) {
    const TOTAL = udstyrsudgift + lejeudgift;
    return TOTAL.toFixed(2);
}



const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);
const LEJEASIDE = document.getElementById("lejeoplysninger");

LEJEASIDE.insertAdjacentHTML("beforeend", "<br><h3>" + URLDATA.get('bil') + "</h3>");
LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Afhentningsdato: " + URLDATA.get('afhentning'));
LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Afleveringsdato: " + URLDATA.get('aflevering'));
LEJEASIDE.insertAdjacentHTML("beforeend", "<br>Antal dage: " + URLDATA.get('lejedage'));
LEJEASIDE.insertAdjacentHTML("beforeend", "<br><br><h3>Billeje i alt DKK " + URLDATA.get('lejeudgift') + "</h3>inkl. moms");

const FORMULAR = document.getElementById("formular");
const TOTALINDHOLD = document.getElementById("totalindhold");
TOTALINDHOLD.insertAdjacentHTML("beforeend", "<h3>DKK " + URLDATA.get("lejeudgift") + "</h3>");


FORMULAR.addEventListener("change", function () {
    const INDKOEBSKURV = bygIndkoebsliste();
    const UDSTYRSUDGIFT = beregnUdstyrudgift(INDKOEBSKURV);
    const LEJEUDGIFT = parseFloat(URLDATA.get("lejeudgift"));
    const TOTAL = beregnTotal(UDSTYRSUDGIFT, LEJEUDGIFT);
    TOTALINDHOLD.innerHTML = "ALT INKLUSIV: <h3>DKK " + TOTAL + "</h3>";
    sessionStorage.setItem("total", TOTAL);
    sessionStorage.setItem("ekstraudstyr", JSON.stringify(INDKOEBSKURV));
})









const VKNAP = document.getElementById("videreknap");

VKNAP.addEventListener("click", function() {
sessionStorage.setItem("bil", URLDATA.get("bil"));
sessionStorage.setItem("afhentningsdato", URLDATA.get("aflevering"));
sessionStorage.setItem("afleveringsdato", URLDATA.get("aflevering"));
sessionStorage.setItem("lejedage", URLDATA.get("lejedage"));
sessionStorage.setItem("lejeudgift", URLDATA.get("lejeudgift"));
    
    
    
})