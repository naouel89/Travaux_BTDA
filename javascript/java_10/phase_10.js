// Demande à l'utilisateur la taille du tableau
let taille = prompt("Entrez la taille du tableau :");

// Convertit la taille en nombre entier
let tailleEntiere = parseInt(taille, 10);

// Crée un tableau vide de la taille saisie
let tableau = new Array(tailleEntiere);

// Remplit le tableau avec les valeurs saisies par l'utilisateur
for (let i = 0; i < tailleEntiere; i++) {
  let valeur = prompt(`Entrez la valeur ${i+1} :`);
  tableau[i] = valeur;
}

// Affiche le contenu du tableau
window.alert (tableau);