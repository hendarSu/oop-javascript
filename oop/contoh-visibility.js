class Gameplay {
    constructor() { }

    static setSelector() {
        console.log("Hi this event selector!.");
    }

    scoreAkhir() {
        this.#showScore();
    }

    /**
     * Visibility private hanya kelas dia sendiri yang bisa memanggilnya.
     */
    #showScore() {
        console.log("Play 1 Win!");
    }


    /**
    * Visibility protected hanya kelas turunan yang bisa memanggilnya.
    */
    _getName() {
        console.log("Hi Myname player 1");
    }
}

/**
 * Module Helper
 * @param class parent
 * @returns 
 */
const TopScore = Base => class extends Base {
    showScore() {
        console.log("Anda Score Tertinggi");
    }
}

class Player extends TopScore(Gameplay) {
    constructor() {
        super()
    }

    getName() {
        super._getName(); // method private dari parent class.
        super.showScore();
    }
}

class Computer extends TopScore(Gameplay) {
    constructor() {
        super()
    }

    getName() {
        super._getName(); // method protected dari parent class.
        super.showScore();
    }
}


// Gameplay.setSelector(); // visibilty static

// const gameplay = new Gameplay();
// gameplay.scoreAkhir(); // visibilty public method

// const player = new Player();
// player.getName();

// This is example for encapsulation
class ATM {
    constructor() { 
        if (this.constructor === ATM) {
            console.log("Ini Kelas Abstract");
        }
    }

    /**
     * This is method private
     */
    #getBalance() { // Private
        console.log("Saldo Anda 1Rp.");
    }

    /**
     * This is method private
     */
    #validationPin() {
        console.log("Pin Anda Benar 1234");
    }

    /**
     * This is method protected
     */
    _showInformationNasabah() {
        this.#validationPin();
        this.#getBalance();

        console.log(" Testing ATM bukan Abstract :Terimakasih Hendar");
    }
}

class Nasabah extends ATM {
    constructor() {
        super();
    }

    showProfile() {
        super._showInformationNasabah();
    }
}

const hendar = new Nasabah();
hendar.showProfile();

