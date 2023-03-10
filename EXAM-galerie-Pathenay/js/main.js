//Constructeur d'objet
class Vignettes{
    constructor(image_,nom_,categorie_,){
        this.image = image_;
        this.nom=nom_;
        this.categorie=categorie_;
        if(categorie_=="Animaux") this.prix=200;
        if(categorie_=="Personnes") this.prix=300;
        if(categorie_=="Paysages") this.prix=100;
    };
};
//Tableau des vignettes à afficher
let elements=[
    new Vignettes("img/animal1.jpg","Animal 1","Animaux"),
    new Vignettes("img/animal2.jpg","Animal 2","Animaux"),
    new Vignettes("img/animal3.jpg","Animal 3","Animaux"),
    new Vignettes("img/animal4.jpg","Animal 4","Animaux"),
    new Vignettes("img/paysage1.jpg","Paysage 1","Paysages"),
    new Vignettes("img/paysage2.jpg","Paysage 2","Paysages"),
    new Vignettes("img/paysage3.jpg","Paysage 3","Paysages"),
    new Vignettes("img/paysage4.jpg","Paysage 4","Paysages"),
    new Vignettes("img/personne1.jpg","Personne 1","Personnes"),
    new Vignettes("img/personne2.jpg","Personne 2","Personnes"),
    new Vignettes("img/personne3.jpg","Personne 3","Personnes"),
    new Vignettes("img/personne4.jpg","Personne 4","Personnes"),
]

//Récupération des div
let zone1 = document.querySelector("#zone1");
let zone2 = document.querySelector("#zone2");

//Récupération des p
let zone1Nom = document.querySelector("#nom");
let zone1Categorie = document.querySelector("#categorie");
let zone1Prix = document.querySelector("#prix");

//FILTRE
//Selection pour viser le "onchange"
let listeSelect = document.querySelector("select")

//Tableau de filtre initial
let elementsFiltre=elements;

//Filration du tableau "elements"
listeSelect.onchange=function(e){
    if (e.target.value=="") elementsFiltre=elements //Si "Tout afficher" alors reset
    else elementsFiltre = elements.filter(element => element.categorie==e.target.value);
    //Supression des autres img
    let images= document.querySelectorAll(".vignette")
    images.forEach(function(img){
        img.remove();
    });
    //Appel fonction Affichage
    afficherVignettes();
    initiale();
};

//Fonction qui affiche les vignettes
function afficherVignettes(){
    //Utilisation du tableau filtré
    elementsFiltre.forEach(function(element,i){
        //Création de la balise figure
        let figure = document.createElement("figure");
        //Configuration de la balise figure
        figure.className="vignette";
        figure.setAttribute("id",`v${i}`)
        figure.setAttribute("data-nom",`${element.nom}`)
        figure.setAttribute("data-categorie",`${element.categorie}`)
        figure.setAttribute("data-prix",`${element.prix}`)
        //Ajout de l'image et de la figcaption
        figure.innerHTML=`<img src="${element.image}" alt="${element.nom}"> <figcaption>${element.nom}</figcaption>`
        //Ajout de la balise dans la div zone2
        zone2.appendChild(figure);

    //GESTION DES EVENEMENTS
        //Evènement au survol
        figure.onmouseover=function(e){
            figure.style.boxShadow="0 0 10px lime";
        }
        figure.onmouseout=function(e){
            figure.style.boxShadow="";
        }
        //Evènement au clic
        figure.onclick=afficherImage;
    });
};

//AFFICHAGE ZONE 1 : première image selon la sélection
function initiale(){
    zone1.style.backgroundImage=`url(${elementsFiltre[0].image})`
    zone1Nom.innerHTML=elementsFiltre[0].nom;
    zone1Categorie.innerHTML=elementsFiltre[0].categorie;
    zone1Prix.innerHTML=`${elementsFiltre[0].prix} €`;
}

//AFFICHAGE ZONE 1 : selon le clic 
function afficherImage(e){
    //Récupération des informations
    let srcFigure=e.target.getAttribute("src");
    let nomFigure=e.target.parentNode.getAttribute("data-nom");
    let categorieFigure=e.target.parentNode.getAttribute("data-categorie");
    let prixFigure=e.target.parentNode.getAttribute("data-prix");
    //Affichage
    zone1.style.backgroundImage=`url(${srcFigure})`;
    zone1Nom.innerHTML=nomFigure;
    zone1Categorie.innerHTML=categorieFigure;
    zone1Prix.innerHTML=`${prixFigure} €`;
};

//INITIALISATION DES FONCTIONS
afficherVignettes();
initiale();