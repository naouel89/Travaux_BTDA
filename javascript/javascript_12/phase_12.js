let valeurs = []; // création d'un tableau vide pour stocker les valeurs saisies
let valeur = parseFloat(prompt("Saisissez une valeur :")); // demande de saisie de la première valeur

while (valeur !== 0) { // tant que la valeur saisie n'est pas égale à 0
  valeurs.push(valeur); // ajout de la valeur saisie au tableau
  valeur = parseFloat(prompt("Saisissez une autre valeur :")); // demande de saisie de la valeur suivante
}

let nbValeurs = valeurs.length; // nombre de valeurs saisies
let somme = 0; // initialisation de la somme à 0

for (let i = 0; i < nbValeurs; i++) { // boucle pour calculer la somme des valeurs
  somme += valeurs[i];
}

let moyenne = somme / nbValeurs; // calcul de la moyenne des valeurs

alert(`Nombre de valeurs saisies : ${nbValeurs}\nSomme des valeurs : ${somme}\nMoyenne des valeurs : ${moyenne}`); // affichage des résultats
