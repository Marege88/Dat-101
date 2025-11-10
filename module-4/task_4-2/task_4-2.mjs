"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printOut ("Lengde = " + part1Array.length + ", Verdi = " + part1Array[part1Array.length - 1]);
let part1Text = "";
for (let i = 0; i < part1Array.length; i++, -1) {
    const value = part1Array[i];
    if (i === part1Array.length -1){
        part1Text += value.toString() + ".";
    }
    else { 
        part1Text += value.toString() + ", ";
    }
}
printOut (part1Text)

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part2Text = part1Array.join (", ");
printOut (part2Text);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Greeting = "Hello there, how are you?";
const greetingArray = part3Greeting.split (" ");
let part3Text = "";
for (let i = 0; i < greetingArray.length; i++){
    const word = greetingArray[i];
    // here you can remove unwanted characters eg: , ? et.//
    part3Text += "index: " + i.toString() + " = " + word + newLine;
}
printOut (part3Text);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const arrayGirls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeFromArray (aArray, aName){
    let deleteIndex = -1;
    for (let i = 0; i < aArray.length; i++){
        const name = aArray[i];
        
        if (name === aName){
            //her kan vi slette elementet for eksempel "Hilde"
            // Dette gjør vi ikke her! her løper vi igjennom, og må slette senere.
            // vi må lagre indexen i en variable.
            deleteIndex = i;
         
            
        }
    //teste om jeg kan slette.
    }if (deleteIndex >= 0){
        printOut (aName + " is found, and deletet. ");
        
        aArray.splice (deleteIndex, 1);
        
    }else{
        printOut (aName + " is not found!");
    }
}
   removeFromArray(arrayGirls, "Hilde");
            printOut(arrayGirls.length);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const arrayBoys ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",  
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus"]
const part5BoysGirls (arrayGirls.join, arrayBoys.join);  
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
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
