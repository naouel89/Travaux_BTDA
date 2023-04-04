
function validateForm() {
	// Vérification de la société
	var societe = document.forms["contactForm"]["societe"].value;
	if (societe == "") {
		alert("Veuillez saisir une société.");
		return false;
	}
	// Vérification de la personne à contacter
	var personne = document.forms["contactForm"]["personne"].value;
	if (personne == "") {
		alert("Veuillez saisir une personne à contacter.");
		return false;
	}
	// Vérification du code postal
	var codePostal = document.forms["contactForm"]["codePostal"].value;
	if (codePostal == "" || isNaN(codePostal) || codePostal.length != 5) {
		alert("Veuillez saisir un code postal valide.");
		return false;
	}
	// Vérification de la ville
	var ville = document.forms["contactForm"]["ville"].value;
	if (ville == "") {
		alert("Veuillez saisir une ville.");
		return false;
	}
	// Vérification de l'email
	var email = document.forms["contactForm"]["email"].value;
	if (email == "" || !email.includes("@")) {
		alert("Veuillez saisir un email valide.");
		return false;
	}
	return true;
}