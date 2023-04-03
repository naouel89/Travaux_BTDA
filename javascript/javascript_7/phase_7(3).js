function rslt()
{  
    var nombr1 = document.forms["calculatrice"].nb1.value;
    var nombr2 = document.forms["calculatrice"].nb2.value;
    var resultat;
     
    switch (document.calculatrice.operateur.value)
    {
        case '+':
        resultat =parseFloat(nombr1) + parseFloat(nombr2) ;
        break;
        case '-':
        resultat =parseFloat(nombr1) - parseFloat(nombr2);
        break;
        case '*':
        resultat =parseFloat(nombr1) * parseFloat(nombr2);
        break;
        case '/':
        resultat =parseFloat(nombr1) / parseFloat(nombr2);
        break;
        default:
        document.calculatrice.mess.value = "Verifier votre operation";
        break;
    }
    document.forms["calculatrice"].ecran.value = resultat;
}