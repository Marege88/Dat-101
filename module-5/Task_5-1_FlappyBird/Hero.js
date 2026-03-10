"use strict";
import {TSprite} from "libSprite";
import { EGameStatus, menu} from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const fnfood = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite {
    #gravity;
    #speed;
    #wave;
    #sffood;
    #sfHeroIsDead;
    #sfGameOver;
    constructor (aSpcvs, aSPI) {
        super (aSpcvs, aSPI, 100, 100);
        this.animationSpeed = 15;
        this.#gravity = 9.81 / 98;
        this.#speed = 0;
        this.debug = true; 
        this.#wave = new TSineWave (1, 1);
        this.y += this.#wave.value;
        this.#sffood = null;
        this.#sfHeroIsDead = null;
        this.#sfGameOver = null;
    }

    animate() {
      const hasGravity = 
        EGameStatus.state === EGameStatus.gaming ||
        EGameStatus.state === EGameStatus.heroIsDead;
      if (EGameStatus.state === EGameStatus.gaming){
        if(this.y < 400 - this.height) {
          this.#speed += this.#gravity;
          this.y += this.#speed;
          if (this.rotation < 90){
          this.rotation = this.#speed * 25;
        }
      }
    else {
      EGameStatus.state = EGameStatus.gameOver;
      menu.stopSound();
      this.#sfGameOver = new TSoundFile (fnGameOver);
      this.#sfGameOver.play();
      this.animationSpeed = 0;
    }
  }else if (EGameStatus.state === EGameStatus.idle){
    this.y += this.#wave.value;
  }
  }
  eat(){
    if (this.#sffood === null){
      this.#sffood = new TSoundFile (fnfood);
    } else{
      this.#sffood.stop();
    }
    this.#sffood.play();
  }
  // end of animate.
  dead(){
    this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    this.#sfHeroIsDead.play();
  }
  flap(){
    this.#speed = -2.5;
    this.rotation = 0;
  }
}
