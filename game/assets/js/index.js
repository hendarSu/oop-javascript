const POKEMON_IMG = document.querySelectorAll(".pokemon-img");
const POKEMON_IMG2 = document.querySelectorAll(".pokemon-img-p2");

let seletP1 = null;
let seletP2 = null;

function reset() {
    window.location.reload();
}

POKEMON_IMG.forEach(item => {
    item.addEventListener("click", () => {
        POKEMON_IMG[0].classList.remove("selected");
        POKEMON_IMG[1].classList.remove("selected");
        POKEMON_IMG[2].classList.remove("selected");

        item.classList.add("selected");
        const VALUE_SELECTED = item.getAttribute("value");
        showLogSelected("p1 " + VALUE_SELECTED);

        seletP1 = VALUE_SELECTED;

        const arena = new Arena();
        arena.arenaRumble();
    })
});

POKEMON_IMG2.forEach(item => {
    item.addEventListener("click", () => {
        POKEMON_IMG2[0].classList.remove("selected-p2");
        POKEMON_IMG2[1].classList.remove("selected-p2");
        POKEMON_IMG2[2].classList.remove("selected-p2");

        item.classList.add("selected-p2");
        const VALUE_SELECTED = item.getAttribute("value");
        showLogSelected("p2 " + VALUE_SELECTED);

        seletP2 = VALUE_SELECTED;

        const arena = new Arena();
        arena.arenaRumble();
    })
});


function showLogSelected(value) {
    console.log(`LOG_SELECTED : Ini Pilihan Pokemon Anda : ${value}`);
}


// Implementasi class
class Arena {
    arenaRumble() {
        if (seletP1 && seletP2) {
            this.calculateScore(seletP1, seletP2)
        } else {
            console.log("LOG_ARENA : Masih ada yg belum memilih Pokemom!");
        }
    }

    calculateScore(seletP1, seletP2) {
        if (seletP1 === seletP2) {
            this.showScore(null);
        } else if (seletP1 === "Pokemon_Air" && seletP2 === "Pokemon_Api") {
            this.showScore("Player 1");
        } else if (seletP1 === "Pokemon_Air" && seletP2 === "Pokemon_Angin") {
            this.showScore("Player 2");
        } else if (seletP1 === "Pokemon_Api" && seletP2 === "Pokemon_Air") {
            this.showScore("Player 2");
        } else if (seletP1 === "Pokemon_Api" && seletP2 === "Pokemon_Angin") {
            this.showScore("Player 2");
        } else if (seletP1 === "Pokemon_Angin" && seletP2 === "Pokemon_Api") {
            this.showScore("Player 1");
        } else if (seletP1 === "Pokemon_Angin" && seletP2 === "Pokemon_Air") {
            this.showScore("Player 1");
        }
    }

    showScore(winner) {
        const pokemon_result = document.getElementById('pokemon-result');
        pokemon_result.innerHTML = "";
        if (winner) {
            pokemon_result.innerHTML = "Selamat <b>" + winner + "</b> Menang";
            console.log("LOG_SCORE : Selamat " + winner + " Menang");
        } else {
            pokemon_result.innerHTML = "Seriiii yaa!";
            console.log("LOG_SCORE : Seriiii yaa!");
        }

        pokemon_result.style.color = "#dc3545";
    }
}