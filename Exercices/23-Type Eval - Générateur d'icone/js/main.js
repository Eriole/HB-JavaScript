// Android : <i class="bi bi-android2"></i>
// Etoile : <i class="bi bi-asterisk"></i>
// Avion : <i class="bi bi-airplane-engines-fill"></i>
// Coeur : <i class="bi bi-arrow-through-heart-fill"></i>

//Tableaux de paramètres
let backgroundColors = ["turquoise", "yellow", "red", "lime"];
let txtColors = ["black", "purple", "white", "blue"];
let icones = ["bi-android2", "bi-asterisk", "bi-airplane-engines-fill", "bi-arrow-through-heart-fill"];
let presets = [
    {backgroundColor: "yellow", txtColor:"purple", icone:"bi-asterisk"},
    {backgroundColor: "red", txtColor:"black", icone:"bi-android2"},
    {backgroundColor: "lime", txtColor:"white", icone:"bi-airplane-engines-fill"},
    {backgroundColor: "turquoise", txtColor:"blue", icone:"bi-arrow-through-heart-fill"},
]

//Div où ajouter les balises générées
let contBgColors = document.querySelector("#contBgColors");
let contTxtColors = document.querySelector("#contTxtColors");
let iconesType = document.querySelector("#iconesType");
let presetSelect = document.querySelector("#presetSelect");

//Div où appliquer les modifications
let iconeAffiche = document.querySelector(".bi");
let carre = document.querySelector("#carre");

//VALEURS INITIALES
let colorBgStyle = "yellow";
let colorStyle = "black";
let iconeName = "bi-android2";

//FONCTION DE MISE A JOUR GENERALE
function majIcone(){
    carre.style.backgroundColor = colorBgStyle;
    iconeAffiche.style.color = colorStyle;
    zoneTexte.style.color = colorStyle;
    iconeAffiche.className = "bi "+iconeName;
};

//FONCTION QUI AJOUTE UN BOUTON -- FONCTIONNE PAS
//Il faudrait mettre l'écouteur onclick dans la fonction et différencier les propriétés
function ajoutBouton(conteneur,couleur){
    let cube = document.createElement("a");
    cube.className="btn";
    cube.style.backgroundColor=couleur;
    conteneur.appendChild(cube);
}

//GENERATION ET SELECTION BACKGROUND COLOR
backgroundColors.forEach(function(backgroundColor,i){
    let cube = document.createElement("a");
    cube.className="btn";
    cube.style.backgroundColor=backgroundColor;
    contBgColors.appendChild(cube);
    //Modification BACKGROUND COLOR icone au clic
    cube.onclick=function(e){
        //Modification valeur colorBgStyle
        colorBgStyle=backgroundColor;
        majIcone();
    }
})        

//GENERATION ET SELECTION COULEUR ICONE ET TEXTE
txtColors.forEach(function(txtColor,i){
    let cube = document.createElement("a");
    cube.className="btn";
    cube.style.backgroundColor=txtColor;
    contTxtColors.appendChild(cube);
    //Modification COULEUR icone et texte au clic
    cube.onclick=function(e){
        //Modification valeur colorStyle  
        colorStyle=txtColor;
        majIcone();
    }
})

//GENERATION ET SELECTION ICONE
icones.forEach(function(icone){
    let cube = document.createElement("a");
    cube.className="btn";
    iconesType.appendChild(cube);
    cube.innerHTML=`<i class="bi ${icone}"></i>`
    //Modification Icone au clic    
    cube.onclick=function(e){
        //Modification valeur iconeName        
        iconeName= icone;
        majIcone();
    }
})

//GENERATION ET SELECTION PRESET
presets.forEach(function(preset,i){
    let cube = document.createElement("a");
    cube.className="btn";
    cube.setAttribute("data-bgColor", preset.backgroundColor);
    cube.setAttribute("data-txtColor", preset.txtColor);
    cube.setAttribute("data-icone",preset.icone);
    cube.innerHTML=i;
    presetSelect.appendChild(cube);
    //Modification Icone au clic
    cube.onclick=function(e){
        //Modification valeur colorStyle  
        colorStyle=e.target.getAttribute("data-txtColor");
        colorBgStyle=e.target.getAttribute("data-bgColor");
        iconeName=e.target.getAttribute("data-icone");
        majIcone();
    }
})

//INTITULE
let zoneTexte = document.querySelector("#zoneTexte");
let ligne = document.querySelector("#ligne");
ligne.onkeyup=majTexte;

//Fonction majTexte
function majTexte(){
    zoneTexte.innerHTML= ligne.value;
}

//INITIALISATION DES FONCTIONS
//(pour que ça s'affiche au lancement de la page)
majIcone();
majTexte();