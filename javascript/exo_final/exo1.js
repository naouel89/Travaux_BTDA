let age;
let nbMoins20 = 0;
let nbEntre20et40 = 0;
let nbPlus40 = 0;

do {
  age = parseInt(prompt("Entrez l'âge de la personne :"));
  
  if (age < 20) {
    nbMoins20++;
  } else if (age >= 20 && age <= 40) {
    nbEntre20et40++;
  } else if (age > 40) {
    nbPlus40++;
  }
} while (age < 100);

alert("Il y a " + nbMoins20 + " personne(s) de moins de 20 ans, " + nbEntre20et40 + " personne(s) entre 20 et 40 ans inclus, et " + nbPlus40 + " personne(s) de plus de 40 ans.");