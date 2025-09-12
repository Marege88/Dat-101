"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let regnestykket = 2 + 3 * 2 - 4 * 6;
let regnestykket2 = 2 + 3 * (2-4) * 6;
let Resultat = regnestykket;
let Resultat2 = regnestykket2;
printOut("Resultat: " + Resultat);
printOut("Resultat2: " + Resultat2);
printOut("2 + 3 * 2 - 4 * 6 = " + Resultat );
printOut("2 + 3 * (2-4) * 6 = " + Resultat2 );
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meter = 25; let centimeter = 34; let inch = 25.4;

let tilmillimeter = (meter * 1000) + (centimeter * 10);
let tilinch = tilmillimeter / inch;
printOut(" 25 meter og 34 cm er " + tilinch.toFixed(2) + " inch " );
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dag = 24
let timer = 60
let minutter = 60
let sekunder = 60

let dagtiltime = (3 * dag);
printOut(dagtiltime + "Timer + 12");
let totaltime = (dagtiltime + 12);
printOut(totaltime + "timer totalt");
let totalminutt = (totaltime * minutter);
printOut(totalminutt + "minutter");
let totalsekunder = (45 / sekunder);
printOut(totalsekunder + "sekund");
let totalminutsvar = (totalminutt + totalsekunder);
printOut("Total minutt:" + totalminutsvar);

printOut("Det blir da totalt" + totalminutsvar + "Minutter");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dager = 24;
let time = 60;
let minutt = 60;
let sekund = 60;
let totalminuts = 6322.52;

let totaltimer = (totalminuts / time);
printOut("total time:" + totaltimer.toFixed(2));
let totaldager = (totaltimer / dager);
printOut("Totale dager" + totaldager.toFixed(2));
let timerdager = (0.39 * dager);
printOut("totale timer:" + timerdager);
let minuttimer = (0.36 * time);
printOut("totale minutter" + minuttimer.toFixed(2));
let sekundminutt = (0.60 * sekund);
printOut("totale sekunder:" + sekundminutt);
printOut("det er da 4 dager, 9 timer, 21 minutter og 36 sekunder");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let NOK = 76;
let USD = 8.6;
let kurs = (NOK / USD);
printOut("kursen er" + kurs);
let dollar = 54;
let usdtonok = (dollar * kurs);
printOut("54 dollar er " + usdtonok + "NOK");
printOut("54 dollar er " + usdtonok.toFixed(2) + "NOK");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("there is much between heaven and earth that we do not understand");
let characters = "there is much between heaven and earth that we do not understand";
let antall = characters.length ;
printOut("antall tegn i setningen er:" + antall);
let pos19 = characters.charAt(19);
printOut("bokstaven på posisjon 19 er:" + pos19);
let pos358 = characters.charAt(35) + characters.charAt(36) + characters.charAt(37) + characters.charAt(38) + characters.charAt(39) + characters.charAt(40) + characters.charAt(41) + characters.charAt(42); + characters.charAt(43);
printOut("bokstavene på posisjon 35 + 8 er:" + pos358);
let earthpos = characters.indexOf("earth");
printOut("ordet Earth starter på posisjon:" + earthpos);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
true/false; let a=5, b=3;
let areEqual = (a === b);
printOut("dette er " + areEqual);

areEqual = (7===7);
printOut("dette er " + areEqual);

areEqual = ("a" === "b");
printOut("dette er " + areEqual);

let test = 1<a;
printOut("dette er " + test);

let test2 = "2500" < "abcd";
printOut("dette er " + test2);

let lærer = "arne" === "thomas";
printOut("dette er " + lærer);

let test3 = (2===5);
printOut("dette er " + test3);

let test4 = ("abcd" > "bcd");
printOut("dette er " + test4);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let con1 = "254";
let num1 = Number(con1);
printOut("konvertert verdi: " + num1);
console.log(typeof num1);
 
let con2 = "57.23";
let num2 = Number(con2);
printOut("konvertert verdi: " + num2);
console.log(typeof num2);

let con3 = "25 NOK";
let num3 = Number(con3);
printOut("konvertert verdi: " + num3);
console.log(typeof num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const value = Math.floor(Math.random () * 360) +1;
printOut("Tilfeldig verdi mellom 1 og 360: " + value);  

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let weeks = 7;
let days = 131;
let total= (days / weeks);
let modu = (days % weeks);
printOut("Det er " + total.toFixed(2) + " hele uker i 131 dager");
printOut("Det er " + modu + " dager til overs");
printOut(newLine);