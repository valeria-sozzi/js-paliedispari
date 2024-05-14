/* Palindroma
Chiedere all'utente di inserire una parola
creare una funzione per capire se la parola inserita è palindroma 
*/

//chiedo all'utente di inserire una parola
const user_word = prompt('inserisci una parola')

//creo una funzione con un ciclo per reversare la parola e confrontarla con quella iniziale
function is_palindrom(word) {
 let second_word = '';
   
   for (let j = word.length-1; j >= 0; j--){
       second_word += word[j] 
   }
   
   if (word === second_word){
       return 'la parola da te inserita è palindroma'
   } else{
       return 'la parola da te inserita non è palindroma'
   } 
}

console.log(is_palindrom(user_word))


/* 

//funzione per separare la parola creando un array con le lettere (split('')), invertire l'array (reverse()) e ricreare la parola (join(''))

function reverseWord (word){
    return user_word.split('').reverse().join('')
}

//funzione per prendere la parola invertita e confrontarla con la parola inserita dall'utente
function is_palindrom(word) {
    const reverseWord = reverseWord(word)
    if (reverseWord === word){
        return true
    } else {
        return false
    }
}

if (is_palindrom(user_word)){
    console.log(user_word, 'è palindroma');
} else {
    console.log();
} */