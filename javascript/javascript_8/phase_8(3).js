let sum = 0;
let count = 0;
let input;

do {
  input = parseInt(prompt("Entrez un entier (0 pour arrêter la saisie) :"));
  if (!isNaN(input) && input !== 0) {
    sum += input;
    count++;
  }
} while (input !== 0);

const average = count > 0 ? sum / count : 0;

window.alert("Somme :" + sum + "Moyenne : "+average);

