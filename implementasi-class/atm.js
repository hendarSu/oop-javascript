export class ATM {
    constructor() {}

    #getBalance() {
        console.log("Saldo Anda 1Rp.");
    }

    #validationPin() {
        console.log("Pin Anda Benar 1234");
    }

    _showInformationNasabah() {
        this.#validationPin();
        this.#getBalance();

        console.log("Terimakasih Hendar");
    }
}
