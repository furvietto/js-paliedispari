// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

const pari = document.querySelector(".pari");
const dispari = document.querySelector(".dispari");

pari.addEventListener("click" , function () {
    
    const number = parseInt(prompt("inserisci un numero da 1 a 5"))
    // while (number > 5 || number < 1) {
    //     number = parseInt(prompt("sbagliato inserisci un numero da 1 a 5"))
    // }
    const computer = Math.floor(Math.random() * 5) + 1;
    let sum = computer + number;

    if (sum % 2 == 0) {
        console.log(sum);
        console.log("complimenti hai vinto tu")
    } else {
        console.log(sum);
        console.log("peccato ha vinto il computer")
    }


})

dispari.addEventListener("click" , function () {
    const number = parseInt(prompt("inserisci un numero da 1 a 5"))
    // while (number > 5 || number < 1) {
    //     number = parseInt(prompt("sbagliato inserisci un numero da 1 a 5"))
    // }
    const computer = Math.floor(Math.random() * 5) + 1;
    let sum = computer + number;

    
    if (sum % 2 == 1) {
        console.log(sum);
        console.log("complimenti hai vinto tu")
    } else {
        console.log(sum);
        console.log("peccato ha vinto il computer")
    }
})