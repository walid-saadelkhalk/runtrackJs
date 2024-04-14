function jourTravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1; 
    var jour = date.getDate();
    
    var joursFeries = [
        "01-01", 
        "05-01", 
        "05-08", 
        "07-14",  
        "08-15",
        "11-01", 
        "11-11",
        "12-25"  
    ];

    var jourSemaine = date.getDay(); 
    var dateFormatted = jour + "/" + mois + "/" + annee;


    var dateFerie = ("0" + mois).slice(-2) + "-" + ("0" + jour).slice(-2);

    var isFerie = joursFeries.includes(dateFerie);
    
    if (isFerie) {
        console.log("Le " + dateFormatted + " est un jour férié.");
    } else if (jourSemaine === 0 ) {
        console.log("Non, " + dateFormatted + " est un dimanche.");
    } else if (jourSemaine === 6) {
        console.log("Non, " + dateFormatted + " est un samedi.");
    } else {
        console.log("Oui, " + dateFormatted + " est un jour travaillé.");
    }
}

var dateTest = new Date(2024, 4, 1); 
jourTravaille(dateTest);
dateTest = new Date(2024, 3, 14);
jourTravaille(dateTest);
dateTest = new Date(2024, 3, 13);
jourTravaille(dateTest);
dateTest = new Date(2024, 3, 12);
jourTravaille(dateTest);
