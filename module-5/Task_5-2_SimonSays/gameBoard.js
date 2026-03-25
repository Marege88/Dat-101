"use strict";

//objekts
import {TSprite} from "libSprite";
import { TColorButton } from "./collorButton.js";

export class TGameBoard extends TSprite{
    #colorButtons;
    constructor (aSpcvs, aSPI) {
    super(aSpcvs, aSPI.Background, 0, 0);
    this.#colorButtons = [
        new TColorButton (aSpcvs, aSPI.ButtonRed)
    ];
}
}




