'use strict';

// Grazie a questi, l'utente potrà inserire gli input grazie al prompt
const firstName = prompt('Inserirsci il tuo nome');
const lastName = prompt('Inseririsci il tuo cognome');
const favColor = prompt('Inserisci il tuo colore preferito');

// Creazione password combinando gli input inseriti dall'utente 
const yourPassword = `${firstName}${lastName}${favColor}89`;

// Inerisco i dati negli id per la visualizzazione degli input
document.getElementById('firstName').innerHTML = firstName;
document.getElementById('lastName').innerHTML = lastName;
document.getElementById('favColor').innerHTML = favColor;
document.getElementById('yourPassword').innerHTML = yourPassword;

// Visualizzazione della password nella console
console.log(yourPassword);