// Android : <i class="bi bi-android2"></i>
// Etoile : <i class="bi bi-asterisk"></i>
// Avion : <i class="bi bi-airplane-engines-fill"></i>
// Coeur : <i class="bi bi-arrow-through-heart-fill"></i>

//Tableaux de paramètres
let backgroundColors = ["turquoise", "yellow", "red", "lime"];
let txtColors = ["black", "purple", "white", "blue"];
let icones = ["bi-android2", "bi-asterisk", "bi-airplane-engines-fill", "bi-arrow-through-heart-fill"];

let preset = [
    {backgroundColor: "yellow", txtColor:"purple", icone:"bi-asterisk"},
    {backgroundColor: "red", txtColor:"black", icone:"bi-android2"},
]
console.table(preset)

//Div où ajouter les balises générées
let contBgColors = document.querySelector("#contBgColors");
let contTxtColors = document.querySelector("#contTxtColors");
let iconesType = document.querySelector("#iconesType");


//Div où appliquer les modifications
let iconeAffiche = document.querySelector(".bi");
let carre = document.querySelector("#carre");

//SELECTION BACKGROUND COLOR
backgroundColors.forEach(function(backgroundColor,i){
    let cube = document.createElement("a")
    cube.className="btn ";
    cube.id = backgroundColor;
    cube.style.backgroundColor=backgroundColor;
    contBgColors.appendChild(cube);
    //Modification BG icone au clic
    cube.onclick=function(e){
        let colorBgStyle=e.target.getAttribute("id");
        carre.style.backgroundColor = colorBgStyle;
    }
})        

//COULEUR ICONE ET TEXTE
txtColors.forEach(function(txtColor,i){
    let cube = document.createElement("a")
    cube.className="btn ";
    cube.id = txtColor;
    cube.style.backgroundColor=txtColor;
    contTxtColors.appendChild(cube);
    //Modification COULEUR icone et texte au clic
    cube.onclick=function(e){
        let colorStyle=e.target.getAttribute("id");
        iconeAffiche.style.color = colorStyle;
        zoneTexte.style.color = colorStyle;
    }
})

//SELECTION ICONE
icones.forEach(function(icone){
    let cube = document.createElement("a")
    cube.className="btn";
    iconesType.appendChild(cube);
    let img =  document.createElement("i");
    img.className="bi "+icone;
    cube.appendChild(img);
    //Modification Icone au clic    
    cube.onclick=function(e){
        iconeAffiche.className = "bi "+icone;
    }
})

//INTITULE
let zoneTexte = document.querySelector("#zoneTexte");
let ligne = document.querySelector("#ligne");
ligne.onkeyup=majTexte;
//Fonction majTexte
function majTexte(){
    zoneTexte.innerHTML= ligne.value
}

majTexte();