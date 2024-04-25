const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};


TotalRODADAS = 5

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    if (random < 0.33) {
        result = "RETA";
    } else if (random < 0.66) {
        result = "CURVA";
    } else {
        result = "CONFRONTO";
    }

    return result;
}

async function playRaceEngine(character1, character2) {

    for (let round = 1; round <= TotalRODADAS; round++) {
        console.log(`🏁 Rodada ${round}`);
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        //sortear bloco
    }

}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`);

    await playRaceEngine(player1, player2);

})();

