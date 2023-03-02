//SELECTION
/*
//CAS 1 - On a besoin d'une seule balise/noeud
let noeud = document.getElementById("t1");
console.log(noeud);
*/

/*
//CAS 2 - On potentiellement besoin de plusieurs balises/noeuds
let noeud = document.getElementsByTagName("h1"); //idem className Name(attribut name des input)
console.log(noeud)
*/

/*
//CAS 3 - On utilise les sélecteurs CSS
//let liste = document.querySelector("h1"); //Renvoi seulement le 1er élément
let liste = document.querySelectorAll("h1"); //Renvoi tous éléments
    //Crée une liste qui DOIT ÊTRE décomposée par une boucle pour agir dessus
    liste.forEach(function(n,i){
        console.log(n);
    })
console.log(liste);
*/

//LECTURE ET MODIFICATIONS DE NOEUD
//Sélection nécessaire
let n = document.querySelector("#t1");

//Contenu
console.log(n.innerHTML);   //Lecture (que du contenu) du noeud
n.innerHTML = "Hello !";    //Écriture 

//ID
n.id = "titre1";            //Écriture
console.log(n.id);          //Lecture

//CLASS
//équivalent n.className="italique rouge";     //Écriture comme chaîne
n.classList.add("italique");                   //Écriture en "push"
n.classList.add("rouge");
n.classList.remove("rouge");
n.classList.toggle("rouge");                //inverse la présence (ou non) de la classe
console.log(n.className);   //Lecture

//STYLES
n.style.cssText="color:blue;text-decoration:underline" //modification du style (priorité sur CSS parce qu'insérer dans la balise HTML)
n.style.background="teal";          //autre méthode

//AUTRES ATTRIBUTS
n.setAttribute("title","infobulle");    //Écriture

/*
//CRÉATION D'ÉLÉMENTS ET AJOUT DANS LE DOM - V1 - Permet de contrôler le noeud généré
//On prépare la balise
let nouvelleBalise = document.createElement("a");   //Ajout <a></a>
nouvelleBalise.innerHTML="Bouton";                  //<a>Bouton</a>
nouvelleBalise.setAttribute("href","#");            //<a href="#">Bouton</a>
//On sélectionne le conteneur
let conteneur = document.querySelector("#conteneur");
//On procède à l'injection dans le DOM
conteneur.appendChild(nouvelleBalise);
*/

//CRÉATION D'ÉLÉMENTS ET AJOUT DANS LE DOM - V2
//On sélectionne le conteneur
let conteneur = document.querySelector("#conteneur");
//On inject la nouvelle balise directement en modifiant l'HTML
conteneur.innerHTML+='<a href="#">Bouton</a>';