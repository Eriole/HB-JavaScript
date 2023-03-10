//Valeur initiales
let posX = 0;
let posY = 0;
let pas = 10;
let tailleTexte = 1.4;

//Selection zone1
let zone1 = document.querySelector("#zone1");
zone1.style.background = `white url(img/can_bleue.png) no-repeat center center`;

//Perso canette
let vignettes = document.querySelectorAll("#choixCouleurs img");

vignettes.forEach(function(vignette){
    vignette.onclick=function(e){
        let srcVignette=e.target.getAttribute("src")
        zone1.style.background = `white url(${srcVignette}) no-repeat center center`;
    }
})

//Texte
let zoneTexte = document.querySelector("#zoneTexte");
let ligne = document.querySelector("#ligne");

ligne.onkeyup=majTexte;
//Fonction majTexte
function majTexte(){
    zoneTexte.innerHTML = `<p> ${ligne.value} </p>`;
    zoneTexte.style.left = posX+"px";
    zoneTexte.style.top = posY+"px";
    zoneTexte.style.fontSize = tailleTexte+"em";
}

//Récupération et évolution de la position
let posHaut = document.querySelector("#posHaut");
let posBas = document.querySelector("#posBas");
let posDroite = document.querySelector("#posDroite");
let posGauche = document.querySelector("#posGauche");

posHaut.onclick=function(e){
    posY-=pas;
    majTexte();
};
posBas.onclick=function(e){
    posY+=pas;
    majTexte();
};
posGauche.onclick=function(e){
    posX+=pas;
    majTexte();
};
posDroite.onclick=function(e){
    posX-=pas;
    majTexte();
};

//Modification Police
let btsPolices = document.querySelectorAll("[data-police]");
btsPolices.forEach(function(btPolice){
    btPolice.onclick=function(e){
        let police=e.target.getAttribute("data-police");
        zoneTexte.style.fontFamily = police;
    }
})

//Modification Couleur
let btsCouleurs = document.querySelectorAll("[data-couleur]");
btsCouleurs.forEach(function(btCouleur){
    btCouleur.onclick=function(e){
        let couleur=e.target.getAttribute("data-couleur");
        zoneTexte.style.color = couleur;
    }
})

//Modification Taille
let taillePetit = document.querySelector("#taillePetit");
let tailleGrand = document.querySelector("#tailleGrand");
taillePetit.onclick=function(e){
    tailleTexte-=0.2;
    majTexte();
};
tailleGrand.onclick=function(e){
    tailleTexte+=0.2;
    majTexte();
};
majTexte();

//Possibilité de mettre les écouteurs en HTML
//majTexte est directement sur l'input
//Les clic position appellent une fonction majPosition ... etc.
/*
posDroite.onclick=majPosText;
posGauche.onclick=majPosText;
posHaut.onclick=majPosText;
posBas.onclick=majPosText;
function majPosText(e){
    if(e.target==posDroite){
        posX+=pas;
    }
    if(e.target==posGauche){
        posX-=pas;
    }
    if(e.target==posHaut){
        posY-=pas;
    }
    if(e.target==posBas){
        posY+=pas;
    }
    majTexte();
};*/