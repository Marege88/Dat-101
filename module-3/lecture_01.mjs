"use strict"
import {printOut} from "../../common/script/utils.mjs";

const text1 = "du kan ta med en voksen";
const text2 = "du kan gå på kino";
const text3 = "du er ikke gammel nok til å se denne filmen";

const ageMovie = 16;
const ageBringAlong = 18;
let age1 = 14; // er gammel nok til å ta med en person.
let age2 = 19; // er ikke gammel nok til å gå alene.

if (age1 >= ageMovie) {
  printOut("person1 " + text2);
}
if (age2 >= ageMovie) {
  printOut(text2);
}else if (age1 >= ageBringAlong) {
  printOut("person2 " + text1);
}
else {
  printOut("person2 " + text3);
}
else {
    printOut ( "vi har ingen case for dette" )
}