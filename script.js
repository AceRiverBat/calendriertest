//ANNEE
const IDyear = document.getElementById("year");
let h2Y = document.createElement("h2");
IDyear.appendChild(h2Y);
let NowYear = new Date();
let TodayYear = NowYear.getFullYear();
h2Y.innerHTML = TodayYear;

//MOIS
const IDmonth = document.getElementById("month");
let h3M = document.createElement("h3");
IDmonth.appendChild(h3M);
let Nowmonths  = (new Date).getMonth();
let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

h3M.innerHTML = months[Nowmonths];

//JOURS
const IDday = document.getElementById("day");
let ulDay = document.createElement("ul");
IDday.appendChild(ulDay);
let NowDay  = (new Date).getDay();
let Days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
for (let i = 0; i < Days.length; i++) {
    const jours = Days[i];
    const IDday = document.getElementById("day");
    let liDay = document.createElement("li");
    ulDay.appendChild(liDay);
    liDay.innerHTML = jours;
};

//CASES

function getNbJoursMois(mois, annee) {
    let lgMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((annee%4 == 0 && annee%100 != 0) || annee%400 == 0) {
    lgMois[1] = 29;
    }

    let tabnumber = [];
    const paranumber = document.querySelector(".days")
    for (let i = 0; i <lgMois[Nowmonths]; i++) {
        tabnumber.push(NowDay++);
        for (let i = 0; i < tabnumber.length; i++) {
            const DayNumber = tabnumber[i];
            tabnumber.splice(0,1);
            let pnumber = document.createElement("p");
            paranumber.appendChild(pnumber);
            console.log(DayNumber);
            pnumber.innerHTML = DayNumber;
        }
        
    }

    }
getNbJoursMois();

