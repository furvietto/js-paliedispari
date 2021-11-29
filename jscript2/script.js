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
const container = document.querySelector(".container");

console.log(container);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function pariFunction(sum1,number1,computer1) {
    
    if (sum1 % 2 == 0) {
        container.innerHTML = `<h1>hai fatto ${number1} e il computer ${computer1} la somma è ${sum1} hai vinto tu</h1>`
    } else {
        container.innerHTML = `<h1>hai fatto ${number1} e il computer ${computer1} la somma è ${sum1} ha vinto il computer</h1>`
    }
}

function dispariFunction(sum1,number1,computer1) {
    
    if (sum1 % 2 == 1) {
        container.innerHTML = `<h1>hai fatto ${number1} e il computer ${computer1} la somma è ${sum1} hai vinto tu</h1>`
    } else {
        container.innerHTML = `<h1>hai fatto ${number1} e il computer ${computer1} la somma è ${sum1} ha vinto il computer</h1>`
    }
}
  

pari.addEventListener("click" , function () {
 
    let number = parseInt(prompt("inserisci un numero da 1 a 5"))
    while (number > 5 || number < 1) {
        number = parseInt(prompt("sbagliato inserisci un numero da 1 a 5"))
        console.log(number);
    }


    const computer = getRndInteger(1,5);
    let sum = computer + number;

    pariFunction(sum,number,computer);


})

dispari.addEventListener("click" , function () {
  
    let number = parseInt(prompt("inserisci un numero da 1 a 5"))
    while (number > 5 || number < 1) {
        number = parseInt(prompt("sbagliato inserisci un numero da 1 a 5"))
    }
    const computer = getRndInteger(1,5);
    let sum = computer + number;

    
    dispariFunction(sum,number,computer)
})