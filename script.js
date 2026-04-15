const tabela = [
    { pos: 1, time: "Palmeiras", pts: 26 },
    { pos: 2, time: "Flamengo", pts: 20 },
    { pos: 3, time: "São Paulo", pts: 20 },
    { pos: 4, time: "Fluminense", pts: 20 },
    { pos: 5, time: "Bahia", pts: 20 },
    { pos: 6, time: "Athletico-PR", pts: 19 },
    { pos: 7, time: "Coritiba", pts: 16 },
    { pos: 8, time: "Atlético-MG", pts: 14 },
    { pos: 9, time: "Red Bull Bragantino", pts: 14 },
    { pos: 10, time: "Vitória", pts: 14 },
    { pos: 11, time: "Botafogo", pts: 13 },
    { pos: 12, time: "Grêmio", pts: 13 },
    { pos: 13, time: "Vasco", pts: 13 },
    { pos: 14, time: "Internacional", pts: 13 },
    { pos: 15, time: "Santos", pts: 13 },
    { pos: 16, time: "Corinthians", pts: 11 },
    { pos: 17, time: "Cruzeiro", pts: 10 },
    { pos: 18, time: "Remo", pts: 8 },
    { pos: 19, time: "Chapecoense", pts: 8 },
    { pos: 20, time: "Mirassol", pts: 6 }
];

const tbody = document.querySelector("#tabela tbody");
const dataAtualizacao = document.getElementById("data-atualizacao");

// Preencher tabela
tabela.forEach(time => {
    const tr = document.createElement("tr");

    if (time.pos <= 4) tr.classList.add("top4");
    if (time.pos >= 17) tr.classList.add("z4");

    tr.innerHTML = `
        <td>${time.pos}</td>
        <td>${time.time}</td>
        <td>${time.pts}</td>
    `;

    tbody.appendChild(tr);
});

const hoje = new Date();
dataAtualizacao.textContent =
    "Atualizado em: " + hoje.toLocaleDateString("pt-BR");