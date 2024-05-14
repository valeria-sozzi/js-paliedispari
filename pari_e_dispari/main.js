/* 
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5 
generiamo un numero random (da 1 a 5) per il pc (usando una funzione)
sommiamo i due numeri
stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
dichiariamo chi ha vinto
*/

let somma=0
//chiediamo all'utente di scegliere tra pari e dispari
const pariDispari = prompt('scegli se vuoi pari o dispari')
console.log(pariDispari);

//chiediamo di inserire un numero da 1 a 5 
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log(userNumber);

//funzione per generare un numero random per il pc da 1 a 5 
/**
 * 
 * @param {number} min numero minimo che puo generare
 * @param {number} max numero massimo che puo generare
 * @returns {number}
 */
function pcNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pc_number = pcNumber (1,5)
console.log(pc_number);

//somma dei due numeri

somma = userNumber + pc_number
console.log(somma);

//stabilire se la somma è pari o dispari
/**
 * 
 * @param {number} sommaNumber la somma dei numeri in considerazione
 * @returns {boolean}
 */
function isEven(sommaNumber) {
    if (somma % 2 === 0 ){
        return true;
    } else {
        return false
    }
}

console.log(isEven(somma), somma);

//dichiarare il vincitore

if (pariDispari ==='pari' && isEven(somma)){
    console.log('Hai vinto');
}else if (pariDispari==='dispari' && !isEven(somma)){
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}