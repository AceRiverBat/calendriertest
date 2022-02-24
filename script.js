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


//TEST
function getNbJoursMois(mois, annee) {
    let lgMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((annee%4 == 0 && annee%100 != 0) || annee%400 == 0) {
    lgMois[1] = 29;
    }


    for (let i = 0; i <lgMois[Nowmonths]; i++) {
    let tabnumber = [];
        let date1 = NowYear.getDate();
        let date2 = date1++;
        tabnumber.push(date2);
        console.log(date2);
    }
}
getNbJoursMois();
console.log(tabnumber);


    


//CASES

// function getNbJoursMois(mois, annee) {
//     let lgMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if ((annee%4 == 0 && annee%100 != 0) || annee%400 == 0) {
//     lgMois[1] = 29;
//     }

//     let tabnumber = [];
//     const paranumber = document.querySelector(".days")
    
//         let date1 = NowYear.getDate();
//         for (let i = 0; i <lgMois[Nowmonths]; i++) {
//         tabnumber.push(date1++);
//         if (date1 == lgMois[Nowmonths]+1) {
//             break
//         }
while (date1 < lgMois[Nowmonths]) {
date1++
}
//             const DayNumber = tabnumber[i]+1;
//             let test = document.querySelector("#test");
//             let div = document.createElement("div");
//             div.className = 'card';
//             test.appendChild(div);
//             let divbody = document.createElement("div");
//             divbody.className = 'card-body';
//             div.appendChild(divbody);
//             let pnumber = document.createElement("p");
//             paranumber.appendChild(pnumber);
//             console.log(DayNumber);
//             pnumber.innerHTML = DayNumber;
        
//     }
//     console.log(tabnumber);
//     }
// getNbJoursMois();

