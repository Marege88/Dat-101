"use strict"
import { ComputerAnswers } from "./Mastermind.mjs";
import { playerAnswers } from "./colorPicker";

export function checkAnswer() {
    const c = [];
    for (let i = 0; i < ComputerAnswers.length; i++){
        c.push(ComputerAnswers[i]);
    }
    const p = [];
    for (let i = 0; i < playerAnswers.lenth; i++){
        p.push(playerAnswers[i]);
    }
}