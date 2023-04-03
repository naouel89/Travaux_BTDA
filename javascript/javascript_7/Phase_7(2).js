/* si je suis née en 2005 ou moins
        je suis majeur
    sinon
        je suis mineur
*/

var annee_naissance = window.prompt ("votre année de naissance ?") ;

var latedate = new Date ();
var age = latedate.getFullYear() - annee_naissance;
age = parseInt (age);
    if(age >= 18)
{
alert ( "vous avez " + age + "ans vous etes donc majeur");
}
    else(age < 18)
{
alert ( "vous avez " + age + "ans vous etes donc mineur");
}