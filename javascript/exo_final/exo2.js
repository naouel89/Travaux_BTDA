var form = document.querySelector('form');
var resultat = document.querySelector('#resultat');
var produit;
var ligne;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = parseInt(document.querySelector('#nombre').value);
  if (!isNaN(nombre)) {
    resultat.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
      produit = i * nombre;
      ligne = document.createElement('div');
      ligne.textContent = `${i} x ${nombre} = ${produit}`;
      resultat.appendChild(ligne);
    }
  }
});