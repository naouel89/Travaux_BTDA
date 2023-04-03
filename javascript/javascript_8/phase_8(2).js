let calcul=1;
let nombre = window.prompt ("saisissez un nombre entier : ")
while (calcul < nombre)
{
    if (calcul == 0)
    {
        calcul++;
        continue;
    }
    window.alert("Nombre : " + calcul );
    calcul++;
}