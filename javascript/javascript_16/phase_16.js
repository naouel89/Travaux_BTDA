var societe = document.getElementById("societe").value;
var personne = document.getElementById("presonne à contacter").value;
var codePostal = document.getElementById("code postal").value;
var ville = document.getElementById("ville").value;
var email = document.getElementById("email").value;
var telephone = document.getElementById("telephone").value;
alert ("panpan");
function validateForm() {
	
	// Vérification de la société
	societe = document.forms["contactForm"]["societe"].value;
	if (societe == "") {
		alert("Veuillez saisir une société.");
		return false;
	}
	// Vérification de la personne à contacter
	personne = document.forms["contactForm"]["personne"].value;
	if (personne == "") {
		alert("Veuillez saisir une personne à contacter.");
		return false;
	}
	// Vérification du code postal
	codePostal = document.forms["contactForm"]["codePostal"].value;
	if (codePostal == "" || isNaN(codePostal) || codePostal.length != 5) {
		alert("Veuillez saisir un code postal valide.");
		return false;
	}
	// Vérification de la ville
	ville = document.forms["contactForm"]["ville"].value;
	if (ville == "") {
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
	if (email == "") {
		alert("Veuillez saisir un numéro de telephone valide.");
		return false;
	}
	return true;
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
}
	const form = document.querySelector('form');
	form.addEventListener('submit'), (event) => {
		event.preventDefault(); // Empêche le formulaire de se soumettre normalement
  function resetForm() {
	form.reset(); // Réinitialise le formulaire
  }
}
