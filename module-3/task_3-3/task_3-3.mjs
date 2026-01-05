"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function today () {
    const options = {weekday : "long", year: "numeric", month: "long", day: "numeric"};
    const dateToday = new Date();
    return dateToday.toLocaleDateString("nb-NO", options);

}
const text = today();
printOut (text);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function release (){
    const options = {weekday : "long", year: "numeric", month: "long", day: "numeric"};
    const releaseDate = new Date (2026, 4, 14);
    const formatted = releaseDate.toLocaleDateString("nb-NO", options);

    const todayDate = new Date();
    const diffMs = releaseDate - todayDate;
    const daysLeft = Math.ceil(diffMs / (1000*60*60*24));

    printOut("Release date: " + formatted);
    if (daysLeft > 0 ) {
        printOut ("Days until release: " + daysLeft);
    } else if (daysLeft === 0) {
        printOut ("Release is today!");
    } else {
        printOut ("Release passed " + Math.abs(daysLeft) + " day(s) ago.");
    }
}
release();
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function radius (){
    const circle = Math.floor(Math.random() * 10) +1;
    printOut ("Tilfeldig radius: " + circle);

    const diameter = circle * 2;
    printOut ("Diameter: " + diameter);

    const circumference = 2 * Math.PI * circle;
    printOut ("circumference " + circumference.toFixed(2));

    const area = Math.PI * (circle ** 2);
    printOut ("areal " + area.toFixed(2));
}
radius();

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangle(){
    const width = Math.floor(Math.random() * 20) +1;
    const heigth = width / 2;
    printOut (("Width: ") + (width) + (" Meter") + (" and ") + ("heigth ") + (heigth) + (" Meter"));

    const circumference = (width * 2 + heigth * 2);
    printOut ("circumference: " + circumference);

    const area = heigth * width;
    printOut ("Area: " + area);

    const cubic = width * heigth *  0.10;
    printOut ("we are going to need " + cubic + " cubic meters of concrete");
}
rectangle();

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tempInF = 147;
printOut ("Farenheit to Celcius and Kelvin:");
printOut (newLine);
function fToCanK () {
    let tempInC = ((147 - 32) / 1.8);
    if (tempInC < tempInF) {
        printOut ("147 Farenheit is " + tempInC.toFixed(0) + " Celcius");
    } else {
        printOut ("Try again");
    }

    let tempInK = ((147 + 459.67) * 5/9);
    if (tempInK > tempInF) {
        printOut("147 Farenheit is " + tempInK.toFixed(0) + " kelvin");
    } else {
        printOut ("Try again");
    }
}
fToCanK()
printOut (newLine);

const tempInCe = 32;
printOut ("Celcius to Farenheit and Kelvin:");
printOut (newLine);
function cToFanK () {
    let tempInFar = ((32 * 1.8) + 32);
    if (tempInFar > tempInCe) {
        printOut ("32 Celcius is: " + tempInFar.toFixed(0) + " Farenheit");
    } else {
        printOut ("Try again");
    }
    let tempInKelv = (32 + 273.15);
    if (tempInKelv > tempInCe) {
        printOut ("32 Celcius is: " + tempInKelv.toFixed(0) + " Kelvin");
    } else {
        printOut ("Try again");
    }
}
cToFanK()
printOut (newLine);

const tempInK = 666;
printOut ("Kelvin to Farenheit and Celcius:")
printOut (newLine);

function kToFanC () {
    let tempInFaren = ((666 * 9/5) - 459.67);
    if (tempInFaren > tempInK) {
        printOut ("666 Kelvin is: " + tempInFaren.toFixed(0) + " Farenheit");
    } else {
        printOut ("try again");
    }

    let tempInCelc = (666 - 273.15);
    if (tempInCelc < tempInK) {
        printOut ("666 Kelvin is: " + tempInCelc.toFixed(0) + " Celcius");
    } else{
        printOut ("try again");
    }
}
kToFanC ()

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const food = 0.15;
const normal = 0.25;
const hotel = 0.10; 
const transportation = 0.10;
const cinema = 0.10;

function calcVAT (gross, group) {
    let vat;

    switch (group.toLowerCase()) {
        case "normal":
            vat = 25;
            break;
        case "food":
            vat = 15;
            break;
        case "hotel":
        case "transportation":
        case "cinema":
            vat = 10;
            break;
        default:
            printOut ("unknown VAT group!");
            return NaN;
    }
    const net = (100 * gross) / (vat + 100);
    return net;
}
printOut ("normal 25% " + calcVAT(1000, "normal").toFixed(2));
printOut ("Food 15% " + calcVAT(800, "food").toFixed(2));
printOut ("Hotel 10% " + calcVAT(600, "hotel").toFixed(2));
printOut ("Unknown: " + calcVAT(666, "goblins").toFixed(2));

printOut ("bonus lagt til: ");

const varer = [
    {name: "pizza", price: 240, group: "food"},
    {name: "Movie ticket", price: 150, group: "cinema"},
    {name: "Hotel Room", price: 1200, group: "hotel"},
    {name: "T-Shirt", price: 400, group: "normal"},
    {name: "WitchCraft Spells", price: 666, group: "goblins"}
];
for (let item of varer) {
    const netPrice = calcVAT(item.price, item.group);
    if (!isNaN(netPrice)) {
        printOut (item.name + "(" + item.group + "): " + netPrice.toFixed(2));
    }
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calcSpeed (distance, time, speed) {
    let missing = 0;
    if (distance === undefined) missing++;
    if (time === undefined) missing++;
    if (speed === undefined) missing++;

    if (missing > 1) {
        printOut ("not enough information!");
        return NaN;
    }
    if (speed === undefined) {
        speed = distance / time;
        printOut ("speed is: " + speed);
    } 
    else if (time === undefined) {
        time = distance / speed;
        printOut ("Time is: " + time);
    }
    else if (distance === undefined) {
        distance = speed * time;
        printOut ("Distance is: " + distance)
            }
}
calcSpeed (100, 50);
calcSpeed (undefined, 60, 120);
calcSpeed (180, undefined, 90);
calcSpeed (undefined, undefined, 1);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function textFun (text, maxLength, character, addBefore) {
    if (text.length < maxLength) {
        while (text.length < maxLength){

        
        if (addBefore) {
           text = character + text;
        } else {
            text = text + character;
        
        }
        }
    } 
    printOut ("Dette er en " + text);
}
textFun("tekststreng", 18, "**", false);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
