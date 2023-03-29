var nombre1 = window.prompt("saisir un chiffre entier :");
nombre1 = parseInt(nombre1);
var operation = window.prompt("quelles opération voulez vous faire ?    " + "   1 = addition  " + " 2 = soustraction   " + "   3 = multiplication    " + " 4 = division   ");
var nombre2 = window.prompt("saisir un autre chiffre entier :");
nombre2 = parseInt(nombre2);

operation = parseInt(operation);


if (operation < 1 || operation > 4) 
{
    alert("Erreur!");
    location.reload();
}
else 
{
    if (operation == 1) {
        operation = nombre1 + nombre2;
        alert("vous avez fait une addiction = " + operation);
        location.reload();
    }
    else if (operation == 2) {
        operation = nombre1 - nombre2;
        alert("vous avez fait une soustraction = " + operation);
        location.reload();
    }
    else if (operation == 3) 
    {
        operation = nombre1 * nombre2;
        alert("vous avec fait une multiplication = " + operation);
        location.reload();
    }
    else if (operation == 4) 
        if (nombre1==0 || nombre2==0)
        {
            alert("impossible");
            location.reload();
        }
    else{
        operation = nombre1 / nombre2;
        alert("vous avec fait une division = " + operation );
        location.reload();
    }
}