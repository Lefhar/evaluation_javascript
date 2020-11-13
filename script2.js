//début
function multplication()//fonction multiplication
{
    //on déclare result
    var result =""
    //on demande un nombre
    var nbr = parseInt(window.prompt("Entrer un nombre pour afficher sa table de multiplication"))
    
    for(i=1;i<=10;i++)//on commence à 1 ensuite on fait +1 jusqu'à temps que i est égal à 10
    {

        var egal = nbr*i// on multiplie l'entré nbr par i qui va partir de 1 et aller jusqu'à 10
        result += nbr+"x"+i+"="+egal+"<br>" //on affiche à affiche chaque multiplication

    }

    //on affiche le résultat final
    document.write(result)
}
//fin