// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare, se preferite fate un diagramma
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// 3. Usiamo dei valori fissi che ci aiutino a controllare il funzionamento dell’algoritmo, poi sostituiamo con random e prompt



const container = document.querySelector(".container")
let ask = prompt("dimmi una parola e ti dirò se è palindroma");

let askSplit = ask.split("");
let i = 0;
let falso = false
while (i < askSplit.length && falso == false) {
    if (askSplit[i] == askSplit[(askSplit.length - 1) - i]) {
        falso = false
    } else {
        falso = true
    }
    i++
}

if (falso == false) {
    container.innerHTML = "la parola è palindroma"
} else {
    container.innerHTML = "la parola non è palindroma"
}

