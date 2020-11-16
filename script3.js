//début 
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];// notre tableau
var saisi = window.prompt("voici la liste des prénoms "+tab+" entrer le prénom à effacer")// notre fenetre de saisi du prénom


var suprenommin = String(saisi).charAt(0).toUpperCase() + String(saisi).slice(1).toLowerCase();// on met la premiére lettre en majuscule et le reste du mot en minuscule

//maintenant on lance la recherche l'effacement et le retour du tableau
if(tab.includes(suprenommin))// on lance la recherche du mot saisi par suprenommin
{

	tab.splice(tab.indexOf(suprenommin),1);// on supprime par rapport l'index
	tab.push(" ");//on le remplace par un espace vide

	alert("Voici la nouvelle liste "+tab)//on affiche le resultat
	console.log(tab)//on affiche dans la console le resultat
}
else
{
	alert("je n'ai pas trouvé le prénom")
	console.log(tab)//on affiche dans la console le resultat
}
//fin