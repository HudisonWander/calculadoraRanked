// Constante níveis de elo e a variável de vitórias e derrotas.
const elo = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let vitorias = calcularVitorias (200, 145)

// Função para calcular o número de vitórias.
function calcularVitorias (vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado;
}

// Estrutura IF 
if (vitorias <= 10) {
    console.log("O Herói tem o saldo de " + vitorias + " vitórias e está no elo " + elo[0])
}
else if (vitorias === 11 || vitorias <= 20) {
    console.log("O Herói tem o saldo de " + vitorias + " vitórias e está no elo " + elo[1])
}
else if (vitorias === 21 || vitorias <= 50) {
    console.log("O Herói tem o saldo de " + vitorias + " vitórias e está no elo " + elo[2])
}
else if (vitorias === 51 || vitorias <= 80) {
    console.log("O Herói tem o saldo de " + vitorias + " vitórias e está no elo " + elo[3])
}
else if (vitorias === 81 || vitorias <= 90) {
    console.log("O Herói tem o saldo de " + vitorias + " vitórias e está no elo " + elo[4])
}
else if (vitorias === 91 || vitorias <= 100) {
    console.log("O Herói tem o saldo de " + vitorias + " vitórias e está no elo " + elo[5])
}
else if (vitorias >= 101) {
    console.log("O Herói tem o saldo de " + vitorias + " vitórias e está no elo " + elo[6])
}
else {
    console.log("O Heró não tem histórico em partidas rankeadas!")
}
