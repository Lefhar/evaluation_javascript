//début
var jeune =0//valeur par defaut 0
var jeunes ="s"// pour le pluriel 
var moyen =0//valeur par defaut 0
var moyens ="s"// pour le pluriel 
var senior =0//valeur par defaut 0
var saisi = 0//valeur par defaut 0

 do 
    {//on lui dit de faire
    saisi=parseInt(window.prompt("Entrez votre âge (on s'arrête des un centenaire)"))// on demande l'âge
   
            // si saisi est inférieur à 20 alors on met +1 a jeune
            if(saisi < 20)
            {
                jeune++
            }//on ferme la condition

            //si l'âge est compris entre 20 et 40 ans alors +1 a moyen
            if(saisi >= 20 && saisi<= 40)
            {
                moyen++
            }//on ferme la condition

            //si la saisi est supérieur à 40 ans alors on rajoute 1 senior
            if(saisi > 40 )
            { 
                senior++
            }//on ferme la condition
    }//on ferme do

    while(saisi<100)//boucle tant que la saisi est pas de 100 ou plus

    if(jeune<=1){var jeunes =""}// pour le singulier 
    if(moyen<=1){var moyens =""}// pour le singulier 

 document.write("il y a "+jeune+ " jeune"+jeunes+", "+moyen+" moyen"+moyens+", "+senior+ " vieux ")//on affiche les données
//fin