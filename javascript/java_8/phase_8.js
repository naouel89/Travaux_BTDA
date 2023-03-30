var combien_de_prenom = 0;

do
{
    combien_de_prenom++;
    var prenom =window.prompt ("saisir votre prénom : ");
    combien_de_prenom = parseInt(combien_de_prenom);
    var i = prenom;
} while (i != false);
combien_de_prenom--;
alert("vous avez saisi tant de prénom : " + combien_de_prenom);
location.reload();