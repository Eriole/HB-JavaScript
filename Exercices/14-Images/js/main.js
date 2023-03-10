//querySelectorAll("img") trop général - ajout d'une classe et ciblage

//V6 - Animation
function animationSurvol(balise,chemin){
    balise.setAttribute("src",chemin);
    balise.className = "animate__animated animate__fadeIn"
}
function animationSortie(balise,chemin){
    balise.setAttribute("src",chemin);
    balise.className = "";
}

/*
//V4
function changerImg(balise,chemin){
    balise.setAttribute("src",chemin);
}
*/

/*
//V3
//Récupération de toutes les balises img.survolable
//classe "survolable" ou récupérer celles qui ont l'attribut "img[data-imgalt]""
let liste = document.querySelectorAll("img.survolable");
//Boucle qui applique 
liste.forEach(function(img,i){
    img.onmouseover=intervertirAttributs
    img.onmouseout=intervertirAttributs
})
//Fonction qui change le lien du fichier
function intervertirAttributs(e){
    let img = e.target;
    let src = img.getAttribute("src");
    let imgAlt = img.getAttribute("data-imgalt");
    img.setAttribute("src",imgAlt);
    img.setAttribute("data-imgalt",src);
}*/

/*
//V2
//Stockage des url
let imgBalises = [
    {img1 : "./img/1.jpg", img2 : "./img/2.jpg"},
    {img1 : "./img/3.jpg", img2 : "./img/4.jpg"}
]
//Récupération de toutes les balises img
let liste = document.querySelectorAll(".survolable");
//Fonction qui change le lien du fichier
liste.forEach(function(img,i){
    img.onmouseover=function(e){
        e.target.setAttribute("src",imgBalises[i].img2);
    }
    img.onmouseout=function(e){
        e.target.setAttribute("src",imgBalises[i].img1);
    }
})
*/

/*
//V1
//Récupération de la balise img
let img = document.querySelector("img")
let img2 = document.querySelector("img:nth-of-type(2)")

//Fonction qui change le lien du fichier
function src(fichier){
    img.setAttribute("src", fichier);
}

function src2(fichier){
    img2.setAttribute("src", fichier);
}

//Modification au survol
img.onmouseout=(e)=>{src('./img/1.jpg')};
img.onmouseover=(e)=>{src('./img/2.jpg')};

img2.onmouseout=(e)=>{src2('./img/3.jpg')};
img2.onmouseover=(e)=>{src2('./img/4.jpg')};
*/