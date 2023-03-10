//Selection du bouton h2 "Popup" (sous forme de liste)
let btnListe = document.querySelectorAll("#boutons>h2");

//Parcours la liste et applique fonction
btnListe.forEach(function(btn,i){
    btn.onclick=affichePopup;
});

//Fonction qui ferme tout
function closeAll(){
    let onPopupList = document.querySelectorAll(".popUp");
    console.log(onPopupList)
    onPopupList.forEach(function(pop){pop.style.display="none"});
};

//Fonction qui affiche la Popup Affichage
function affichePopup(e){
    //D'abord on ferme tout
    closeAll();

    //On affiche que le bloc qui nous intéresse
    let btn = e.target;
    //Sélection de la popup correspondant à l'id (en vrai : valeur de l'attribut data-target)
    let popup = document.querySelector("#"+btn.getAttribute("data-target"));
    //display : block de l'article id
    popup.style.display="block";
};

//Selection des boutons h4 X (sous forme de liste)
let closeListe = document.querySelectorAll(".popUp>div>h4");

//Parcours la liste et applique fonction Fermeture
closeListe.forEach(function(croix,i){
    croix.onclick=closePopup;
});

//Fonction qui ferme la Popup
function closePopup(e){
    let croix = e.target;
    //Sélection du parent article du parent div du bouton croix
    let popup = croix.parentNode.parentNode ;
    //display : none de l'article id
    popup.style.display="none";
};