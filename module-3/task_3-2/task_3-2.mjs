"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtToPrintValue = "";
let txtToPrintValue2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
    txtToPrintValue += i + " ";
    txtToPrintValue2 += j + " ";
}
printOut(txtToPrintValue);
printOut(txtToPrintValue2);
printOut(newLine);
printOut("Look up");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const targetNumber = 45;
let guessedNumber = 0; 
let attempts = 0;
const mlSec = Date.now();
while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 1000000) +1;
    attempts = attempts + 1;
}
const elapsedTime = Date.now() - mlSec;



    printOut("Guessed number: " + guessedNumber + " in " + elapsedTime + " ms"
        + " in " + attempts + " attempts."
    );


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = "";
for (let i = 1; i < 200; i++) {
    let isPrime = true;
    let divisor = 2;

    while (divisor <= Math.sqrt(i)) {
        if (i % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) primes += i + " ";
}
printOut("Primtall mellom 1 og 200: " + primes);
printOut(newLine);






printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let r=1; r <=7; r++){
     printOut ("Rad Nummer " + r);
     let row = "";
    for ( let k = 1; k<=9; k++){ 
        row += "K" + k + "R" + r + " ";
    }
    printOut(row.trim());
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const students = 5;

function randomGrade(){
    return Number((((Math.ceil(Math.random()*236) / 236) * 100)).toFixed(2));
}

function getLetterGrade(score) {
    if (score >= 89) return "A";
    if (score >= 77) return "B";
    if (score >= 65) return "C";
    if (score >= 53) return "D";
    if (score >= 41) return "E";
    return "F";
}
let g1 = randomGrade(), id1 = 1;
let g2 = randomGrade(), id2 = 2;
let g3 = randomGrade(), id3 = 3;
let g4 = randomGrade(), id4 = 4;
let g5 = randomGrade(), id5 = 5;

function swap12() {if (g1<g2){let t=g1; g1=g2; g2=t; let u=id1; id1=id2; id2=u; }}
function swap23() {if (g2<g3){let t=g2; g2=g3; g3=t; let u=id2; id2=id3; id3=u; }}
function swap34() {if (g3<g4){let t=g3; g3=g4; g4=t; let u=id3; id3=id4; id4=u; }}
function swap45() {if (g4<g5){let t=g4; g4=g5; g5=t; let u=id4; id4=id5; id5=u; }}

swap12(); swap23(); swap34(); swap45();
swap12(); swap23(); swap34();
swap12(); swap23();
swap12();

function out(id, g) {
    printOut(`student ${id} ${g}% - ${getLetterGrade(g)}`);
}

out(id1, g1);
out(id2, g2);
out(id3, g3);
out(id4, g4);
out(id5, g5);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollDice() {
    var dice = [];
    for (var i = 0; i<6; i++) {
        dice.push(Math.floor(Math.random() * 6 ) +1);
    }
    return dice;
}

function countValues(arr) {
    var counts = {};
    for (var i = 0; i<arr.length; i++) {
        var val = arr[i];
        counts[val] = (counts[val] || 0) +1;
    }
    return counts;
}

function isFullStraight(dice) {
  var sorted = dice.slice().sort();
  return sorted.join('') === '123456';
}

function isThreePairs(dice) {
  var counts = Object.values(countValues(dice));
  var pairs = 0;
  for (var i = 0; i < counts.length; i++) {
    if (counts[i] === 2) pairs++;
  }
  return pairs === 3;
}

function isTower(dice) {
  var counts = Object.values(countValues(dice));
  return counts.includes(4) && counts.includes(2);
}

function isYahtzee(dice) {
  var first = dice[0];
  for (var i = 1; i < dice.length; i++) {
    if (dice[i] !== first) return false;
  }
  return true;
}

function simulateUntil(checkFunc) {
  var throws = 0;
  while (true) {
    throws++;
    var dice = rollDice();
    if (checkFunc(dice)) return throws;
  }
}

// Run simulations and print results
printOut("Full straight: " + simulateUntil(isFullStraight) + " throws");
printOut("Three pairs: " + simulateUntil(isThreePairs) + " throws");
printOut("Tower (2+4): " + simulateUntil(isTower) + " throws");
printOut("Yahtzee: " + simulateUntil(isYahtzee) + " throws")

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
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

