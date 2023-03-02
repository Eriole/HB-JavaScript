
//V1
function clic(){
    let h1 = document.querySelector("h1"); //ne ciblera QUE le premier h1
    h1.style.color="blue";
}

//Ajout du paramètre "this" dans l'évènement dans la balise
function clic(balise,couleur){
    balise.style.color=couleur;
}

//V2
function clicE(evt,couleur){ //"event" permet de récupérer une liste d'info au clic
    console.log(evt);
    let balise = evt.target; // ".target" cible la balise
    balise.style.color=couleur;
}

//V3 - Pas possible pour faire des personnalisations individuelles
let h3 = document.querySelector("h3");
h3.onclick= function(e){
    let balise = e.target; // ".target" cible la balise
    balise.style.color="crimson";
}
/*
//Possible de mettre la fonction à part de demander l'exécution au clic
//utile si besoin d'utiliser la fonction ailleurs
h3.onclick= clicPerso;
function clicPerso(e){
    let balise = e.target; // ".target" cible la balise
    balise.style.color="crimson";
}*/

//V4 - Utilisation des "data-" + boucle sur le querySelectorAll
let h4Liste = document.querySelectorAll("h4");
h4Liste.forEach(function(h4,i){
    h4.onclick= function(e){
        let balise = e.target; // ".target" cible la balise
        let couleur = balise.getAttribute("data-couleur"); //les "data-" sont des attributs personnels
        balise.style.color=couleur;
    }
});

//V5 - AddEventListener - Possible de mettre des écouteurs différents
let h5 = document.querySelector("h5");
h5.addEventListener("click",function(e){ //"click" mot réservé pour l'action clic
    e.target.style.color="brown"
});