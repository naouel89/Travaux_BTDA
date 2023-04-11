var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom;
var index;
var i;

// On demande à l'utilisateur de saisir un prénom
prenom = prompt("Entrez un prénom à supprimer :");

// On recherche l'indice du prénom dans le tableau
index = tab.indexOf(prenom);

// Si le prénom est trouvé, on le supprime en décalant les cases qui le suivent
if (index !== -1) {
  for (i = index; i < tab.length - 1; i++) {
    tab[i] = tab[i + 1];
  }
  tab[tab.length - 1] = " ";
  alert("Le prénom a été supprimé avec succès !");
} else {
  alert("Le prénom n'a pas été trouvé dans le tableau.");
}

// Affichage du tableau après suppression du prénom
document.write(tab);
location.reload();