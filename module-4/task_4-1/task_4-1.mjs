"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const accountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "pensjonskonto"
};

printOut(Object.values(accountType).join(", "));
    


printOut(newLine);

printOut("--- Part 2, 3, 4, 5, 6 og 7  -----------------------------------------------------------------------------");
/* Put your code below here!*/

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske Kroner", denomination: "Kr" },
    EUR: { value: 0.0985, name: "Europeiske Euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States Dollars", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound Sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske Rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske Dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske Peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske Kroner", denomination: "Kr" },
    CAD: { value: 0.1435, name: "Canadiske Dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai Bath", denomination: "฿" },
    
};

class TAccount{
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    #currencyConvert(aType) {
        return CurrencyTypes.NOK.value /
            CurrencyTypes[this.#currencyType].value *
            aType.value;

    }
    constructor(aType){
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currencyType = "NOK";
    } 

    setCurrencyType (aType) { 
    if (this.#currencyType === aType){
        return;
    }
        let oldCurrency = this.#currencyType;

        this.#balance = this.#balance * this.#currencyConvert(CurrencyTypes[aType]);

        this.#currencyType = aType;

        printOut(
            "Valutaen er endret fra " + CurrencyTypes[oldCurrency].name +
            " til " + CurrencyTypes[aType].name
        );
    }


    //Balance på konto
    getBalance () {
        return this.#balance.toFixed(2) + CurrencyTypes[this.#currencyType].denomination;
    }
    //slutt på Balanse

     toString(){
        return this.#type;
    }
    setType(aType){
        const oldType = this.#type;
        this.#type = aType;
        this.#withdrawCount = 0;
        printOut("Account is changed from " + oldType + " to " + aType);
    }


    //innskudd og uttak.
    deposit (aAmount, aType) {
        if (aType === undefined) {
            aType = "NOK";
        } 
        let converted = aAmount * this.#currencyConvert(CurrencyTypes[aType]);
        this.#balance += converted;
        this.#withdrawCount = 0;
        let symbol = CurrencyTypes[this.#currencyType].denomination;

        printOut("Innskudd " + aAmount +" " + CurrencyTypes[aType].denomination + ", saldo er nå " + this.#balance.toFixed(2) + CurrencyTypes[this.#currencyType].denomination);
    }

    withdraw (aAmount, aType) {

        if (aType === undefined) {
            aType = "NOK";
        }
        let converted = aAmount * this.#currencyConvert(CurrencyTypes[aType]);
        switch (this.#type) {
            case "Pensjon":
                printOut("ingen uttak tilatt");
                return;
                //ingen uttak lov

            case "Sparekonto":
                if (this.#withdrawCount >= 3){
                    printOut("Maks uttak nådd");
                    return;
                }
                
                //Maks 3 uttak.

            default:
                break;
                //Vanelige uttak.
        }
        this.#withdrawCount++;
                this.#balance -= converted;
                printOut("utakk " + aAmount + " " + CurrencyTypes[aType].denomination + ", saldo er nå " + this.#balance.toFixed(2) + CurrencyTypes[this.#currencyType].denomination);
                return;
    }
    //slutt på innskudd og uttak.

   
}

const myAccount = new TAccount("brukskonto");

myAccount.setType("Sparekonto");
myAccount.deposit(150);

myAccount.setCurrencyType("SEK");
myAccount.setCurrencyType("USD");
myAccount.setCurrencyType("NOK");

myAccount.withdraw(10);
myAccount.withdraw(10);
myAccount.withdraw(10);
myAccount.withdraw(10);

printOut("Saldo = " + myAccount.getBalance());


printOut("myAccount = " + myAccount.toString());
myAccount.setType("Sparekonto");
printOut("myAccount = " + myAccount.toString());
myAccount.deposit(100);
myAccount.withdraw(200);
printOut("Saldo = " + myAccount.getBalance());
printOut(newLine);







