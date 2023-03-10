//Afficher les images, les positionner et ajouter filtrage en fonction du type
//LISTE DES IMAGES
//Construit les objets
class ObjetCeleste {
    constructor(type_, url_, width_){
        this.type = type_;
        this.url = url_;
        this.width = width_;
        //2 random pour les positions
        this.posX = Math.round(Math.random()*90);
        this.posY = Math.round(Math.random()*90);
    }
}
//Liste les objets dans un tableau
let elements = [
    new ObjetCeleste("astre", "img/astre1.png", 100),
    new ObjetCeleste("astre", "img/astre2.png", 150),
    new ObjetCeleste("etoile", "img/etoile1.png", 200),
    new ObjetCeleste("etoile", "img/etoile2.png", 150),
    new ObjetCeleste("etoile", "img/etoile3.png", 150),
    new ObjetCeleste("objet", "img/objet1.png", 100),
    new ObjetCeleste("objet", "img/objet2.png", 140),
    new ObjetCeleste("objet", "img/objet3.png", 120),
    new ObjetCeleste("objet", "img/objet4.png", 250),
    new ObjetCeleste("planete", "img/planete1.png", 200),
    new ObjetCeleste("planete", "img/planete2.png", 100),
    new ObjetCeleste("planete", "img/planete3.png", 200),
    new ObjetCeleste("planete", "img/planete4.png", 100),
];
//Initialisation du filtrage
let elementFilter = elements ;

//AFFICHAGE DES IMAGES SUR LA PAGE
majAffichage()

//Boucle qui parcours un tableau et créer une img
function majAffichage(){
    elementFilter.forEach(function(element,i){
        //Création de la balise img
        let img = document.createElement("img");
        //Configuration de la balise img
        img.setAttribute("src",`${element.url}`);
        img.style.position="absolute";
        img.style.width=element.width+"px";
        img.style.top=element.posY+"%";
        img.style.left=element.posX+"%";
        img.className="objet";
        //Ajout de la balise dans le DOM
        document.body.appendChild(img);
    });
}

//MENU DEROULANT
//Créer un tableau avec les types en parcourant le premier tableau (includes?)
let listeTypes =[];
elements.forEach(function(element,i){
    if (listeTypes.includes(element.type)==false) listeTypes.push(element.type);
})
//Créer un menu déroulant à l'aide du tableau listeTypes
let listeSelect = document.createElement("select");
document.body.appendChild(listeSelect);
//Créer une option pour chaque type avec value=type et texte=type
listeSelect.innerHTML +=`<option value="">Tout afficher</option>`;
listeTypes.forEach(function(type,i){
    listeSelect.innerHTML +=`<option value="${type}">${type}</option>`;
});

//Selection du type et suppression des autres images
listeSelect.onchange=function(e){
    if (e.target.value=="") elementFilter=elements //Si "Tout afficher" alors reset
    else elementFilter = elements.filter(element => element.type==e.target.value);
    //Supression des autres img
    let images= document.querySelectorAll(".objet")
    images.forEach(function(image){
    image.remove();})
    //Appel fonction Affichage
    majAffichage();
};