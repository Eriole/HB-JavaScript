// https://www.w3schools.com/jsref/jsref_obj_date.asp

//Génération des div Heures-Minutes
function genererBlocs(balise,qty,idDiv){
    for (i=0; i<qty; i++){
        let nouvelleBalise = document.createElement("div"); //<div></div>
        nouvelleBalise.className="bloc"; //<div class="bloc"></div>
        nouvelleBalise.id=balise+i; //<div class="bloc" id="h0"></div>
        //On récupère le conteneur
        let conteneurHeures = document.querySelector(`${idDiv}`);
        conteneurHeures.appendChild(nouvelleBalise);
    }
}

genererBlocs("h",24,"#heures")
genererBlocs("m",60,"#minutes")

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