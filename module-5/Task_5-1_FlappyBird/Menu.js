"use strict";
import {TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame } from "./FlappyBird.mjs";
import {TSoundFile } from "libSound";

const fnCountDown = "./media/countDown.mp3";
const fnRunning = "./media/running.mp3";


export class TMenu{
    #spTitle;
    #spPlayBtn;
    #spCountDown;
    #sfCountDown;
    #sfRunning;
    #spGameScore;
    constructor(aSpcvs, aSPI){
        this.#spTitle = new TSprite (aSpcvs, aSPI.flappyBird, 200, 100);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
        this.#spCountDown.visible = false;
        this.#spTitle.hidden = false;
        this.#sfCountDown = null;
        this.fnRunning = null;
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
        this.#spGameScore.alpha = 0.5;
    }

    incGameScore(aScore){
        this.#spGameScore.value += aScore;
    }

    stopSound(){
        this.#sfRunning.stop();
    }

    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountDown.draw();
        this.#spGameScore.draw();
    }

    countDown(){
        if (this.#spCountDown.value > 0){
            this.#spCountDown.value--;
            setTimeout(this.countDown.bind(this), 1000);
        }  
           else {
            startGame()
            this.#spCountDown.visible = false;
            this.#spTitle.hidden = true;
            this.#sfRunning = new TSoundFile (fnRunning);
            this.#sfRunning.play();
           }
        
    }

    spPlayBtnClick(){
        console.log("click!");
        this.#spPlayBtn.hidden = true;
        this.#spCountDown.visible = true;
        this.#spCountDown.value = 4;
        this.#spTitle.hidden = false;
        this.#sfCountDown = new TSoundFile(fnCountDown);
        this.#sfCountDown.play();
        this.countDown();
    }
}