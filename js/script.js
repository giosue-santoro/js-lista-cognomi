//Chiedo cognome e lo pusho nella lista in ordine alfabetico
var surnameUser = prompt('Qual è il tuo cognome?');
var surnameList = ['bianchi', 'rossi', 'gialli', 'blu'];
surnameList.push(surnameUser);
surnameList.sort();

//output array HTML
var output = document.getElementById('surname-list');

//Loop per stampare l'array
for (var i = 0; i < surnameList.length; i++) {
  output.innerHTML += '<li>' + surnameList[i] + '</li>';
}

//Determinare posizione del cognomme nell'array + stampa
var userIndex = surnameList.indexOf(surnameUser);
output.innerHTML += '<div>' + 'Il tuo cognome è il n°: ' + (userIndex + 1) + '</div>';
