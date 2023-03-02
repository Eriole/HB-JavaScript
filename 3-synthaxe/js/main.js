/*
// POP-UP
alert("message informatif");                                    // 1 bouton
confirm("Ce site utilise des cookies. Les acceptez-vous?");     // 2 boutons
prompt("Indiquez votre âge");                                   // avec champ de texte
*/

/*
//ÉCRITURE SUR LA PAGE
document.body.innerHTML = "Hello"; //écriture
//Concaténation :
document.body.innerHTML += "World"; //équivalent :document.body.innerHTML = document.body.innerHTML + "World"
*/

/*
//CONSOLE ET VARIABLE, CONCATENATION
var prenom = "Mickael";
var phrase = "Bonjour " + prenom;
console.log(phrase);                //Préparation d'une phrase à afficher

var salutation = "Bonjour "
salutation += prenom;               //Préparation d'une phrase à afficher
console.log(salutation)

console.log("Bonjour " + prenom);   //affichage d'une valeur, résultat de 2 chaînes concaténées
console.warn("Bonjour",prenom);      //affichage de 2 valeurs - mode alerte
console.error(`Bonjour ${prenom}`);   //ES6 - template strings (AltGr + 7) - mode erreur
*/

/*
//VAR-LET-CONST
var nom = "toto";
var nom = "tata";       //pas d'erreur

let nom = "toto";
let nom = "tata";       //erreur parce que 2 déclarations
nom = "tata"            //pas d'erreur - modification de valeur

const nom = "toto";
const nom = "tata";     //erreur parce que 2 déclarations
nom = "tata";           //erreur - impossible de modifier une constante

if(true){
    var nom = "toto";       //globale
    let nom = "toto";       //locale-que dans le bloc if
    const nom = "toto";     //locale
}
*/

/*
//TYPES
//let nom = "toto"; // = new String("toto");
//console.log(nom, typeof(nom), Boolean(nom));

let age = prompt("Votre age svp ?");
age = Number(age);              //cast - convertit le prompt "string" en "nombre"
console.log(`Age : ${age}`);
console.log(`Age suivant : ${age+1}`);          //problème : concaténation parce que prompt→string
console.log(`Année naissance : ${2023-age}`);
*/

/*
//IF - ELSE
let age = 20;
//if (age>= 18){
//    var majeur = true;
//}else{
//    var majeur = false;
//}

//opérateur ternaire - de la forme : var nomVariable = (test)? ValeurSiVraie : ValeurSiFausse
var majeur = (age>=18)? true : false;

console.log("majeur ", majeur)
*/

/*
//SWITCH
let numJour = 6;
switch(numJour){
    case 1:
        var jour = "lundi";
        break;
    case 2:
        var jour = "mardi";
        break;   
    case 3:
        var jour = "mercredi";
        break;
    case 4:
        var jour = "jeudi";
        break;
    case 5:
        var jour = "vendredi";
        break;
    case 6:
    case 7:
        var jour = "weekend";
        break;
    default:
        var jour = "pas dans la semaine";
}
console.log(jour);
*/

/*
//BOUCLE - WHILE
let i=1;
while(i<=3){
    console.log(i);
    i++;
}
*/

/*
//BOUCLE - FOR
for(let i=0; i<=3; i++){
    if(i==2) continue; //passe à l'itération de boucle suivante - (break sort de la boucle)
    console.log(i);
}
*/

/*
//FONCTION SANS VALEUR DE RETOUR
//Déclaration
function saluer(prenom, nom=""){            //valeur par défaut du param optionnel "nom" en ES6 + récent
    //if(nom===undefined) nom == "";        //valeur par défaut du param optionnel "nom" en ES5
    console.log (`Bonjour ${prenom} ${nom}`);
}

//Appel
saluer("Jean", "Dupont");
saluer("Axelle");
*/

/*
//FONCTION AVEC VALEUR DE RETOUR
function getSalutation(prenom, nom=""){
    return (`Bonjour ${prenom} ${nom}`); //Prépare la valeur
}

console.log(getSalutation("José", "Garcia"));
*/

/*
//PORTEE ET FONCTIONS
let x = 0;              //variable globale -déclarée en dehors d'une fonction
function maFonction(){
    console.log(x);     //variable x visible par la fonction
    var y = 1;          //variable locale -pas visible en dehors de la fonction (peut importe le mot clé)
}

maFonction();
console.log(y);         //erreur
*/

/*
//APPELS MULTILES AVEC DELAI D'UNE SECONDE
let timer = setInterval(compteur,1000); //lance
let i=0;
function compteur (){
    if(i==5) clearInterval(timer); // stoppe le timer si i est à 5
    console.log(i);
    i++;
}
*/

/*
//APPEL AVEC DELAI D'UNE SECONDE - V1
setTimeout(saluer, 1000);
function saluer(){
    console.log("Bonjour");
}
*/

/*
//APPEL AVEC DELAI D'UNE SECONDE - V2 avec fonction anonyme
setTimeout(function(){
    console.log("Bonjour");
}, 1000);
*/

/*
//APPEL AVEC DELAI D'UNE SECONDE - V3 avec fonction fléchées ES6
setTimeout(() => {
    console.log("Bonjour");
}, 1000);
*/

/*
//déclaration de fonction - v1
function saluer (prenom){
    return "bonjour "+prenom;
}
*/

/*
//déclaration de fonction - v2
let saluer = function(prenom){
    return "bonjour "+prenom;
}
*/

/*
//déclaration de fonction - v3
let saluer = (prenom) => {
    return "bonjour "+prenom;
}
*/

/*
//déclaration de fonction - v4 (si 1 param, on peut enlever les parenthèses)
let saluer = prenom =>{
    return "bonjour "+prenom;
}
*/

/*
//déclaration de fonction - v5 (si la fonction fait un "return" on peut enlever les accolades et le "Return")
let saluer = prenom => "bonjour "+prenom;

//appel
console.log(saluer("Alex"));
*/