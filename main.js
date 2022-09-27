let budget = 1000;
document.getElementById('budgetiniziale').innerHTML = 'Punto di partenza:'+ budget + '$';

let dispositiviElettronici = [300, 150, 200, 100]

for (let i = 0; i < dispositiviElettronici.length; i++) {
    document.getElementById('contenitore').innerHTML +=  `<button onclick="sottrazione(${dispositiviElettronici[i]})">elemento $${dispositiviElettronici[i]}</button>`
}

function sottrazione(prezzo) {
    budget -= prezzo
    document.getElementById('budgetiniziale').innerHTML = budget + '$';
    if (budget <= 500 && budget >= 400) {
        prompt("Sei a metà prezzo")
    }
    if (budget <= 100 && budget >= 50) {
        prompt("Ti consiglio di non acquistare nulla")
    }
    if (budget <= 0) {
        prompt("Non puoi acquistare più nulla ti abbiamo fatto lo sconto di già")
    }
}