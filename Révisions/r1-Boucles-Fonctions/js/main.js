// BOUCLES

// while
let i=1;
while(i<=3){
    // console.log(i);
    i++;
}

// for
for(let i=1;i<=3;i++){
    if(i==2) continue; // (break sort de la boucle)
    // console.log(i);
}

// for in (pour parcourir un objet)
let personne = {
    prenom:"toto",
    nom:"tata"
};
console.log(personne.prenom,personne["prenom"]);
for(let prop in personne){
    console.log(prop,personne[prop]);
}

// FONCTIONS

// fonction qui ne retourne rien
function additionner(a,b){
    let resultat = Number(a) + Number(b);
    console.log(resultat);
}
additionner(10,20);

// fonction qui retourne une valeur
function additionnerEtRetournerResultat(a,b){
    let resultat = Number(a) + Number(b);
    return resultat;
}
let resultatAddition = additionnerEtRetournerResultat(10,20);
console.log(resultatAddition);
alert(resultatAddition);

// v1
setTimeout(saluer,1000);
function saluer(){
    console.log("Bonjour");
}

// v2 (fonction anonyme)
setTimeout(function(){
    console.log("Bonjour");
},1000);