// https://www.w3schools.com/jsref/jsref_obj_date.asp

//Génération des div Heures-Minutes
for (i=0; i<24; i++){
    let nouvelleBalise = document.createElement("div"); //<div></div>
    nouvelleBalise.className="bloc"; //<div class="bloc"></div>
    nouvelleBalise.id=`h${i}`; //<div class="bloc" id="h0"></div>
    //On récupère le conteneur Heures
    let conteneurHeures = document.querySelector("#heures");
    conteneurHeures.appendChild(nouvelleBalise);
}
for (i=0; i<60; i++){
    let nouvelleBalise = document.createElement("div"); //<div></div>
    nouvelleBalise.className="bloc"; //<div class="bloc"></div>
    nouvelleBalise.id=`m${i}`; //<div class="bloc" id="m0"></div>
    //On récupère le conteneur Minutes
    let conteneurMinutes = document.querySelector("#minutes");
    conteneurMinutes.appendChild(nouvelleBalise);
}

//Affichage Heures-Minutes
function maj(){
    let clear = document.querySelectorAll(".bloc")
    clear.forEach(function(classBloc,i){
        classBloc.innerHTML="";
        classBloc.classList.remove("on");
    });
    
    // instanciation d'une date
    let d = new Date();

    //Methodes qui récupèrent directement la Date et l'heure
    let hour = d.getHours();
    let min = d.getMinutes();

    // affichage dans la page html
    let hourShown = document.getElementById(`h${hour}`);
    hourShown.innerHTML = `${hour}`
    hourShown.classList.add("on");

    let minShown = document.getElementById(`m${min}`);
    minShown.innerHTML = `${min}`
    minShown.classList.add("on");
}
//Appel de la fonction
maj();
//Appel de la fonction toutes les 10 sec
setInterval(maj,10000);