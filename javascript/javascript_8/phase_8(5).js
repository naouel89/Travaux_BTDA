let mot = prompt("Entrez un mot : ");
let voyelles = "aeiouyAEIOUY"; // toutes les voyelles possibles

let nbVoyelles = 0;

for (let i = 0; i < mot.length; i++) {
  if (voyelles.indexOf(mot.substring(i, i+1)) !== -1) {
    nbVoyelles++;
  }
}

document.write("Le mot", + mot + "contient", + nbVoyelles + "voyelles.");
