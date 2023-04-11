var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var codePostal = document.getElementById("code postal").value;
var adresse = document.getElementById("adresse").value;
var email = document.getElementById("email").value;
var telephone = document.getElementById("telephone").value;
window.alert ("panpan");
function validateForm() {
	
	// Vérification de la société
	nom = document.forms["contactForm"]["nom"].value;
	if (nom == "") {
		alert("Veuillez saisir une société.");
		return false;
	}
	// Vérification du nom
	prenom = document.forms["contactForm"]["personne"].value;
	if (prenom == "") {
		alert("Veuillez saisir une personne à contacter.");
		return false;
	}
	// Vérification du code postal
	codePostal = document.forms["contactForm"]["codePostal"].value;
	if (codePostal == "" || isNaN(codePostal) || codePostal.length != 5) {
		alert("Veuillez saisir un code postal valide.");
		return false;
	}
	// Vérification de la adresse
	adresse = document.forms["contactForm"]["adresse"].value;
	if (adresse == "") {
		alert("Veuillez saisir une ville.");
		return false;
	}
	// Vérification de l'email
	email = document.forms["contactForm"]["email"].value;
	if (email == "" || !email.includes("@")) {
		alert("Veuillez saisir un email valide.");
		return false;
	}
	
	// Vérification de telephone
	telephone = document.forms["contactForm"]["telephone"].value;
	if (telephone == "") {
		alert("Veuillez saisir un numéro de telephone valide.");
		return false;
	}
	return true;
}
function hideSelectedOption() {
		var selectBox = document.getElementById("choix");
		var selectedValue = selectBox.options[selectBox.selectedIndex].value;
		for (var i = 0; i < selectBox.options.length; i++) {
			if (selectBox.options[i].value === selectedValue) {
				selectBox.remove(i);
				break;
			}
		}
	}
	const form = document.querySelector('form');
	form.addEventListener('submit'), (event) => {
		event.preventDefault(); // Empêche le formulaire de se soumettre normalement
  function resetForm() {
	form.reset(); // Réinitialise le formulaire
  }
}
