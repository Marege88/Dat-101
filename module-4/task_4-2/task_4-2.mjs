"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printOut ("Lengde = " + part1Array.length + ", Verdi = " + part1Array[part1Array.length - 1]);
let part1Text = "";
for (let i = 0; i < part1Array.length; i++) {
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
const arrayBoys = ["Jakob", "Lukas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]
const part5BoysGirls = arrayGirls.join(", ") + ", " + arrayBoys.join(", ");  
printOut(part5BoysGirls);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    toString () {
        return this.title + " - " + this.author + " - " + this.isbn;
    }
}
const books = [
    new TBook("Book1", "Author1", "123"),
    new TBook("Book2", "Author2", "456" ),
    new TBook("Book3", "Author3", "789"),
    ];
    for (let i = 0; i < books.length; i++) {
        printOut(books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};
const keys = Object.keys(EWeekDays);

for (let i = 0; i < keys.length; i++){
    const key = keys[i];

    printOut(EWeekDays[key].name);
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [];
for (let i = 0; i < 35; i++){
    let randomNumber = Math.floor(Math.random() * 20) +1;
    numbers.push(randomNumber);
}
printOut(numbers.join(", "));

numbers.sort(function(a, b) {
    return a - b;
});
printOut ("Ascending: " + numbers.join(", "));

numbers.sort(function(a, b) {
    return b - a;
});
printOut ("Descending: " + numbers.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequency = {};

for(let i = 0; i < numbers.length; i++) {
    const value = numbers[i];

    if (frequency[value]) {
        frequency[value]++;
    } else {
        frequency[value] = 1;
    }
}
for (let key in frequency) {
    printOut (key + " = " + frequency[key]);
}
const entries = Object.entries(frequency);
entries.sort(function(a, b) {
    if (b[1] !== a[1]) {
        return b[1] - a[1];
    } 
    return a[0] - b[0];
});
for (let i = 0; i < entries.length; i++) {
    const number = entries[i][0];
    const count = entries[i][1];

    printOut("Tallet " + number + " kommer " + count + " ganger");
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const matrix = [];
for (let row = 0; row < 5; row++) {
    const currentRow = [];

    for(let col = 0; col < 9; col++) {
        currentRow.push("Row " + row + " Col " + col);
    }

    matrix.push(currentRow); 
}
    for(let row = 0; row < matrix.length; row++) {
        let line = "";

        for (let col = 0; col < matrix[row].length; col++) {
            line += matrix[row][col] + " | ";
        }
        printOut (matrix[row].join(" | "));
}
printOut(newLine);
