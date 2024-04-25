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

async function logRollResult(charcareterName, block, diceResult, atribute) {
    console.log(`${charcareterName} 🎲 rolou um dado de ${block} ${diceResult} + ${atribute} = ${diceResult + atribute} `);
}

async function playRaceEngine(character1, character2) {

    for (let round = 1; round <= TotalRODADAS; round++) {
        console.log(`🏁 Rodada ${round}`);
        let block = await getRandomBlock();
        console.log(`Terreno: ${block}`);
        // console.log(`Bloco: ${block}`);
        //sortear bloco
        // rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let TotalTestSkill1 = 0;
        let TotalTestSkill2 = 0;

        if (block === "RETA") {
            TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            TotalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        } else if (block === "CURVA") {
            TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        } else {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}`);
            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto `);
                character2.PONTOS--;
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} venceu o confronto ${character1.NOME} perdeu 1 ponto `);
                character1.PONTOS--;
            }



            console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido" : "");
        }

        if (TotalTestSkill1 > TotalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto`);
            character1.PONTOS++;
        } else if (TotalTestSkill2 > TotalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto`);
            character2.PONTOS++;
        }
        console.log(`\n`)
        console.log('-'.repeat(50));
    }


}

async function declareWinner(character1, character2) {
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`${character1.NOME} foi o vencedor`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`${character2.NOME} foi o vencedor`);
    } else {
        console.log("A corrida terminou em empate");
    }
}
(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();

