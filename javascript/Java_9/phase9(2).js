const str1 = "robert;dupont;amiens;80000";
const str2 = ";";
const n = 3;
const result = strtok(str1, str2, n); // retourne "amiens"3
function strtok(str1, str2, n) {
    const words = str1.split(str2); // sépare str1 en un tableau de mots
    return words[n - 1]; // retourne le nième mot (soustrait 1 pour l'indice 0-based du tableau)
  }
