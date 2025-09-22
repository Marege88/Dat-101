"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8 || wakeUpTime == 6) {
  printOut("I can walk to school.");
}
let wakeUpTime2 = 8;
if (wakeUpTime2 == 7) {
  printOut("I can take the bus to school.")} 
else if (wakeUpTime2 == 8 || wakeUpTime2 == 6){
  printOut ("I have to take the car to school");
}
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let randomHour = getRandomInt(6, 8);

if (randomHour + 0 == 7) {

  printOut("I can take the bus to school.");
} else if (randomHour + 0 == 8) {
  printOut ("I can take the train to school.");
} else if (randomHour + 0 == 6) {
  printOut ("I have to take the car to school.");
} 

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text1 = "positivt";
const text2 = "negativt";
const text3 = "null";
let number = -1;
if (number > 0) {
  printOut("Tallet er " + text1);
} else if (number < 0) {
  printOut("Tallet er " + text2);
}
else if (number == 0) {
  printOut("Tallet er " + text3);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myNumber = Math.floor(Math.random()*8) + 1;
console.log ( "uploaded image size: " , myNumber , "MB");

if (myNumber < 4) {
  printOut ( "image is to small " );
} else if (myNumber >=6){
  printOut ( "image is to large" );
} else {
  printOut ( " Thanks for the upload " );
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("look at part 6");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["januar", "februar", "mars", "april", "mai", "juni", "juli", 
  "august", "september", "oktober", "november", "desember"];

  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  const daysInMonth ={
    januar: 31,
    februar: 28,
    mars: 31,
    april: 30,
    mai: 31,
    juni: 30,
    juli: 31,
    august: 31,
    september: 30,
    oktober: 31,
    november: 30,
    desember: 31
  };

  printOut ( "the month is " + monthName );
  printOut ( "it has " + daysInMonth[monthName] + " days" );

  if (monthName.toLowerCase().includes ("r")){
    printOut ( "you must take vitamin D" );
  } else {
    printOut ( "you do not need to take vitamin D" );
  }
  if (monthName === "mars" || monthName === "mai") {
  printOut ( "closed for remodeling" );
} else if (monthName === "april") {
  printOut ( "open at different venue" ) ;
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Check part 8");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Check part 8");

printOut(newLine);
