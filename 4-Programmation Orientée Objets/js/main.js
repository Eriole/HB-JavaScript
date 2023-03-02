/*
function demarrage(){
    console.log("VROUM");
}
*/

/*
// DECLARATION~INSTANCIATION D'OBJET - v1
let avion = new Object();
// propriétés / variables / caractéristiques
avion.marque = "Airbus";
avion.modele = "A380";
// méthodes / fonctions / actions
avion.demarrer = demarrage;                             //utilise la fonction déclarée avant
avion.klaxonner = function(){console.log("TUTUT"); };   //fonction anonyme
*/

/*
// INSTANCIATION / DECLARATION D'OBJET V2 (JSON / JavaScript Object Notation)
let avion = {
    marque : "Airbus",
    modele : "A380",
    demarrer: demarrage,
    klaxonner: function(){console.log("TUTUT"); }
};
*/

/*
// INSTANCIATION / DECLARATION D'OBJET V3 (avec function)
function JoliAvion(marque_, modele_, klaxon_="Tututu"){
    this.marque = marque_; //utilisation de "marque_" pour bien distinguer la propriété et le paramètre
    this.modele = modele_;
    this.klaxon = klaxon_;
    this.demarrer = demarrage;
    this.klaxonner=function(){console.log(this.klaxon);}
}

let avion = new JoliAvion("Airbus", "A380");                //Créer un objet 1
let avion2 = new JoliAvion("Boeing", "747", "Tatata");      //Créer un objet 2
*/

/*
// INSTANCIATION / DECLARATION D'OBJET V4 (avec classe -ES6)
class JoliAvion {
    //fonction constructor appelé automatiquement à chaque "new" instance de classe
    constructor(marque_, modele_, klaxon_ = "Tututu") {
        this.marque = marque_; //utilisation de "marque_" pour bien distinguer la propriété et le paramètre
        this.modele = modele_;
        this.klaxon = klaxon_;
    }
    demarrer(){};
    klaxonner = function () { console.log(this.klaxon); };
}

let avion = new JoliAvion("Airbus", "A380");                //Créer un objet 1
let avion2 = new JoliAvion("Boeing", "747", "Tatata");      //Créer un objet 2

// UTILISATION DE L'OBJET
console.log(avion);
console.log(`Il s'agit d'un ${avion.marque} ${avion.modele} qui fait ${avion.klaxon}.`);
//Appel des fonctions
avion.demarrer();
avion.klaxonner();

console.log(avion2);
console.log(`Il s'agit d'un ${avion2.marque} ${avion2.modele} qui fait ${avion2.klaxon}.`);
*/

/*
let personne = {prenom:"Joe", nom:"Gallagan"};
console.log(personne);

//DESTRUCTURING D'OBJET
//let {prenom,nom}=personne;
        //Équivaunt à :
        //let prenom = personne.prenom;
        //let nom = personne.nom;
    //possible de modifier le nom de d'une propriété : let{prenom:lePrenom}=personne

console.log(prenom,nom);
*/

/*
//BOUCLE FOR - IN
let personne = {prenom:"Joe", nom:"Gallagan"};
console.log(personne);

for(let x in personne){
    console.log(x,personne[x]);
    //parcours les propriétés de l'objet et les affiche
    //personne[x] pour afficher la valeur de la propriété parcourue
}
*/

/*
//UTILISATION DES OBJETS CHAINE
let nom = "toto";
console.log(nom, typeof(nom), nom.length, nom.toUpperCase());
//affiche le texte, le type, propriété longueur, méthode de passage en majuscule
*/

/*
// UTILISATION DE L'OBJET MATH
// let m = new Math(); // exceptionnellement, pas besoin
console.log(Math.PI);
console.log(Math.round(1.2));   // arrondi proche
console.log(Math.round(1.8));   // arrondi proche
console.log(Math.floor(1.8));   // arrondi bas
console.log(Math.ceil(1.2));    // arrondi haut
console.log(Math.random());     // aléatoire
*/